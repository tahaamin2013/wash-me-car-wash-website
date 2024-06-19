"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Extend the Window interface to include om5678_1234
declare global {
  interface Window {
    om5678_1234?: {
      reset: () => void;
    };
  }
}

const OptinMonsterEmbed = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.om5678_1234) {
        window.om5678_1234.reset();
      }
    };

    // Call handleRouteChange whenever pathname changes
    handleRouteChange();

  }, [pathname]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(d,u,ac){var s=d.createElement('script');s.type='text/javascript';s.src='https://a.omappapi.com/app/js/api.min.js';s.async=true;s.dataset.user=u;s.dataset.account=ac;d.getElementsByTagName('head')[0].appendChild(s);})(document,36493,41469);`,
      }}
    />
  );
};

export { OptinMonsterEmbed };
