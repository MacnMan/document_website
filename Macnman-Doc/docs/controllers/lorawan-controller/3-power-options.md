---
title: Power Options & Led Status
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/controllers/common-controller-docs/controller_power-options';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/controllers/common-controller-docs/controller_power-options">click here</a>.</p>
    </div>
  );
}