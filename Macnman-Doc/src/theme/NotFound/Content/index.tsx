/**
 * The "page not found" screen. Instead of a dead end it offers the site
 * search and the five sections of the documentation, so a reader who followed
 * an old link can still get to what they wanted.
 *
 * Replaces @docusaurus/theme-classic NotFound/Content. Styled by `.not-found`
 * in src/css/eleven.css.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';
import {FiSearch} from 'react-icons/fi';
import {useSiteSearch} from '@site/src/components/SiteSearch';

const SECTIONS = [
  {to: '/lorawan/datalogger-lorawan-macsync/macsync_rs485_lorawan_introduction', label: 'User Manual', text: 'Setup and configuration guides'},
  {to: '/product/lorawan', label: 'Datasheets', text: 'Specifications and downloads'},
  {to: '/datasheets', label: 'Tech Reports', text: 'Range and performance tests'},
  {to: '/books/category/inside-lorawan', label: 'Books', text: 'LoRaWAN explained in depth'},
  {to: '/help/help', label: 'Help', text: 'Support, warranty and policies'},
];

export default function NotFoundContent({className}: Props): ReactNode {
  const {open} = useSiteSearch();
  return (
    <main className={clsx('container margin-vert--xl not-found', className)}>
      <Heading as="h1" className="not-found__title">
        Page not found
      </Heading>
      <p className="not-found__lead">
        This page may have moved or been renamed. Search the documentation, or start from one of
        the sections below.
      </p>
      <button type="button" className="site-search-trigger not-found__search" onClick={open}>
        <FiSearch className="site-search-trigger__icon" aria-hidden="true" />
        <span className="site-search-trigger__label">Search the documentation</span>
        <kbd className="site-search-trigger__kbd">/</kbd>
      </button>
      <ul className="not-found__sections">
        {SECTIONS.map((section) => (
          <li key={section.to}>
            <Link to={section.to} className="not-found__section">
              <strong>{section.label}</strong>
              <span>{section.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="not-found__home">
        <Link to="/">Go to the documentation home</Link>
      </p>
    </main>
  );
}
