"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";

const texts = [
  {
    text: "2 Miles from I-5 Longview exit",
    desc: "Welcome to Wash me car wash",
  },
  { text: "No brushes no machinery", desc: "The Only Handwash Tunnel" },
  { text: "5 DIY Self Service Bays open 24/7", desc: "Safest Wash in Town" },
  { text: "Free Vacuums with Car Wash", desc: "Our goal is to make you happy" },
  {
    text: "Hands-on service lambs wool wash",
    desc: "a complete rejuvenation for your vehicle",
  },
  {
    text: "We treat your car the way you would treat it",
    desc: "Satisfaction guaranteed if we goof!",
  },
  { text: "Spot Free rinse and teflon wax", desc: "Dedicated team of experts" },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const timerRef = useRef<number | null>(null);

  const nextText = useCallback(() => {
    setIsTextVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsTextVisible(true);
    }, 500);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current === null) {
      timerRef.current = window.setInterval(nextText, 5000);
    }
  }, [nextText]);

  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  return (
    <div className="relative w-full h-[580px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onPlay={startTimer}
        onPause={stopTimer}
      >
        <source
          src="/WashMe Car Wash Video - Edited.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-white text-center px-4 transition-all duration-500 ease-in-out ${
            isTextVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-4"
          }`}
        >
          <p
            className="text-blue-500 font-bold text-xl md:text-2xl mb-2 transition-all duration-500 ease-in-out"
            style={{ transitionDelay: "200ms" }}
          >
            {texts[index].desc}
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold transition-all duration-500 ease-in-out"
            style={{ transitionDelay: "400ms" }}
          >
            {texts[index].text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
