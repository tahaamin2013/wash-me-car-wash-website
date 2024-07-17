"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Map from "@/components/Map";
import Facilities from "@/components/Facilities";
import WhatWeDo from "@/components/WhatWeDo";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import GiftCertificate from "@/components/GiftCertificate";
import FAQ from "@/components/FAQ";
import { Contact } from "@/components/ContactForm";

const texts = [
  { text: "2 Miles from I-5 Longview exit", desc: "Welcome to Wash me car wash" },
  { text: "No brushes no machinery", desc: "The Only Handwash Tunnel" },
  { text: "5 DIY Self Service Bays open 24/7", desc: "Safest Wash in Town." },
  { text: "Free Vacuums with Car Wash", desc: "Our goal is to make you happy" },
  { text: "Hands-on service lambs wool wash", desc: "a complete rejuvenation for your vehicle" },
  { text: "We treat your car the way you would treat it", desc: "Satisfaction guaranteed if we goof!" },
  { text: "Spot Free rinse and teflon wax", desc: "Dedicated team of experts" },
];

const Home: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [shouldAnimateDown, setShouldAnimateDown] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setShouldAnimateDown(true);
      setTimeout(() => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShouldAnimateDown(false);
      }, 500);
    }, 6000);

    return () => clearInterval(animationInterval);
  }, []);

  const AnimatedText = useMemo(() => (
    <motion.div
      className="text-transition"
      initial={{ y: "100%" }}
      animate={{ y: shouldAnimateDown ? "100%" : 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center text-[#0097dd] tracking-widest uppercase sm:text-xl font-semibold text-sm mb-2">
        {texts[visibleIndex].desc}
      </p>
      <p className="text-3xl font-sans sm:text-7xl font-bold text-center text-white">
        {texts[visibleIndex].text}
      </p>
    </motion.div>
  ), [visibleIndex, shouldAnimateDown]);

  return (
    <>
      <div className="relative w-full h-fit sm:pt-0 pt-[101px]">
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="text-white max-w-4xl w-full">
            {AnimatedText}
          </div>
        </div>
        <video
          className="w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dni4hpqo3/video/upload/c_scale,f_auto,q_auto,w_886/v1720997476/WashMe_Car_Wash_Video_-_Edited_emahsr.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <CldImage
        src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,h_40,q_70/v1720801124/Wash%20Me%20Car%20Wash%20Images/washhouse.webp"
        alt="WashHouse Image"
        width={400}
        height={146}
        priority
        className="w-full"
      />

      <Map />
      <Facilities />
      <WhatWeDo />
      <Team />
      <Pricing />
      <GiftCertificate />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;