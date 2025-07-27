---
title: How to Connect Wifi?
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/essentials-by-macnman/wifi-essentials/wifi_conn_configurations';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/essentials-by-macnman/wifi-essentials/wifi_conn_configurations">click here</a>.</p>
    </div>
  );
}