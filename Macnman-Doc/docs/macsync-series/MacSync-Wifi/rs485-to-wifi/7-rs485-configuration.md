---
title: RS885 Sensor Configuration
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/macsync-series/common-macsync-docs/macsync_rs485_configurations';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/macsync-series/common-macsync-docs/macsync_rs485_configurations">click here</a>.</p>
    </div>
  );
}