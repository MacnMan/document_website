
import React, { useContext, useEffect, useState } from 'react';
import products from '../../data/products.json';
import styles from '../../css/FilterCategories.module.css';
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
      <h2 className={styles.title}>Check Documentation for</h2>

      <div className={styles.gridLayout}>
        {filteredProducts.map(product => {
          console.log('Loading image:', product.image);
          return (
            <div key={product.id} className={styles.gridItem}>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img src={product.image} alt={product.name} className={styles.image} />
              </a>
              <div className={styles.productName}>{product.name}</div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
