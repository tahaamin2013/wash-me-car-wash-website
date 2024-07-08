"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const LeadGenForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
    setShowBottomBar(true);
  };

  const handleBottomBarClick = () => {
    setShowForm(true);
    setShowBottomBar(false);
  };

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
      setShowSuccessMessage(true);
      setShowForm(false);
      setShowBottomBar(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {showForm && (
          <div className="fixed sm:px-0 px-8 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-myBlue text-white rounded-lg shadow-lg w-full relative max-w-md text-center"
            >
              <div className="px-8 pt-8">
                <button
                  onClick={handleCloseForm}
                  className="mt-4 absolute right-3 top-1 text-white font-bold text-4xl"
                  aria-label="Closing Button"
                >
                  {" "}
                  <X />
                </button>
                <h2 className="text-4xl mb-4 font-bold caveatfont">
                  Get First Month Free with Our Monthly Memberships!
                </h2>
                <p className="mb-6">
                  Sign up for our exclusive monthly memberships & Enjoy 4 washes
                  a month, Saving up to $36!
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex p-8 pt-4 bg-black/30 gap-2 items-center justify-center"
              >
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email Address"
                  className="w-2/3 text-gray-700"
                />
                <Button
                  aria-label="Subscribe Button"
                  type="submit"
                  className="bg-orange-600 text-white"
                >
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-myBlue text-white rounded-lg shadow-lg w-full max-w-md text-center p-8">
              <h2 className="text-2xl mb-4">Success!</h2>
              <p>Your form has been submitted successfully.</p>
              <Button
                aria-label="Close Button"
                onClick={() => setShowSuccessMessage(false)}
                className="mt-4 bg-white text-black hover:text-white"
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBottomBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            onClick={handleBottomBarClick}
            className="bottom-[0px] left-[0px] fixed bg-myBlue text-white cursor-pointer w-fit py-3 px-[20px] text-sm rounded-md z-50 text-left shadow-lg"
          >
            Get 50% OFF
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadGenForm;
