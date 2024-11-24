'use client'

import { useEffect, useState } from "react";

const ThanksgivingPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup 5 seconds after the page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Content */}
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
            We&apos;re thankful for your support. Enjoy this special day with your
            loved ones!
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default ThanksgivingPopup;
