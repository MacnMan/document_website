import React, { useContext } from 'react';
import styles from './FilterBar.module.css';
import filtersData from '../../data/filtersData';
import { FilterContext } from './FilterContext';

const FilterBar = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleRadioChange = (group: string, value: string) => {
    setFilters((prev: any) => {
      const newFilters: any = {};

      // Reset all groups to default: 'All' only for Filter, '' for others
      // Object.keys(filtersData).forEach(key => {
      //   newFilters[key] = key === 'Filter' ? 'All' : '';
      // });

      // Set selected group
      newFilters[group] = value;

      return newFilters;
    });
  };

  const renderFilterGroup = (title: string, options: string[]) => {
    // Only prepend 'All' for 'Filter' group
    const groupFilters = title === 'Filter' ? [...options] : options;

    return (
      <div className={styles.filterGroup} key={title}>
        <h3 className={styles.filterGroupTitle}>{title}</h3>
        <div className={styles.optionsWrapper}>
          {groupFilters.map(option => (
            <label key={`${title}-${option}`} className={styles.radioOption}>
              <input
                type="radio"
                name={title} // ✅ Unique name per group
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

  return (
    <div className={styles.sidebar}>
      {Object.entries(filtersData).map(([group, options]) =>
        renderFilterGroup(group, options)
      )}
    </div>
  );
};

export default FilterBar;
