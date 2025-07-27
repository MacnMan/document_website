import React, { useContext } from 'react';
import styles from '../../css/FilterBar.module.css';
import filtersData from '../../data/filtersData';
import { FilterContext } from './FilterContext';

const FilterBar = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const handleRadioChange = (group: string, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev };

      // "All" resets only that group
      newFilters[group] = value;

      return newFilters;
    });
  };

  const renderFilterGroup = (title: string, options: string[]) => {
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

  return (
    <div className={styles.sidebar}>
      {Object.entries(filtersData).map(([group, options]) =>
        renderFilterGroup(group, options)
      )}
    </div>
  );
};

export default FilterBar;
