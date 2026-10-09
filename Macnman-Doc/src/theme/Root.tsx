/**
 * Wraps every page with the site-wide search provider, so the header button
 * and the ⌘K / "/" shortcuts work everywhere.
 */
import React, {type ReactNode} from 'react';
import {SiteSearchProvider} from '@site/src/components/SiteSearch';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return <SiteSearchProvider>{children}</SiteSearchProvider>;
}
