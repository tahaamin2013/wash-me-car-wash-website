"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Map from "@/components/Map";
import Facilities from "@/components/Facilities";
import WhatWeDo from "@/components/WhatWeDo";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import GiftCertificate from "@/components/GiftCertificate";
import FAQ from "@/components/FAQ";
import { Contact } from "@/components/ContactForm";
import HeroSection from "@/components/Herosection";



const Home: React.FC = () => {


  return (
    <>
    <HeroSection />

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