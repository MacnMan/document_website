/**
 * Doc page header, modelled on elevenlabs.io/docs: the title with a
 * "Download PDF" button on its right and the front-matter description as a
 * subtitle beneath it.
 *
 * The PDF is produced by the browser's own print-to-PDF, driven by the
 * print stylesheet (src/css/print.css) that strips the site chrome and lays
 * the article out as a clean document; a print-only header carries the
 * logo and the page URL. Chrome names the saved file after the document
 * title, which is set to the page title while the dialog is open.
 *
 * Swizzled (ejected) from @docusaurus/theme-classic 3.8 DocItem/Content. The
 * synthetic-title rule is unchanged: pages whose markdown starts with its
 * own `# Heading` keep that heading, and only get the button, floated so
 * the heading sits beside it.
 */
import React, {type ReactNode, useCallback} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/DocItem/Content';

import styles from './styles.module.css';

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle(): string | null {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

function DownloadPdfButton({title}: {title: string}): ReactNode {
  const onClick = useCallback(() => {
    const previous = document.title;
    // The browser names the saved PDF after the document title.
    document.title = `${title} - Macnman`.replace(/[\\/:*?"<>|]+/g, '-');
    const restore = () => {
      document.title = previous;
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);
    window.print();
  }, [title]);

  return (
    <button type="button" className={styles.pdfButton} onClick={onClick}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
      Download PDF
    </button>
  );
}

/** Logo and page URL; only rendered by the print stylesheet. */
function PrintHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {pathname} = useLocation();
  const logo = useBaseUrl('/img/macnman-logo.png');
  return (
    <div className={styles.printHeader} aria-hidden="true">
      <img className={styles.printLogo} src={logo} alt="" />
      <span className={styles.printUrl}>
        {siteConfig.url}
        {pathname}
      </span>
    </div>
  );
}

export default function DocItemContent({children}: Props): ReactNode {
  const syntheticTitle = useSyntheticTitle();
  const {metadata, frontMatter} = useDoc();
  const subtitle = syntheticTitle ? frontMatter.description : undefined;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      <PrintHeader />
      {syntheticTitle ? (
        <header className={styles.header}>
          <div className={styles.titleRow}>
            <Heading as="h1">{syntheticTitle}</Heading>
            <DownloadPdfButton title={metadata.title} />
          </div>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
      ) : (
        <div className={styles.floatingAction}>
          <DownloadPdfButton title={metadata.title} />
        </div>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
