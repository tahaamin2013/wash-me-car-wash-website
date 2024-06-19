"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Extend the Window interface to include om5678_1234
declare global {
  interface Window {
    om41469_36493?: {
      reset: () => void;
    };
  }
}

export function RouteChangeListener() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    if (window.om41469_36493) {
      window.om41469_36493.reset();
    }
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}
