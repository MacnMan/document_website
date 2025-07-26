import { useEffect } from 'react';

export default function RedirectPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/docs/Macnman-Maya/maya_rs485_configurations';
    }
  }, []);

  return (
    <div>
      <p>Redirecting... If you are not redirected, <a href="/docs/Macnman-Maya/maya_rs485_configurations">click here</a>.</p>
    </div>
  );
}