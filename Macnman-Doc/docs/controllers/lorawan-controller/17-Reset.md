---
title: Factory Reset
---


import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/essentials-by-macnman/Macnman-Maya/maya-resetting-devices';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/essentials-by-macnman/Macnman-Maya/maya-resetting-devices">click here</a>.</p>
    </div>
  );
}