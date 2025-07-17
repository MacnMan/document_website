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
import Layout from '@theme/Layout';
import FilterBar from '../components/HomepageFeatures/FilterBar';
import FilterCategory from '../components/HomepageFeatures/FilterCategories';
import styles from './index.module.css';
import { FilterContext } from '../components/HomepageFeatures/FilterContext';

export default function Home() {
  const [filters, setFilters] = useState({
    Filter: '',
    Technology: '',
    Catagory: '',
    Applications: '',
  });

  return (
    <Layout title="Documentation">
      <FilterContext.Provider value={{ filters, setFilters }}>
        <div className="row shadow--md padding--lg bg--white margin-bottom--lg radius--lg items--start">

          {/* Left Column Text */}
          <div className="col col--6">
            <h2 className="text--left text--lg font--bold margin-bottom--sm">
              Find Setup Guides, Technical Specs, & Troubleshooting Tips All in One Place
            </h2>
          </div>

          {/* Right Column Specialist + Store */}
          <div className="col col--6 margin-left--auto" style={{ textAlign: 'right' }}>
            <div className="margin-bottom--sm">
              <div className="row row--align-end">
                <div className="col col--content">
                  {/* <img
                    src="https://via.placeholder.com/40"
                    alt="Specialist"
                    className="avatar__photo avatar__photo--sm"
                    style={{ borderRadius: '50%' }}
                  /> */}
                </div>
                <div className="col">
                  <p className="text--sm margin-vert--xs">Designing Your Wireless Solution?</p>
                  <a href="#" className="text--sm text--primary">
                    Call a Specialist
                  </a>
                </div>
              </div>
            </div>

            <div className="row row--align-center">
              <div className="col col--content">
                <span role="img" aria-label="store" style={{ fontSize: '1.25rem' }}>🛍️</span>
              </div>
              <div className="col">
                <p className="text--sm margin-vert--xs">Discover complete lineup</p>
                <a href="#" className="text--sm text--primary">
                  Explore Our Store
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Filter Section */}
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
