---
title: Mounting Options
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/controllers/common-controller-docs/macset_mountings_controller';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/controllers/common-controller-docs/macset_mountings_controller">click here</a>.</p>
    </div>
  );
}