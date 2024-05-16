"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Memberships = () => {
  const [scrollMargin, setScrollMargin] = useState(0);

  //   const goToBottom = () => {
  //     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  //   };

  //   useEffect(() => {
  //     const button = document.getElementById('goTopBtn');

  //     if (button) {
  //       button.addEventListener('click', goToBottom);

  //       return () => {
  //         button.removeEventListener('click', goToBottom);
  //       };
  //     }
  //   }, []);

  const handleButtonClick = (e: any, myelement: string) => {
    const newScrollMargin = 60;
    setScrollMargin(newScrollMargin);

    const element = document.getElementById(myelement);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - newScrollMargin,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#1b3e63] w-full h-[60px] sm:h-[90px] text-white capitalize flex sm:flex-row flex-col fixed flex-wrap justify-between px-5 z-50">
      <div></div>
      <button
        onClick={(e) => handleButtonClick(e, "#MemberShips")}
        id="goTopBtn"
        // px-5 flex-wrap cursor-pointer z-50 fixed mb-4 justify-center sm:justify-between items-center
      >
        <p className="underline">We are now offering MEMBERSHIPS!!!</p>
      </button>
      <div className="flex items-center">
        <FaPhoneAlt className="fill-green mr-3" />{" "}
        <Link href="tel:360-4304126">360-4304126</Link>
      </div>
    </div>
  );
};

export default Memberships;
