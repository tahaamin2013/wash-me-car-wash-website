import React, { useRef, useEffect, useState } from 'react';
import useGoogleMapsApi from './GoogleMapsApi';

interface GoogleMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey, center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const isLoaded = useGoogleMapsApi(apiKey);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      try {
        const google = (window as any).google;
        if (!google || !google.maps) {
          throw new Error('Google Maps API not loaded');
        }
        new google.maps.Map(mapRef.current, {
          center,
          zoom,
        });
      } catch (err) {
        console.error('Error initializing Google Map:', err);
        setError(`Failed to initialize Google Map: ${err}`);
      }
    }
  }, [isLoaded, center, zoom]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default GoogleMap;