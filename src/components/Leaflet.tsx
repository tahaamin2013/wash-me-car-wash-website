import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function parseOSMUrl(url: string): { lat: number; lon: number; zoom: number } {
  const regex = /#map=(\d+)\/(-?\d+\.\d+)\/(-?\d+\.\d+)/;
  const match = url.match(regex);

  if (!match) {
    throw new Error('Invalid OpenStreetMap URL');
  }

  const [, zoom, lat, lon] = match;

  return {
    lat: parseFloat(lat),
    lon: parseFloat(lon),
    zoom: parseInt(zoom, 10)
  };
}

interface LeafletMapProps {
  osmUrl: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ osmUrl }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current) {
      const { lat, lon, zoom } = parseOSMUrl(osmUrl);

      const map = L.map(mapRef.current).setView([lat, lon], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      L.marker([lat, lon]).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [osmUrl]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default LeafletMap;