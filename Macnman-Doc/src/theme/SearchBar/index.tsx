/**
 * The header search control. Replaces Algolia DocSearch: it opens the
 * site-wide search modal (src/components/SiteSearch), the same search the
 * main website uses. Styled by `.site-search-trigger` in src/css/eleven.css —
 * a wide, input-shaped button with the "/" hint on desktop, an icon on phones.
 */
import React, {type ReactNode} from 'react';
import {FiSearch} from 'react-icons/fi';
import {useSiteSearch} from '@site/src/components/SiteSearch';

export default function SearchBar(): ReactNode {
  const {open} = useSiteSearch();
  return (
    <button type="button" className="site-search-trigger" onClick={open} aria-label="Search">
      <FiSearch className="site-search-trigger__icon" aria-hidden="true" />
      <span className="site-search-trigger__label">Search</span>
      <kbd className="site-search-trigger__kbd">/</kbd>
    </button>
  );
}
