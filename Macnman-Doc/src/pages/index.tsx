import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ProductPage from '../components/HomepageFeatures/ProductPage';

const TITLE = 'Documentation: User Manuals, Datasheets & Guides';
const DESCRIPTION =
  'Official documentation for Macnman industrial IoT products: user manuals, datasheets, technical reports and integration guides for LoRaWAN, Wi-Fi, BLE and cellular sensors, gateways, controllers and modules.';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  // The host serves the home page at /docs (it redirects /docs/ there), so
  // the canonical must not carry the trailing slash Docusaurus would use.
  const home = `${siteConfig.url}${siteConfig.baseUrl.replace(/\/$/, '')}`;
  const logo = useBaseUrl('/img/macnman-logo.png', {absolute: true});

  const graph = [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: 'Macnman',
      url: siteConfig.url,
      logo: {'@type': 'ImageObject', url: logo},
      sameAs: ['https://www.linkedin.com/company/macnman/', 'https://github.com/MacnMan'],
    },
    {
      '@type': 'WebSite',
      '@id': `${home}/#website`,
      url: home,
      name: 'Macnman Documentation',
      description: DESCRIPTION,
      publisher: {'@id': `${siteConfig.url}/#organization`},
      inLanguage: 'en',
    },
    {
      '@type': 'CollectionPage',
      '@id': `${home}#page`,
      url: home,
      name: `${TITLE} | Macnman`,
      description: DESCRIPTION,
      isPartOf: {'@id': `${home}/#website`},
      about: {'@id': `${siteConfig.url}/#organization`},
    },
  ];

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <link rel="canonical" href={home} />
        <meta property="og:url" content={home} />
        <script type="application/ld+json">
          {JSON.stringify({'@context': 'https://schema.org', '@graph': graph})}
        </script>
      </Head>
      <ProductPage />
    </Layout>
  );
}
