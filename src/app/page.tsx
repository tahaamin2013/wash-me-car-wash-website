"use client";

import { Contact } from "@/components/ContactForm";
import Facilities from "@/components/Facilities";
import FAQ from "@/components/FAQ";
import GiftCertificate from "@/components/GiftCertificate";
import HeroSection from "@/components/Herosection";
import Map from "@/components/Map";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/reviews";
import Team from "@/components/Team";
import WhatWeDo from "@/components/WhatWeDo";
import { CldImage } from "next-cloudinary";

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
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;