import React, { useState, useEffect } from 'react';
import styles from './FilterNavItem.module.css';

export default function FilterNavItem() {
  const [active, setActive] = useState(() => localStorage.getItem('filter') || 'All');

  const filters = ['All', 'Brochures', 'Datasheets', 'User Manuals', 'Reports'];

  const handleClick = (filter) => {
    setActive(filter);
    localStorage.setItem('filter', filter);
    window.dispatchEvent(new Event('filterChanged'));
  };

  return (
    <div className={styles.filterNav}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.button} ${active === filter ? styles.active : ''}`}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
