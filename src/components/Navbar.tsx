"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Goy from "./goy";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState("bg-transparent shadow-xl");
  const [scrollMargin, setScrollMargin] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Adjust the condition as needed
      if (position > 130) {
        setNavbarColor("bg-blue shadow-xl");
      } else {
        setNavbarColor("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div className="fixed z-50 w-full flex flex-col items-center">
      <div className="bg-[#1b3e63] w-full h-fit text-white capitalize flex sm:flex-row flex-col flex-wrap justify-between px-5 text-center items-center">
        <div></div>
        <button
          onClick={(e) => handleButtonClick(e, "#MemberShips")}
          id="goTopBtn"
        >
          <p className="underline">We are now offering MEMBERSHIPS!!!</p>
        </button>
        <div className="flex items-center">
          <FaPhoneAlt className="fill-green mr-3" />{" "}
          <Link href="tel:360-4304126">360-4304126</Link>
        </div>
      </div>
      <div
        className="bg-blue text-white transition-all duration-200 shadow-xl px-5 lg:px-20 py-2 items-center justify-between w-full"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
        }}
      >
        <div>
          <div className={`flex justify-between items-center`}>
            <Link href="/" className="outline-none absolute">
              <Image
                src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/Wash-Me-Logo.png"
                className="w-[100px] h-[70px] py-1"
                alt="Logo"
                width={100}
                height={70}
              />
            </Link>
            <div className="w-full flex justify-end">
              <div className="md:block hidden">
                <div className="text-white font-bold flex gap-5 text-lg">
                  <Goy id="Our Services">Our Services</Goy>
                  <Goy id="#MemberShips">Save Here</Goy>
                  <Goy id="Meet the Team">Meet The Team</Goy>
                  <Goy id="FAQ">FAQ</Goy>
                  <Goy id="Contact">Contact us</Goy>
                </div>
              </div>
              <div className="md:hidden block z-50">
                <Sheet>
                  <SheetTrigger className="text-white  -my-4 mt-1 text-2xl">
                    <AlignJustify fill="white" size={27} />
                  </SheetTrigger>
                  <SheetContent
                    style={{
                      backgroundImage:
                        "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
                    }}
                  >
                    <div className="flex-col flex gap-3 text-left items-start w-full font-bold">
                      <SheetClose>
                        <Goy id="Our Services">Our Services</Goy>
                      </SheetClose>
                      <SheetClose>
                        <Goy id="#MemberShips">Save Here</Goy>
                      </SheetClose>
                      <SheetClose>
                        <Goy id="Meet the Team - mobile">Meet The Team</Goy>
                      </SheetClose>
                      <SheetClose>
                        <Goy id="FAQ">FAQ</Goy>
                      </SheetClose>
                      <SheetClose>
                        <Goy id="Contact">Contact us</Goy>
                      </SheetClose>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
