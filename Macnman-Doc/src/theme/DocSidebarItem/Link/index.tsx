/**
 * Wraps theme-classic's sidebar link to show its label without the parent
 * category's name (see ../parentLabel.ts).
 */
import React, {useContext, type ReactNode} from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type {Props} from '@theme/DocSidebarItem/Link';

import {ParentLabelContext, stripParentPrefix} from '../parentLabel';

export default function LinkWrapper(props: Props): ReactNode {
  const parentLabel = useContext(ParentLabelContext);
  const label = stripParentPrefix(props.item.label, parentLabel);
  if (label === props.item.label) {
    return <Link {...props} />;
  }
  return <Link {...props} item={{...props.item, label}} />;
}
