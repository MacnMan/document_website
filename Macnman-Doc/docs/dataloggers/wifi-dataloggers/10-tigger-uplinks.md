---
title: Setting Tiggers for Uplink
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/essentials-by-macnman/Macnman-Maya/maya_tigger_configuration';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/essentials-by-macnman/Macnman-Maya/maya_tigger_configuration">click here</a>.</p>
    </div>
  );
}