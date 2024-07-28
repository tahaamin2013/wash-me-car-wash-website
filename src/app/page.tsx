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
          src="/jpeg-optimizer_washhouse.jpg"
          alt="WashHouse Image"
          width={1540}
          height={206}
          loading="lazy"
          className="hidden sm:block"
        />
        <Image
          src="/jpeg-optimizer_washhouse - Copy.jpg"
          alt="WashHouse Image"
          width={450}
          height={206}
          loading="lazy"
          className=" block sm:hidden"
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
