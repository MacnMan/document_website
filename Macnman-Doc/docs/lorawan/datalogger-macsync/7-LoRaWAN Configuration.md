---
title: LoRaWAN Settings
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/essentials-by-macnman/lorawan-essentials/maya_lorawan_basic_configurations';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/essentials-by-macnman/lorawan-essentials/maya_lorawan_basic_configurations">click here</a>.</p>
    </div>
  );
}