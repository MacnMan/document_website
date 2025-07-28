---
title: Trigger Relay Schedule
---

import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Open in a new tab using absolute URL
      const targetURL = `${window.location.origin}/docs/controllers/common-controller-docs/macset_lora_Schedule_trigger`;
      window.open(targetURL, '_blank');
    }
  }, []);
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <p>
        Redirecting... If you are not redirected,
        <a
          href="/docs/controllers/common-controller-docs/macset_lora_Schedule_trigger"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '5px', color: '#0070f3', textDecoration: 'underline' }}
        >
          click here
        </a>.
      </p>
    </div>
  );
}