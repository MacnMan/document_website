
import React, { useState } from 'react';
import styles from './index.module.css';
import Layout from '@theme/Layout';

import FilterBar from '../components/HomepageFeatures/FilterBar';
import FilterCategory from '../components/HomepageFeatures/FilterCategories';
import { FilterContext } from '../components/HomepageFeatures/FilterContext';
import HeroSection from '../components/HomepageFeatures/HeroSection'

export default function Home() {
const [filters, setFilters] = useState({
  Filter: 'All',
  Technology: 'All',
  Catagory: 'All',
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
