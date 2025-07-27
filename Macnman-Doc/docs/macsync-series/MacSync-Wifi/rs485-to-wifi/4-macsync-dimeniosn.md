---
title: Dimensions
---



import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/macsync-series/common-macsync-docs/macsync_dimensions';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/macsync-series/common-macsync-docs/macsync_dimensions">click here</a>.</p>
    </div>
  );
}