'use client'

import React, { useState, useEffect, useRef } from 'react';

interface LazyMapProps {
  src: string;
}

const LazyMap: React.FC<LazyMapProps> = ({ src }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIntersecting(true);
        observer.disconnect();
      }
    });

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="sm:w-full sm:h-[300px] h-[400px] w-full overflow-hidden rounded-md">
      {isIntersecting ? (
        <iframe
          className="w-full h-full"
          src={src}
          width="600"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          Loading map...
        </div>
      )}
    </div>
  );
};

export default LazyMap;