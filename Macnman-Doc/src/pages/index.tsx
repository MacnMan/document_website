import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.css';
import Layout from '@theme/Layout';

import FilterBar from '../components/HomepageFeatures/FilterBar';
import FilterCategory from '../components/HomepageFeatures/FilterCategories';
import { FilterContext } from '../components/HomepageFeatures/FilterContext';
import HeroSection from '../components/HomepageFeatures/HeroSection';

export default function Home() {
  const [filters, setFilters] = useState({
    Filter: 'All',
    Technology: 'All',
    Catagory: 'All',
  });

  const heroRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <Layout title="Documentation">
      <div ref={heroRef} className={styles.heroWrapper}>
        <HeroSection />
      </div>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <div className={styles.pageWrapper}>
          <div className={`${styles.sidebar} ${isSticky ? styles.stickySidebar : ''}`}>
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
