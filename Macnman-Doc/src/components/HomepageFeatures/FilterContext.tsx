// src/components/HomepageFeatures/FilterContext.tsx
import React from 'react';

export const FilterContext = React.createContext({
  filters: {
    Filter: '',
    Technology: '',
    Catagory: '',
    Applications: '',
  },
  setFilters: (_: any) => {},
});
