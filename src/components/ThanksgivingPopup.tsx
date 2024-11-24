'use client'

import { useEffect, useState } from "react";

const ThanksgivingPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set the mounted state to true after the component has mounted
    setMounted(true);

    // Set a timeout to show the popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Cleanup function to clear the timeout when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Prevent the popup from being rendered before the component is mounted
  if (!mounted) return null;

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <div className="text-center">
          <img
            src="/thanksgiving.jpg"
            alt="Thanksgiving"
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-orange-600">
            Happy Thanksgiving!
          </h2>
          <p className="text-gray-700 mt-2">
            We’re thankful for your support. Enjoy this special day with your
            loved ones!
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ThanksgivingPopup;
