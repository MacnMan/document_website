/**
 * E-commerce style image gallery: a large stage showing the selected photo,
 * previous / next arrows, a counter, a thumbnail strip to swap images, and a
 * click-to-zoom lightbox. Arrow keys move between images when the gallery
 * has focus; Escape closes the lightbox.
 *
 * Rendered in place of any markdown table whose cells contain only images
 * (see src/theme/MDXComponents), which is how the product pages lay out
 * their photo grids.
 */
import React, {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';

import styles from './styles.module.css';

export type GalleryImage = {src: string; alt: string};

function Chevron({direction}: {direction: 'left' | 'right'}): ReactNode {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {direction === 'left' ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function Lightbox({
  image,
  count,
  index,
  onClose,
  onStep,
}: {
  image: GalleryImage;
  count: number;
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
}): ReactNode {
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onStep(-1);
      if (e.key === 'ArrowRight') onStep(1);
    };
    document.addEventListener('keydown', onKey);
    const {overflow} = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose, onStep]);

  return createPortal(
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || 'Image'}
      onClick={onClose}>
      <button
        type="button"
        className={styles.lightboxClose}
        onClick={onClose}
        aria-label="Close">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            className={clsx(styles.lightboxArrow, styles.lightboxArrowPrev)}
            onClick={(e) => {
              e.stopPropagation();
              onStep(-1);
            }}
            aria-label="Previous image">
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            className={clsx(styles.lightboxArrow, styles.lightboxArrowNext)}
            onClick={(e) => {
              e.stopPropagation();
              onStep(1);
            }}
            aria-label="Next image">
            <Chevron direction="right" />
          </button>
        </>
      )}
      <img
        key={image.src}
        className={styles.lightboxImage}
        src={image.src}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
      />
      {count > 1 && (
        <span className={styles.lightboxCounter}>
          {index + 1} / {count}
        </span>
      )}
    </div>,
    document.body,
  );
}

export default function ProductGallery({
  images,
}: {
  images: GalleryImage[];
}): ReactNode {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const count = images.length;
  const current = images[Math.min(index, count - 1)]!;

  const step = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );
  const close = useCallback(() => setOpen(false), []);

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    }
  };

  return (
    <figure className={styles.gallery} onKeyDown={onKeyDown}>
      <div className={styles.stage}>
        <button
          type="button"
          className={styles.stageButton}
          onClick={() => setOpen(true)}
          aria-label="View larger image">
          <img
            key={current.src}
            className={styles.stageImage}
            src={current.src}
            alt={current.alt}
          />
        </button>
        {count > 1 && (
          <>
            <button
              type="button"
              className={clsx(styles.arrow, styles.arrowPrev)}
              onClick={() => step(-1)}
              aria-label="Previous image">
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              className={clsx(styles.arrow, styles.arrowNext)}
              onClick={() => step(1)}
              aria-label="Next image">
              <Chevron direction="right" />
            </button>
            <span className={styles.counter} aria-live="polite">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>
      {count > 1 && (
        <div className={styles.thumbs} role="tablist" aria-label="Product images">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={image.alt || `Image ${i + 1}`}
              className={clsx(styles.thumb, i === index && styles.thumbActive)}
              onClick={() => setIndex(i)}>
              <img src={image.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      {current.alt && (
        <figcaption className={styles.caption}>{current.alt}</figcaption>
      )}
      {open && (
        <Lightbox
          image={current}
          count={count}
          index={index}
          onClose={close}
          onStep={step}
        />
      )}
    </figure>
  );
}
