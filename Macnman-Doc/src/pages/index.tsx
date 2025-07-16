import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import FilterBar from '../components/HomepageFeatures/FilterBar';

import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import products from '../data/products.json';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


export default function Home() {
  const [filter, setFilter] = useState(() => localStorage.getItem('filter') || 'All');

  // Update local filter state when event is dispatched from FilterBar
  useEffect(() => {
    const handler = () => {
      const newFilter = localStorage.getItem('filter') || 'All';
      setFilter(newFilter);
    };
    window.addEventListener('filterChanged', handler);
    return () => window.removeEventListener('filterChanged', handler);
  }, []);

  // Group products by category
  const grouped = {
    'Newly Added': products.filter((p) => p.category === 'Newly Added'),
    Nodes: products.filter((p) => p.category === 'Nodes'),
    Controllers: products.filter((p) => p.category === 'Controllers'),
    Gateways: products.filter((p) => p.category === 'Gateways'),
  };

  // Apply filter to each group
  const filteredProducts = (group) =>
    group.filter((p) => filter === 'All' || p.tags.includes(filter));

  return (
    <Layout title="Documentation">
      <FilterBar />
      <div className={styles.container}>
        <h2 className={styles.title}>Check Documentation for</h2>
        {Object.entries(grouped).map(([section, items]) => {
          const filtered = filteredProducts(items);
          if (filtered.length === 0) return null; // skip if no items to show
          return (
            <div key={section} className={styles.section}>
              <h3 className={styles.sectionTitle}>{section}</h3>
              <div className={styles.grid}>
                {filtered.map((p) => (
                  <Link key={p.id} to={p.link} className={styles.card}>
                    <img src={p.image} alt={p.name} className={styles.image} />
                    <p className={styles.name}>{p.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}