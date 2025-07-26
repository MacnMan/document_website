import React from 'react';
import OriginalNavbarItem from '@theme-original/NavbarItem';
import ColorModeToggle from './ColorModeToggle';

export default function NavbarItem(props) {
  if (props.type === 'custom-color-toggle') {
    return <ColorModeToggle />;
  }
  return <OriginalNavbarItem {...props} />;
}
