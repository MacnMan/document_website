---
title: Analog/Digital Sensor Configuration
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/dataloggers/common-dataloggers-docs/macsync_analog_configurations';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/dataloggers/common-dataloggers-docs/macsync_analog_configurations">click here</a>.</p>
    </div>
  );
}