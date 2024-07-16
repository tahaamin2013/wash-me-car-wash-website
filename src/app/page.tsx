"use client";

import { Contact } from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import GiftCertificate from "@/components/GiftCertificate";
import Map from '@/components/Map';
import Team from "@/components/Team";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

type Data = {
  texts: { text: string; desc: string }[];
};
const Home: React.FC = () => {
  const [data, setData] = useState<Data>({
    texts: [
      {
        text: "2 Miles from I-5 Longview exit",
        desc: "Welcome to Wash me car wash",
      },
      { text: "No brushes no machinery", desc: "The Only Handwash Tunnel" },
      {
        text: "5 DIY Self Service Bays open 24/7",
        desc: "Safest Wash in Town.",
      },
      {
        text: "Free Vacuums with Car Wash",
        desc: "Our goal is to make you happy",
      },
      {
        text: "Hands-on service lambs wool wash",
        desc: "a complete rejuvenation for your vehicle",
      },
      {
        text: "We treat your car the way you would treat it",
        desc: "Satisfaction guaranteed if we goof!",
      },
      {
        text: "Spot Free rinse and teflon wax",
        desc: "Dedicated team of experts",
      },
    ],
  });

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [shouldAnimateDown, setShouldAnimateDown] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimateDown(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShouldAnimateDown(true);
      setTimeout(() => {
        setVisibleIndex((prevIndex) => (prevIndex + 1) % data.texts.length);
        setShouldAnimateDown(false);
      }, 500);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {/* <div className="relative ">
       <HomeVideoPlayer />
        <div
          className="absolute top-[40%] sm:top-[35%] items-center justify-center w-full flex 
        flex-col"
        >
          <div className="text-white mt-12 md:mt-0  flex flex-col lg:!mx-52 sm:!mx-7 mx-auto justify-center max-w-fit items-center">
            <motion.div
              className="text-transition"
              initial={{ y: "100%" }}
              animate={{ y: shouldAnimateDown ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="h-fit text-center text-[#0097dd] tracking-widest uppercase overflow-hidden sm:text-xl font-semibold text-sm mb-2">
                {data.texts[visibleIndex].desc}
              </p>
            </motion.div>
            <div className="h-fit pb-3 text-left tracking-widest flex justify-center items-center text-white w-full overflow-hidden">
              <motion.div
                className="text-transition"
                initial={{ y: "100%" }}
                animate={{ y: shouldAnimateDown ? "100%" : 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-3xl font-sans sm:text-7xl w-fit font-bold text-center">
                  {data.texts[visibleIndex].text}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div> */}

      <CldImage
        src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,h_40,q_70/v1720801124/Wash%20Me%20Car%20Wash%20Images/washhouse.webp"
        alt="WashHouse Image"
        width={400}
        height={146}
        priority
        className="w-screen"
      />
      <Map />
      <FAQ />
      <Team />
      <Contact />
      <GiftCertificate />
      {/*  <main>
       <div className="-mt-3">
          <Facilities />
        </div>
        <div className="mx-5">
          {" "}
          <WhatWeDo />
        </div>
        <div className="mt-5 mx-5">
          <Team />
        </div>
        <Pricing />
        <Git />
        <Reviews />
        <FAQ />
        <Contact />
        <div className="mx-5">
          <Contact />
        </div> 
      </main>*/}
    </>
  );
};
export default Home;
