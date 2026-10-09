/**
 * Site-wide search — the same search as www.macnman.com (⌘K / Ctrl+K, or
 * "/", or the header search button), so both sites look and behave alike.
 *
 * The ranking, grouping and highlighting are ported from the main website's
 * SiteSearch component. The index is assembled from two sources, fetched
 * once per session:
 *  - this site's own entries (every documentation page, built by
 *    plugins/search-index.js), and
 *  - the main website's index (products, datasheet PDFs, blogs, success
 *    stories, pages), whose documentation entries are replaced by ours.
 *
 * Usage: <SiteSearchProvider> at the root (src/theme/Root.tsx), then
 * useSiteSearch().open() from any button.
 */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {createPortal} from 'react-dom';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBox,
  FiCornerDownLeft,
  FiEdit3,
  FiFile,
  FiFileText,
  FiSearch,
} from 'react-icons/fi';

import styles from './styles.module.css';

const SITE = 'https://www.macnman.com';
const REMOTE_INDEX = `${SITE}/search-index.json`;

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */
export interface SearchItem {
  type: 'product' | 'page' | 'doc' | 'blog' | 'story' | 'file';
  title: string;
  text: string;
  url: string;
  group: string;
  /** Documentation entries only: User Manual, Datasheets, Books, … */
  section?: string;
  crumb?: string;
}

interface Scored extends SearchItem {
  score: number;
}

/* ------------------------------------------------------------------ */
/* Context                                                              */
/* ------------------------------------------------------------------ */
const Ctx = createContext<{open: () => void; close: () => void; isOpen: boolean}>({
  open: () => {},
  close: () => {},
  isOpen: false,
});
export const useSiteSearch = () => useContext(Ctx);

/* ------------------------------------------------------------------ */
/* Ranking (identical to the main website)                              */
/* ------------------------------------------------------------------ */
const GROUP_ORDER = [
  'User Manual',
  'Datasheets',
  'Books',
  'Tech Reports',
  'Help',
  'Products',
  'Files',
  'Success Stories',
  'Blogs',
  'Pages',
];
const GROUP_ICON: Record<string, ReactNode> = {
  'User Manual': <FiBookOpen />,
  Datasheets: <FiBookOpen />,
  Books: <FiBookOpen />,
  'Tech Reports': <FiBookOpen />,
  Help: <FiBookOpen />,
  Products: <FiBox />,
  Files: <FiFile />,
  'Success Stories': <FiAward />,
  Blogs: <FiEdit3 />,
  Pages: <FiFileText />,
};
const groupOf = (item: SearchItem) => item.section ?? item.group;

const norm = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');
const tokenize = (q: string) => norm(q).split(/[^a-z0-9+.]+/).filter((t) => t.length > 0);

function score(item: SearchItem, tokens: string[], rawQuery: string): number {
  const title = norm(item.title);
  const text = norm(item.text);
  const url = norm(item.url);
  let s = 0;
  // Whole-phrase bonuses
  if (title === rawQuery) s += 100;
  else if (title.startsWith(rawQuery)) s += 60;
  else if (title.includes(rawQuery)) s += 40;
  // Every token must match somewhere; weight where it matches
  for (const t of tokens) {
    const inTitle = title.includes(t);
    const inText = text.includes(t);
    const inUrl = url.includes(t);
    if (!inTitle && !inText && !inUrl) return 0;
    if (inTitle) s += title.split(/\s+/).some((w) => w.startsWith(t)) ? 20 : 12;
    else if (inUrl) s += 6;
    else s += 4;
  }
  // Light preference for primary content types
  if (item.type === 'product') s += 6;
  if (item.type === 'page') s += 2;
  // A product's main page should outrank its own Compare / Tech-Specs sub-tabs
  // and datasheet, unless the query explicitly asks for those.
  const asksForSub = /compare|spec|datasheet|pdf/.test(rawQuery);
  if (!asksForSub && /—\s*(Compare|Technical Specifications|Datasheet)/.test(item.title)) s -= 15;
  return s;
}

function highlight(str: string, tokens: string[]): ReactNode {
  if (!tokens.length) return str;
  const re = new RegExp(
    `(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'ig',
  );
  return str.split(re).map((part, i) =>
    re.test(part) ? (
      <mark key={i} className={styles.mark}>
        {part}
      </mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

/* ------------------------------------------------------------------ */
/* Index loading                                                        */
/* ------------------------------------------------------------------ */
let indexCache: SearchItem[] | null = null;
let indexPromise: Promise<SearchItem[]> | null = null;

const loadIndex = (): Promise<SearchItem[]> => {
  if (indexCache) return Promise.resolve(indexCache);
  if (!indexPromise) {
    const local = import('@generated/macnman-search-index/default/search-index.json')
      .then((m) => ((m as {default?: SearchItem[]}).default ?? (m as unknown)) as SearchItem[])
      .catch(() => [] as SearchItem[]);
    const remote = fetch(REMOTE_INDEX, {signal: AbortSignal.timeout(8000)})
      .then((r) => (r.ok ? r.json() : {items: []}))
      .then((d: {items?: SearchItem[]}) => d.items ?? [])
      .catch(() => [] as SearchItem[]);
    indexPromise = Promise.all([local, remote]).then(([docs, site]) => {
      const docUrls = new Set(docs.map((i) => i.url));
      // The main site's own documentation entries are built from the docs
      // sitemap; ours carry the real titles, so they take their place.
      const rest = site.filter((i) => i.type !== 'doc' && !docUrls.has(i.url));
      indexCache = [...docs, ...rest];
      return indexCache;
    });
  }
  return indexPromise;
};

/* ------------------------------------------------------------------ */
/* Provider                                                             */
/* ------------------------------------------------------------------ */
const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement &&
  (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

export function SiteSearchProvider({children}: {children: ReactNode}): ReactNode {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  // Global shortcuts: ⌘K / Ctrl+K toggles, "/" opens (outside text fields).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey && !isTyping(e.target)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <Ctx.Provider value={{open, close, isOpen}}>
      {children}
      {isOpen && <SearchModal onClose={close} />}
    </Ctx.Provider>
  );
}

/* ------------------------------------------------------------------ */
/* Modal                                                                */
/* ------------------------------------------------------------------ */
const SUGGESTIONS = ['LoRaWAN gateway', 'MacSync', 'Payload structure', 'Datasheet', 'Mounting', 'Maya app'];

function Kbd({children}: {children: ReactNode}): ReactNode {
  return <kbd className={styles.kbd}>{children}</kbd>;
}

function SearchModal({onClose}: {onClose: () => void}): ReactNode {
  const history = useHistory();
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;
  const [q, setQ] = useState('');
  const [index, setIndex] = useState<SearchItem[] | null>(indexCache);
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadIndex().then(setIndex);
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close when the route changes underneath (back button etc.).
  useEffect(() => history.listen(() => onClose()), [history, onClose]);

  const tokens = useMemo(() => tokenize(q), [q]);
  const rawQuery = norm(q.trim());

  const results = useMemo(() => {
    if (!index || tokens.length === 0) return [] as Scored[];
    return index
      .map((it) => ({...it, score: score(it, tokens, rawQuery)}))
      .filter((it) => it.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40);
  }, [index, tokens, rawQuery]);

  // Group while preserving score order inside each group
  const grouped = useMemo(() => {
    const m = new Map<string, Scored[]>();
    for (const r of results) m.set(groupOf(r), [...(m.get(groupOf(r)) || []), r]);
    const known = GROUP_ORDER.filter((g) => m.has(g));
    const other = [...m.keys()].filter((g) => !GROUP_ORDER.includes(g));
    return [...known, ...other].map((g) => ({group: g, items: m.get(g)!}));
  }, [results]);
  const flat = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  useEffect(() => setCursor(0), [q]);
  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-idx="${cursor}"]`)
      ?.scrollIntoView({block: 'nearest'});
  }, [cursor]);

  const go = (item: SearchItem) => {
    onClose();
    const external = /^https?:\/\//.test(item.url);
    if (external || item.type === 'file') {
      window.open(item.url, '_blank', 'noopener');
    } else if (item.url.startsWith(baseUrl)) {
      history.push(item.url); // one of our own pages: stay in the app
    } else {
      window.location.assign(`${SITE}${item.url}`); // a main-website page
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, flat.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === 'Enter' && flat[cursor]) {
      e.preventDefault();
      go(flat[cursor]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Search the site"
      onKeyDown={onKeyDown}>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.panel}>
        {/* Input */}
        <div className={styles.inputRow}>
          <FiSearch className={styles.inputIcon} aria-hidden="true" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, docs, datasheets, blogs…"
            className={styles.input}
            autoComplete="off"
            spellCheck={false}
          />
          {q && (
            <button type="button" onClick={() => setQ('')} className={styles.clear} aria-label="Clear">
              Clear
            </button>
          )}
          <button type="button" className={clsx(styles.kbd, styles.esc)} onClick={onClose}>
            ESC
          </button>
        </div>

        {/* Body */}
        <div ref={listRef} className={styles.body}>
          {!index && <p className={styles.status}>Loading index…</p>}

          {index && q.trim() === '' && (
            <div className={styles.empty}>
              <p className={styles.eyebrow}>Try searching for</p>
              <div className={styles.chips}>
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => setQ(s)} className={styles.chip}>
                    {s}
                  </button>
                ))}
              </div>
              <p className={styles.hint}>
                Searching {index.length.toLocaleString()} documentation pages, products, datasheets,
                blogs and success stories.
              </p>
            </div>
          )}

          {index && q.trim() !== '' && flat.length === 0 && (
            <div className={styles.noResults}>
              <p>
                No results for <strong>“{q}”</strong>
              </p>
              <p className={styles.hint}>
                Try a product name (MacSync, MacSet, MacRay), a topic (payload, mounting, LNS) or
                “datasheet”.
              </p>
            </div>
          )}

          {grouped.map(({group, items}) => (
            <div key={group} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{GROUP_ICON[group] ?? <FiFileText />}</span>
                {group}
                <span className={styles.groupCount}>{items.length}</span>
              </div>
              {items.map((it) => {
                const idx = flat.indexOf(it);
                const active = idx === cursor;
                return (
                  <button
                    key={`${it.type}:${it.url}`}
                    type="button"
                    data-idx={idx}
                    onMouseEnter={() => setCursor(idx)}
                    onClick={() => go(it)}
                    className={clsx(styles.result, active && styles.resultActive)}>
                    <span className={styles.resultText}>
                      <span className={styles.resultTitle}>{highlight(it.title, tokens)}</span>
                      {(it.crumb || it.type === 'product' || it.type === 'file') && (
                        <span className={styles.resultCrumb}>
                          {it.crumb || (it.type === 'file' ? 'PDF download' : it.url)}
                        </span>
                      )}
                    </span>
                    <span className={styles.resultArrow}>
                      {active ? <FiCornerDownLeft /> : <FiArrowRight />}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span>
            <Kbd>↑</Kbd> <Kbd>↓</Kbd> to navigate
          </span>
          <span>
            <Kbd>↵</Kbd> to open
          </span>
          <span className={styles.footerRight}>
            <Kbd>⌘K</Kbd> anywhere
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
