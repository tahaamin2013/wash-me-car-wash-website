'use client'

'use client'

import { useEffect, useState } from "react";
import Image from "next/image"; // Using Next.js Image component for better optimization

interface ThanksgivingPopupProps {
  delay?: number; // Optional prop for customizing delay
}

const ThanksgivingPopup: React.FC<ThanksgivingPopupProps> = ({ delay = 5000 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  if (!mounted) return null;

  return isOpen ? (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClose} // Close when clicking outside
    >
      <div 
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
          aria-label="Close popup"
        >
          ✖
        </button>
        <div className="text-center">
          <div className="relative w-full h-48 mb-4">
            <Image
              src="/thanksgiving.jpg"
              alt="Thanksgiving celebration"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold text-orange-600">
            Happy Thanksgiving!
          </h2>
          <p className="text-gray-700 mt-2">
            We&apos;re thankful for your support. Enjoy this special day with your
            loved ones!
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ThanksgivingPopup;