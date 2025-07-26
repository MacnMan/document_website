// src/components/HomepageFeatures/FilterContext.tsx
import React, { createContext, useState } from 'react';
import filtersData from '../../data/filtersData';

type Filters = {
  [key: string]: string;
};

const defaultFilters: Filters = Object.fromEntries(
  Object.keys(filtersData).map((group) => [group, 'All'])
);

export const FilterContext = createContext<{
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}>({
  filters: defaultFilters,
  setFilters: () => {},
});

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
