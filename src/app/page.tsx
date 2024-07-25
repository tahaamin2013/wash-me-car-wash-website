"use client";

import dynamic from "next/dynamic";
import { CldImage } from "next-cloudinary";
import { Suspense, lazy } from "react";

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
        <CldImage
          src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,h_40,q_70/v1720801124/Wash%20Me%20Car%20Wash%20Images/washhouse.webp"
          alt="WashHouse Image"
          width={400}
          height={146}
          priority
          className="w-full"
        />
      </Suspense>

      <Map />
      <Facilities />
      <WhatWeDo />
      <Team />
      <Pricing />
      <GiftCertificate />
      <FAQ />
      {/* <Suspense fallback={<LoadingPlaceholder />}> */}
      <Reviews />
      {/* </Suspense> */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
