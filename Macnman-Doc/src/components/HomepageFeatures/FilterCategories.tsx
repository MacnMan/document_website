// import React, { useEffect, useState } from 'react';
// import products from '../../data/products.json';
// import styles from './FilterCategories.module.css';

// export default function FilterCategory() {
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const applyFilters = () => {
//     const Filter = localStorage.getItem('Filter') || '';
//     const Technology = localStorage.getItem('Technology') || '';
//     const Catagory = localStorage.getItem('Catagory') || '';
//     const Applications = localStorage.getItem('Applications') || '';

//     const filtered = products.filter(product => {
//       const matchesFilter = Filter ? product.filter === Filter : true;
//       const matchesTech = Technology ? product.technology === Technology : true;
//       const matchesCat = Catagory ? product.category === Catagory : true;
//       const matchesApp = Applications
//         ? product.applications && product.applications.includes(Applications)
//         : true;

//       return matchesFilter && matchesTech && matchesCat && matchesApp;
//     });

//     setFilteredProducts(filtered);
//   };

//   useEffect(() => {
//     applyFilters(); // run once on load

//     const handleStorageChange = () => {
//       applyFilters();
//     };

//     window.addEventListener('filterChanged', handleStorageChange);
//     return () => window.removeEventListener('filterChanged', handleStorageChange);
//   }, []);

//   return (
//     <div className={styles.productGrid}>
//       {filteredProducts.map(product => (
//         <div key={product.id} className={styles.card}>
//           <img src={product.image} alt={product.name} className={styles.image} />
//           <div className={styles.name}>{product.name}</div>
//           <div className={styles.description}>{product.description}</div>
//           <a href={product.link} className={styles.link} target="_blank" rel="noopener noreferrer">
//             View Datasheet
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useContext, useEffect, useState } from 'react';
import products from '../../data/products.json';
import styles from './FilterCategories.module.css';
import { FilterContext } from './FilterContext';

export default function FilterCategory() {
  const { filters } = useContext(FilterContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const { Filter, Technology, Catagory, Applications } = filters;

    const filtered = products.filter(product => {
      const matchesFilter = Filter ? product.tags?.includes(Filter) : true;
      const matchesTech = Technology ? product.technology === Technology : true;
      const matchesCat = Catagory ? product.category === Catagory : true;
      const matchesApp = Applications ? product.applications?.includes(Applications) : true;

      return matchesFilter && matchesTech && matchesCat && matchesApp;
    });

    setFilteredProducts(filtered);
  }, [filters]);

return (
  <div className={styles.mainContent}>
    <h2 className={styles.title}>Product Documentation</h2>

    <div className={styles.productGrid}>
      {filteredProducts.map(product => (
        <div key={product.id} className={styles.card}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.description}>{product.description}</div>
          <a
            href={product.link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Datasheet
          </a>
        </div>
      ))}
    </div>
  </div>
);

}
