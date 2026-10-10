/**
 * Desktop "On this page" column, drawn as a progress rail.
 *
 * One continuous 2px track runs down the left of the list and bends sideways
 * wherever the heading level changes. A brand-coloured fill sits on top of it
 * and covers the sections that are on screen right now, sliding as the reader
 * scrolls.
 *
 * The track is plain markup and CSS, so it is there before any script runs.
 * Only the fill needs measuring: each item's position is written to CSS
 * variables and the fill is clipped to the range between two of them (see
 * "On this page rail" in src/css/eleven.css).
 *
 * The phone version (the collapsible above the article) is untouched: it is
 * @theme/TOCCollapsible, which does not use this file.
 */
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import type {Props} from '@theme/TOC';
import styles from './styles.module.css';

/** Kept in step with the same numbers in eleven.css. */
const GAP = 8; // space under every item but the last
const BEND = 4; // how far a bend reaches into the items it joins
const STEP = 12; // sideways shift per heading level

type RailItem = {
  id: string;
  /** Heading text as HTML, exactly as Docusaurus hands it over. */
  value: string;
  depth: number;
  /** The track arrives here through a bend. */
  stepIn: boolean;
  /** Levels the track moves before the next item: +1 inwards, negative outwards, 0 straight on. */
  bend: number;
};

/** The flat heading list with a depth per item, never more than one level deeper than the item above. */
function toRail(toc: Props['toc'], min: number, max: number): RailItem[] {
  const picked = toc.filter((item) => item.level >= min && item.level <= max);
  if (!picked.length) return [];
  const base = Math.min(...picked.map((item) => item.level));
  const depths: number[] = [];
  picked.forEach((item, i) => {
    depths.push(Math.min(item.level - base, i === 0 ? 0 : depths[i - 1] + 1));
  });
  return picked.map((item, i) => ({
    id: item.id,
    value: item.value,
    depth: depths[i],
    stepIn: i > 0 && depths[i - 1] !== depths[i],
    bend: i < picked.length - 1 ? depths[i + 1] - depths[i] : 0,
  }));
}

/**
 * The first and last section on screen.
 *
 * A section runs from its heading to the next one. The first is the section
 * the top of the reading area falls in; the last is the lowest heading that
 * has properly entered the window.
 */
function useVisibleRange(ids: readonly string[]): readonly [number, number] {
  const [range, setRange] = useState<readonly [number, number]>([0, 0]);

  useEffect(() => {
    if (!ids.length) return undefined;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const navbar = document.querySelector('.navbar');
      const top = Math.max(0, navbar?.getBoundingClientRect().bottom ?? 0) + 24;
      const bottom = window.innerHeight - 48;
      let first = 0;
      let last = 0;
      ids.forEach((id, i) => {
        const heading = document.getElementById(id);
        // A heading inside a closed tab or <details> has no box: skip it.
        if (!heading || !heading.getClientRects().length) return;
        const y = heading.getBoundingClientRect().top;
        if (y <= top) first = i;
        if (y < bottom) last = i;
      });
      last = Math.max(first, last);
      setRange((prev) => (prev[0] === first && prev[1] === last ? prev : [first, last]));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule);
    // Images and embeds that load late move the headings without a scroll.
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, [ids]);

  return range;
}

/**
 * Register the two ends of the fill as lengths, which is what lets CSS
 * transition them. Done here and not with @property in the stylesheet, so
 * that it does not depend on how the build's CSS minifier treats that rule.
 */
if (typeof window !== 'undefined' && typeof CSS !== 'undefined' && 'registerProperty' in CSS) {
  for (const name of ['--toc-fill-top', '--toc-fill-bottom']) {
    try {
      CSS.registerProperty({name, syntax: '<length>', inherits: true, initialValue: '0px'});
    } catch {
      // Already registered: this module was evaluated twice (hot reload).
    }
  }
}

/** Heading HTML as plain text, for the tooltip on a sub-item that is cut to two lines. */
const ENTITIES: Record<string, string> = {'&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'"};
const plainText = (html: string) =>
  html.replace(/<[^>]+>/g, '').replace(/&(?:amp|lt|gt|quot|#39);/g, (entity) => ENTITIES[entity]);

// React 19 no longer warns about layout effects during the server render,
// but they still must not run there.
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/** The S-curve that carries the track from one level to another, drawn in the gap under an item. */
function Bend({item, fill}: {item: RailItem; fill?: boolean}): ReactNode {
  const width = Math.abs(item.bend) * STEP + 2;
  const height = GAP + BEND * 2;
  const mid = height / 2;
  const [from, to] = item.bend > 0 ? [1, width - 1] : [width - 1, 1];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={clsx('toc-rail__bend', fill ? 'toc-rail__bend--fill' : 'toc-rail__bend--track')}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{'--toc-bend-depth': Math.min(item.depth, item.depth + item.bend)} as CSSProperties}>
      <path d={`M${from} 0C${from} ${mid} ${to} ${mid} ${to} ${height}`} />
    </svg>
  );
}

export default function TOC({className, toc, minHeadingLevel, maxHeadingLevel}: Props): ReactNode {
  const {tableOfContents} = useThemeConfig();
  const min = minHeadingLevel ?? tableOfContents.minHeadingLevel;
  const max = maxHeadingLevel ?? tableOfContents.maxHeadingLevel;

  const items = useMemo(() => toRail(toc, min, max), [toc, min, max]);
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const [first, last] = useVisibleRange(ids);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  /** Write every item's position, then the range the fill should cover. */
  const paint = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const rows = Array.from(list.children) as HTMLElement[];
    const start = rows[first];
    const end = rows[last];
    if (!start || !end || !items[first] || !items[last]) return;

    rows.forEach((row) => {
      row.style.setProperty('--toc-li-top', `${row.offsetTop}px`);
      row.style.setProperty('--toc-li-h', `${row.offsetHeight}px`);
    });

    const fillTop = start.offsetTop + (items[first].stepIn ? BEND : 0);
    // Stop at the bottom of the text, or just short of it when a bend follows.
    const tail = items[last].bend !== 0 ? GAP + BEND : last === rows.length - 1 ? 0 : GAP;
    const fillBottom = end.offsetTop + end.offsetHeight - tail;
    list.style.setProperty('--toc-fill-top', `${fillTop}px`);
    list.style.setProperty('--toc-fill-bottom', `${fillBottom}px`);

    if (!list.hasAttribute('data-measured')) {
      // Commit the first position before the transition is switched on, so
      // the fill appears in place instead of sweeping down from the top.
      void list.offsetHeight;
      list.setAttribute('data-measured', '');
    }

    // On long pages the list scrolls on its own: keep the fill in sight.
    const scroller = scrollerRef.current;
    if (scroller && scroller.scrollHeight > scroller.clientHeight + 1) {
      const offset =
        list.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
      const margin = 32;
      const viewTop = scroller.scrollTop;
      const viewBottom = viewTop + scroller.clientHeight;
      if (offset + fillTop < viewTop + margin) {
        scroller.scrollTo({top: Math.max(0, offset + fillTop - margin), behavior: 'smooth'});
      } else if (offset + fillBottom > viewBottom - margin) {
        scroller.scrollTo({
          top: offset + fillBottom - scroller.clientHeight + margin,
          behavior: 'smooth',
        });
      }
    }
  }, [items, first, last]);

  useBrowserLayoutEffect(paint, [paint]);

  // A heading that wraps onto a second line moves everything below it.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const observer = new ResizeObserver(() => paint());
    observer.observe(list);
    return () => observer.disconnect();
  }, [paint]);

  if (!items.length) return null;

  return (
    <div ref={scrollerRef} className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <nav className="toc-rail" aria-label="On this page">
        <div className="toc-rail__title">On this page</div>
        <ul ref={listRef} className="toc-rail__list">
          {items.map((item, i) => (
            <li
              key={item.id}
              className="toc-rail__item"
              data-state={i >= first && i <= last ? 'active' : 'inactive'}
              data-step-in={item.stepIn ? '' : undefined}
              data-step-out={item.bend !== 0 ? '' : undefined}
              data-nested={item.depth > 0 ? '' : undefined}
              style={{'--toc-depth': item.depth} as CSSProperties}>
              <span aria-hidden="true" className="toc-rail__track" />
              <span aria-hidden="true" className="toc-rail__fill" />
              {item.bend !== 0 && <Bend item={item} />}
              {item.bend !== 0 && <Bend item={item} fill />}
              <Link
                to={`#${item.id}`}
                className="toc-rail__link"
                title={item.depth > 0 ? plainText(item.value) : undefined}
                aria-current={i === first ? 'location' : undefined}
                // Heading text comes from the page's own Markdown, already rendered by Docusaurus.
                dangerouslySetInnerHTML={{__html: item.value}}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
