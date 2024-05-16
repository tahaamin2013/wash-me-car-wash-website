"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true); // Initialize isOpen as per your requirement
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "93f23dc4-ded0-42ad-bd57-c07ab9a01f25",
        email: e.target.email.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true); // Open the toast after 5 seconds
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        className={`fixed ${
          isOpen === true ? "block" : "hidden"
        } inset-0 z-50 bg-black/80 flex justify-center items-center`}
      >
        <div className="bg-[#356BA3] mt-[50px] max-w-4xl p-4 shadow-lg rounded-lg text-white relative">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(false)}
            className="absolute top-[-35px] right-0 bg-white opacity-70 hover:opacity-100 focus:outline-none"
          >
            <X className="h-4 w-4 text-black" />
          </Button>
          <Image
            src="/Artboard 3.png"
            alt="Logo"
            width={350}
            height={350}
            className="h-full w-full"
          />
          {/* Content of your dialog */}
          {/* 69ac6f7c-e4c6-40b6-af03-d47876657613 */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex gap-2 items-center justify-center"
          >
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="rounded-md mt-2 py-1.5 outline-none text-black px-2"
              />
            </div>
            <button
              type="submit"
              className="bg-[#b1c34f] rounded-md text-black mt-2 px-4 py-1 text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <motion.button
        id="goTopBtn"
        onClick={() => setIsOpen(true)}
        className={`fixed ${
          isOpen === false ? "block" : "hidden"
        } bottom-[0px] left-[0px] w-fit py-3 px-[20px] text-sm bg-transparent rounded-md z-50 text-left shadow-lg`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/Artboard 1.png"
          className="rounded-md w-[150px] h-{150px] sm:w-[200px] sm:h-[200px]"
          alt="Popup"
          width={200}
          height={200}
        />
      </motion.button>
    </>
  );
};

export default Popup;
