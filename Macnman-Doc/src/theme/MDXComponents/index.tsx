/**
 * Two adjustments to how markdown tables render:
 *
 * - A table whose cells contain nothing but images (how the product pages
 *   lay out their photo grids) is shown as a ProductGallery instead.
 * - Any other table is wrapped in a scroll container, because tables are
 *   rendered full-width (see `.markdown table` in src/css/eleven.css) and a
 *   wide one would otherwise push the page sideways on a phone.
 *
 * Only markdown-syntax tables pass through here; raw <table> JSX in MDX
 * (the product pages' .parameter-table) is rendered as written.
 */
import React, {
  Children,
  isValidElement,
  type ComponentProps,
  type ReactNode,
} from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import ProductGallery, {
  type GalleryImage,
} from '@site/src/components/ProductGallery';

const MDXImg = MDXComponents.img;

function isImage(node: ReactNode): node is React.ReactElement<{src: string; alt?: string}> {
  return (
    isValidElement(node) &&
    (node.type === 'img' || node.type === MDXImg) &&
    typeof (node.props as {src?: unknown}).src === 'string'
  );
}

function isBlank(node: ReactNode): boolean {
  return node == null || (typeof node === 'string' && node.trim() === '');
}

/**
 * Returns the images of a table whose every non-empty cell holds exactly one
 * image, or null when the table holds anything else.
 */
function imageTable(children: ReactNode): GalleryImage[] | null {
  const images: GalleryImage[] = [];
  let ok = true;

  const visit = (node: ReactNode) => {
    if (!ok || !isValidElement(node)) {
      return;
    }
    const {type, props} = node as React.ReactElement<{children?: ReactNode}>;
    if (type === 'td' || type === 'th') {
      const content = Children.toArray(props.children).filter((c) => !isBlank(c));
      if (content.length === 0) {
        return;
      }
      const [only] = content;
      if (content.length === 1 && isImage(only)) {
        images.push({src: only.props.src, alt: only.props.alt ?? ''});
      } else {
        ok = false;
      }
      return;
    }
    Children.forEach(props.children, visit);
  };

  Children.forEach(children, visit);
  return ok && images.length >= 2 ? images : null;
}

function Table(props: ComponentProps<'table'>): ReactNode {
  const images = imageTable(props.children);
  if (images) {
    return <ProductGallery images={images} />;
  }
  return (
    <div className="table-scroll">
      <table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  table: Table,
};
