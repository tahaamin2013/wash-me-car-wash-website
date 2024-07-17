import React, { useRef, useEffect } from 'react';
import useGoogleMapsApi from './GoogleMapsApi';

interface GoogleMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey, center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const isLoaded = useGoogleMapsApi(apiKey);

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      // Use type assertion to tell TypeScript that 'google' exists on 'window'
      const google = (window as any).google;
      new google.maps.Map(mapRef.current, {
        center,
        zoom,
      });
    }
  }, [isLoaded, center, zoom]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default GoogleMap;