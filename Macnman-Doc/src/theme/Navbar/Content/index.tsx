/**
 * Two-row header, modelled on elevenlabs.io/docs.
 *
 * Row 1: mobile toggle and logo on the left; search box, the right-hand
 *        items (Help, the Macnman.com button) and the colour-mode toggle on
 *        the right.
 * Row 2: the left-hand items (the documentation tabs) as an underline tab
 *        strip. Hidden below 997px; the mobile drawer lists every item.
 *
 * Swizzled (ejected) from @docusaurus/theme-classic 3.8 Navbar/Content; the
 * item rendering and error boundary are unchanged, only the layout differs.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

import styles from './styles.module.css';

function useNavbarItems(): NavbarItemConfig[] {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <>
      <div className="navbar__inner">
        <div
          className={clsx(
            ThemeClassNames.layout.navbar.containerLeft,
            'navbar__items',
          )}>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
        </div>
        <div
          className={clsx(
            ThemeClassNames.layout.navbar.containerRight,
            'navbar__items navbar__items--right',
          )}>
          {!searchBarItem && (
            <NavbarSearch className={styles.search}>
              <SearchBar />
            </NavbarSearch>
          )}
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>
      {leftItems.length > 0 && (
        <div className={clsx('navbar__items', 'navbar-tabs', styles.tabs)}>
          <NavbarItems items={leftItems} />
        </div>
      )}
    </>
  );
}
