"use client";
import { Contact } from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Map from "@/components/Map";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import WhatWeDo from "@/components/WhatWeDo";
import Git from "@/components/fsdklfsjd";
import Facilities from "@/components/Facilities";
import Reviews from "@/components/reviews";
import { motion } from "framer-motion";
import Image from "next/image";
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

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };
  return (
    <>
      <div className="relative ">
        <div className="absolute  top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className="relative w-full pb-[56.25%] h-0">
          <iframe
            src="https://www.youtube.com/embed/RUPrDc33QS8?si=WuryL4Qe883sW5go&autoplay=1&mute=1&loop=1&playlist=RUPrDc33QS8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="YouTube video player"
            className="absolute top-0 md:mt-1 mt-20 left-0 w-full h-full pointer-events-none"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={handleVideoLoad}
          ></iframe>
          {!isVideoLoaded && (
            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
          )}
        </div>
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
                {/* <p className="h-[25px] tracking-widest uppercase overflow-hidden bg-red-500 sm:text-lg text-sm mb-2 font-normal uppercase">
                    {data.texts[visibleIndex].desc}
                  </p> */}
                <p className="text-3xl font-sans sm:text-7xl w-fit font-bold text-center">
                  {data.texts[visibleIndex].text}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/washhouse.webp"
        alt="image of house"
        width={3200}
        height={390}
        className="w-screen md:mt-1 mt-20"
        loading="lazy"
      />
      <Map />
      <main>
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
        {/* <div className="mx-5">
          <Contact />
        </div> */}
      </main>
    </>
  );
};
export default Home;
