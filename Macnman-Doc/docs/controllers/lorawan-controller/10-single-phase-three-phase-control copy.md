---
title: Single/Three Phase Applications
---
import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/controllers/common-controller-docs/macset_lora_single_three_phase_app';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/controllers/common-controller-docs/macset_lora_single_three_phase_app">click here</a>.</p>
    </div>
  );
}