import React, { useContext, useEffect, useState } from 'react';
import products from '../../data/products.json';
import styles from '../../css/FilterCategories.module.css';
import { FilterContext } from './FilterContext';

export default function FilterCategory() {
  const { filters } = useContext(FilterContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const { Filter, Technology, Catagory } = filters;

    const filtered = products.filter(product => {
      const matchFilter = Filter === 'All' || (product.tags || []).includes(Filter);
      const matchTech = Technology === 'All' || !Technology || product.technology === Technology;
      const matchCat = Catagory === 'All' || !Catagory || product.category === Catagory;

      return matchFilter && matchTech && matchCat;
    });

    setFilteredProducts(filtered);
  }, [filters]);

  return (
    <div className={styles.mainContent}>
      <h2 className={styles.title}>Check Documentation for</h2>
      <div className={styles.gridLayout}>
        {filteredProducts.map(product => (
          <div key={product.id} className={styles.gridItem}>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.image} alt={product.name} className={styles.image} />
            </a>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productdes}>{product.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
