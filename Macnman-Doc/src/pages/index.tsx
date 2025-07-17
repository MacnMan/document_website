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
      <div className="flex justify-between items-start p-6 bg-white shadow-sm rounded-lg">
        {/* Left Text Block */}
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold text-gray-900">
            Find Setup Guides, Technical Specs, & Troubleshooting Tips All in One Place
          </h2>
        </div>

        {/* Right Info Cards */}
        <div className="flex flex-col gap-4 items-start">
          {/* Card 1 */}
          <div className="flex items-start gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Specialist"
              className="rounded-full w-10 h-10"
            />
            <div>
              <div className="text-sm text-gray-700">Designing Your Wireless Solution?</div>
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline">
                Call a Specialist
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-2">
            <span className="text-purple-600 text-xl">🛍️</span>
            <div>
              <div className="text-sm text-gray-700">Discover complete lineup</div>
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline">
                Explore Our Store
              </a>
            </div>
          </div>
        </div>
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
