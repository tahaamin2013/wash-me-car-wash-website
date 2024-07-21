import React, { useState, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = [
  { text: "2 Miles from I-5 Longview exit", desc: "Welcome to Wash me car wash" },
  { text: "No brushes no machinery", desc: "The Only Handwash Tunnel" },
  { text: "5 DIY Self Service Bays open 24/7", desc: "Safest Wash in Town" },
  { text: "Free Vacuums with Car Wash", desc: "Our goal is to make you happy" },
  { text: "Hands-on service lambs wool wash", desc: "a complete rejuvenation for your vehicle" },
  { text: "We treat your car the way you would treat it", desc: "Satisfaction guaranteed if we goof!" },
  { text: "Spot Free rinse and teflon wax", desc: "Dedicated team of experts" },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextText = useCallback(() => {
    setIsTextVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsTextVisible(true);
    }, 500);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(nextText, 5000);
    }
  }, [nextText]);

  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const memoizedAnimationProps = useMemo(() => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
    transition: { duration: 0.5, ease: "easeInOut" }
  }), []);

  const memoizedTextProps = useMemo(() => ({
    initial: { y: 20 },
    animate: { y: 0 },
    transition: { duration: 0.5 }
  }), []);

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
          src="https://res.cloudinary.com/dni4hpqo3/video/upload/c_scale,f_auto,q_auto,w_886/v1720997476/WashMe_Car_Wash_Video_-_Edited_emahsr.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isTextVisible && (
            <motion.div
              key={index}
              {...memoizedAnimationProps}
              className="text-white text-center px-4"
            >
              <motion.p 
                className="text-blue-500 font-bold text-xl md:text-2xl"
                {...memoizedTextProps}
                transition={{ ...memoizedTextProps.transition, delay: 0.4 }}
              >
                {texts[index].desc}
              </motion.p>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                {...memoizedTextProps}
                transition={{ ...memoizedTextProps.transition, delay: 0.2 }}
              >
                {texts[index].text}
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);