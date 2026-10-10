/**
 * Adds to every documentation page, on top of the theme's own metadata:
 *  - JSON-LD: Organization + WebSite, a TechArticle for the page, a Product
 *    for datasheets (with its PDF), a FAQPage where the page has an FAQ, and
 *    a VideoObject for each embedded video (data from plugins/ai-seo.js);
 *  - `og:type=article`;
 *  - a <link rel="alternate" type="text/markdown"> pointing at the page's
 *    Markdown twin, for AI crawlers.
 *
 * Wraps @docusaurus/theme-classic DocItem/Metadata.
 */
import React, {type ReactNode} from 'react';
import Metadata from '@theme-original/DocItem/Metadata';
// The stock component takes no props; whatever is passed is handed on.
type Props = Record<string, unknown>;
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type PageExtra = {
  kind: 'doc' | 'product';
  section: string;
  crumb: string;
  image: string;
  pdf: string;
  faq: {q: string; a: string}[];
  videos?: {id: string; name: string; description: string; uploadDate: string; duration: string}[];
  noindex: boolean;
};

const SITE = 'https://www.macnman.com';
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/docs/#website`;

export default function MetadataWrapper(props: Props): ReactNode {
  const {metadata} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const {pages} = usePluginData('macnman-ai-seo') as {pages: Record<string, PageExtra>};
  const extra = pages[metadata.permalink];
  const ogImage = useBaseUrl('/img/og-macnman.jpg', {absolute: true});
  const logo = useBaseUrl('/img/macnman-logo.png', {absolute: true});

  if (!extra || extra.noindex) {
    return <Metadata {...props} />;
  }

  const pageUrl = `${siteConfig.url}${metadata.permalink}`;
  const toAbsolute = (p: string) =>
    /^https?:\/\//.test(p)
      ? p
      : p.startsWith(siteConfig.baseUrl)
        ? `${siteConfig.url}${p}`
        : `${siteConfig.url}${siteConfig.baseUrl.replace(/\/$/, '')}${p}`;
  const image = extra.image ? toAbsolute(extra.image) : ogImage;
  const lastUpdated = metadata.lastUpdatedAt
    ? new Date(metadata.lastUpdatedAt < 1e12 ? metadata.lastUpdatedAt * 1000 : metadata.lastUpdatedAt)
        .toISOString()
        .slice(0, 10)
    : undefined;

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Macnman',
      url: SITE,
      logo: {'@type': 'ImageObject', url: logo},
      sameAs: [
        'https://www.linkedin.com/company/macnman/',
        'https://github.com/MacnMan',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE}/docs`,
      name: 'Macnman Documentation',
      publisher: {'@id': ORG_ID},
      inLanguage: 'en',
    },
    {
      '@type': 'TechArticle',
      '@id': `${pageUrl}#article`,
      headline: metadata.title,
      description: metadata.description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      image,
      inLanguage: 'en',
      articleSection: extra.crumb,
      ...(lastUpdated ? {dateModified: lastUpdated} : {}),
      author: {'@id': ORG_ID},
      publisher: {'@id': ORG_ID},
      isPartOf: {'@id': WEBSITE_ID},
    },
  ];

  if (extra.kind === 'product') {
    graph.push({
      '@type': 'Product',
      '@id': `${pageUrl}#product`,
      name: metadata.title.replace(/\s*(datasheet|data sheet)\s*$/i, ''),
      description: metadata.description,
      image,
      url: pageUrl,
      brand: {'@type': 'Brand', name: 'Macnman'},
      manufacturer: {'@id': ORG_ID},
      category: extra.crumb,
      ...(extra.pdf
        ? {
            subjectOf: {
              '@type': 'DigitalDocument',
              name: `${metadata.title} (PDF)`,
              url: toAbsolute(extra.pdf),
              encodingFormat: 'application/pdf',
            },
          }
        : {}),
    });
  }

  for (const video of extra.videos ?? []) {
    graph.push({
      '@type': 'VideoObject',
      '@id': `${pageUrl}#video-${video.id}`,
      name: video.name,
      description: video.description,
      thumbnailUrl: [`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`],
      uploadDate: video.uploadDate,
      ...(video.duration ? {duration: video.duration} : {}),
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
      publisher: {'@id': ORG_ID},
    });
  }

  if (extra.faq.length >= 2) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: extra.faq.map(({q, a}) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {'@type': 'Answer', text: a},
      })),
    });
  }

  return (
    <>
      <Metadata {...props} />
      <Head>
        <meta property="og:type" content="article" />
        {lastUpdated && <meta property="article:modified_time" content={lastUpdated} />}
        <link rel="alternate" type="text/markdown" href={`${pageUrl}.md`} />
        <script type="application/ld+json">
          {JSON.stringify({'@context': 'https://schema.org', '@graph': graph})}
        </script>
      </Head>
    </>
  );
}
