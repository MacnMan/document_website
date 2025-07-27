---
title: Onboarding on LNS
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/essentials-by-macnman/lorawan-essentials/macsync-lns-registration';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/essentials-by-macnman/lorawan-essentials/macsync-lns-registration">click here</a>.</p>
    </div>
  );
}