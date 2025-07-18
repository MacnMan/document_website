// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';
// import FilterBar from '../components/HomepageFeatures/FilterBar';

// import React, { useEffect, useState } from 'react';
// import Layout from '@theme/Layout';
// import products from '../data/products.json';
// import styles from './index.module.css';


// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// // export default function Home(): ReactNode {
// //   const {siteConfig} = useDocusaurusContext();
// //   return (
// //     <Layout
// //       title={`Hello from ${siteConfig.title}`}
// //       description="Description will go into a meta tag in <head />">
// //       <HomepageHeader />
// //       <main>
// //         <HomepageFeatures />
// //       </main>
// //     </Layout>
// //   );
// // }

// export default function Home() {
//   const [filter, setFilter] = useState(() => localStorage.getItem('filter') || 'All');
//   const [categoryFilter, setCategoryFilter] = useState(() => localStorage.getItem('categoryFilter') || '');

//   useEffect(() => {
//     const filterHandler = () => setFilter(localStorage.getItem('filter') || 'All');
//     const categoryHandler = () => setCategoryFilter(localStorage.getItem('categoryFilter') || '');

//     window.addEventListener('filterChanged', filterHandler);
//     window.addEventListener('categoryFilterChanged', categoryHandler);

//     return () => {
//       window.removeEventListener('filterChanged', filterHandler);
//       window.removeEventListener('categoryFilterChanged', categoryHandler);
//     };
//   }, []);

//   // Sample `products` array (replace this with actual import)
//   const grouped = {
//     'Newly Added': products.filter((p) => p.category === 'Newly Added'),
//     Nodes: products.filter((p) => p.category === 'Nodes'),
//     Controllers: products.filter((p) => p.category === 'Controllers'),
//     Gateways: products.filter((p) => p.category === 'Gateways'),
//   };

//   const allProducts = Object.values(grouped).flat();

//   const finalFiltered = allProducts.filter((p) =>
//     (filter === 'All' || p.tags.includes(filter)) &&
//     (categoryFilter === '' || p.tags.includes(categoryFilter))
//   );

//   return (
//     <Layout title="Documentation">
//       <div className={styles.pageWrapper}>
//         <div className={styles.sidebar}>
//           <FilterBar />
//         </div>

//         <div className={styles.mainContent}>
//           <h2 className={styles.title}>Check Documentation for</h2>

//           {finalFiltered.length === 0 ? (
//             <p>No products found for selected filters.</p>
//           ) : (
//             <div className={styles.grid}>
//               {finalFiltered.map((p) => (
//                 <Link key={p.id} to={p.link} className={styles.card}>
//                   <img src={p.image} alt={p.name} className={styles.image} />
//                   <p className={styles.name}>{p.name}</p>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// }


// src/pages/index.tsx or Home.tsx
// src/pages/index.tsx
import React, { useState } from 'react';
import styles from './index.module.css';
import Layout from '@theme/Layout';

import FilterBar from '../components/HomepageFeatures/FilterBar';
import FilterCategory from '../components/HomepageFeatures/FilterCategories';
import { FilterContext } from '../components/HomepageFeatures/FilterContext';
import HeroSection from '../components/HomepageFeatures/HeroSection'

export default function Home() {
  const [filters, setFilters] = useState({
    Filter: '',
    Technology: '',
    Catagory: '',
    Applications: '',
  });

  return (
    <Layout title="Documentation">
      <div className={styles.heroWrapper}>
        <HeroSection />
      </div>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <div className={styles.pageWrapper}>
          <div className={styles.sidebar}>
            <FilterBar />
          </div>
          <div className={styles.content}>
            <FilterCategory />
          </div>
        </div>
      </FilterContext.Provider>
    </Layout>

  );
}
