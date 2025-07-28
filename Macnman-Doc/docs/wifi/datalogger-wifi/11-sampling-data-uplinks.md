---
title: Data Gathering & Uploading
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/essentials-by-macnman/Macnman-Maya/maya_sampling_and_uploading';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/essentials-by-macnman/Macnman-Maya/maya_sampling_and_uploading">click here</a>.</p>
    </div>
  );
}