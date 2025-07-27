---
title: What's in the Box?
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/controllers/common-controller-docs/controller_box-contains';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/controllers/common-controller-docs/controller_box-contains">click here</a>.</p>
    </div>
  );
}