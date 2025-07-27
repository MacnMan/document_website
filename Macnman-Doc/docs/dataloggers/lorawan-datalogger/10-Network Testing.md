---
title: LoRaWAN Network Health Test
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/essentials-by-macnman/lorawan-essentials/maya_lorawa_network_health';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/essentials-by-macnman/lorawan-essentials/maya_lorawa_network_health">click here</a>.</p>
    </div>
  );
}