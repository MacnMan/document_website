/**
 * Wraps theme-classic's sidebar category so that
 * - its own label drops the parent category's name, and
 * - its children can see this category's (full) label through context.
 * See ../parentLabel.ts.
 */
import React, {useContext, type ReactNode} from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import type {Props} from '@theme/DocSidebarItem/Category';

import {ParentLabelContext, stripParentPrefix} from '../parentLabel';

export default function CategoryWrapper(props: Props): ReactNode {
  const parentLabel = useContext(ParentLabelContext);
  const label = stripParentPrefix(props.item.label, parentLabel);
  const item = label === props.item.label ? props.item : {...props.item, label};
  return (
    <ParentLabelContext.Provider value={props.item.label}>
      <Category {...props} item={item} />
    </ParentLabelContext.Provider>
  );
}
