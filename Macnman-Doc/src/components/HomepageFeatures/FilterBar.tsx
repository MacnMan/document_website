import React, { useContext } from 'react';
import styles from '../../css/FilterBar.module.css';
import filtersData from '../../data/filtersData';
import { FilterContext } from './FilterContext';
import products from '../../data/products.json'; // <-- Make sure this exists

const DEFAULT_FILTER = 'All';

const FilterBar = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const isFilterSelected = Object.values(filters).some(
    value => value && value !== DEFAULT_FILTER
  );

  const handleRadioChange = (group: string, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };

      newFilters[group] = value;

      if (group === 'Filter') {
        newFilters.Technology = '';
        newFilters.Catagory = '';
      }

      if (group === 'Technology') {
        newFilters.Catagory = '';
      }

      if (group === 'Catagory') {
        newFilters.Technology = '';
      }

      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setFilters({
      Filter: DEFAULT_FILTER,
      Technology: '',
      Catagory: '',
      Applications: '',
    });
  };

  const renderFilterGroup = (title: string, options: string[]) => {
    const shouldHide =
      filters.Filter === DEFAULT_FILTER &&
      ((title === 'Technology' && filters.Catagory) ||
        (title === 'Catagory' && filters.Technology));

    if (shouldHide) return null;

    return (
      <div className={styles.filterGroup} key={title}>
        <h3 className={styles.FilterGroupTitle}>{title}</h3>
        <div className={styles.optionsWrapper}>
          {options.map(option => (
            <label key={`${title}-${option}`} className={styles.radioOption}>
              <input
                type="radio"
                name={title}
                value={option}
                checked={filters[title] === option}
                onChange={() => handleRadioChange(title, option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const filteredProducts = products.filter(product => {
    const matchFilter =
      filters.Filter === 'All' || (product.tags || []).includes(filters.Filter);

    const matchTech =
      !filters.Technology || product.technology === filters.Technology;

    const matchCat =
      !filters.Catagory || product.category === filters.Catagory;

    const matchApp =
      !filters.Applications ||
      (product.applications || []).includes(filters.Applications);

    return matchFilter && matchTech && matchCat && matchApp;
  });



  return (
    <div className={styles.sidebar}>
      {isFilterSelected && (
        <button className={styles.clearButton} onClick={clearAllFilters}>
          Clear Filters
        </button>
      )}

      {Object.entries(filtersData).map(([group, options]) =>
        renderFilterGroup(group, options)
      )}

      {/* Optional: Render Filtered Product Count */}
      <div className={styles.filteredInfo}>
        <p>
          Showing <strong>{filteredProducts.length}</strong> matched products.
        </p>
      </div>
    </div>
  );
};

export default FilterBar;
