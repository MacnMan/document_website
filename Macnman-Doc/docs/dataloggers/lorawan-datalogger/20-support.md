---
title: Help & Support
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/dataloggers/common-dataloggers-docs/macsync_help_support';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/dataloggers/common-dataloggers-docs/macsync_help_support">click here</a>.</p>
    </div>
  );
}