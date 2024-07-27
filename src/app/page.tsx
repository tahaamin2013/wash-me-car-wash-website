"use client";

import dynamic from "next/dynamic";
import { CldImage } from "next-cloudinary";
import { Suspense, lazy } from "react";
import Image from "next/image";

const HeroSection = dynamic(() => import("@/components/Herosection"), {
  ssr: true,
});
const Map = dynamic(() => import("@/components/Map"), { ssr: false });
const Facilities = dynamic(() => import("@/components/Facilities"));
const WhatWeDo = dynamic(() => import("@/components/WhatWeDo"));
const Team = dynamic(() => import("@/components/Team"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const GiftCertificate = dynamic(() => import("@/components/GiftCertificate"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Reviews = lazy(() => import("@/components/reviews"));
const Contact = lazy(() =>
  import("@/components/ContactForm").then((mod) => ({ default: mod.Contact }))
);

const LoadingPlaceholder = () => <div>Loading...</div>;

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Suspense fallback={<LoadingPlaceholder />}>
        <Image
          src="/washhouse.webp"
          alt="WashHouse Image"
          width={1300}
          height={206}
          loading="lazy"
        />
      </Suspense>
      {/* <Map /> */}
      <Facilities />
      <WhatWeDo />
      <Team />
      <Pricing />
      <GiftCertificate />
      <FAQ />
      <Reviews />
      <Suspense fallback={<LoadingPlaceholder />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
