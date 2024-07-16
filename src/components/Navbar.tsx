'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import Goy from "./goy";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full flex flex-col items-center">
      <div className="bg-[#1b3e63] w-full text-white capitalize flex sm:flex-row flex-col flex-wrap justify-between px-5 text-center items-center">
        <div></div>
        <Goy id="#MemberShips">We are now offering MEMBERSHIPS!!!</Goy>
        {/* <button
          onClick={(e) => handleButtonClick(e, "#MemberShips")}
          id="goTopBtn"
          aria-label="We are now offering MEMBERSHIPS!!! button"
        >
          <p className="underline">We are now offering MEMBERSHIPS!!!</p>
        </button> */}
        <div className="flex items-center">
          <FaPhoneAlt className="fill-green mr-3" />{" "}
          <Link href="tel:360-4304126">360-4304126</Link>
        </div>
      </div>
      <div
        className="bg-primaryBlue-200 text-white transition-all duration-200 shadow-xl px-5 lg:px-20 py-2 items-center justify-between w-full"
        // style={{
        //   backgroundImage:
        //     "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
        // }}
      >
        <div className={`flex justify-between items-center`}>
          <Link href="/" className="outline-none absolute">
            <CldImage
              src="https://res.cloudinary.com/dni4hpqo3/image/upload/v1720827052/Wash-Me-Logo_nmqgji.png"
              alt="Wash Me Car Wash Logo"
              className="relative z-50"
              width={100}
              height={120}
              loading="eager"
            />
          </Link>
          <div className="w-full flex justify-end">
            <div className="md:flex hidden text-white font-bold gap-5 text-lg">
              <Goy id="Our Services">Our Services</Goy>
              <Goy id="#MemberShips">Save Here</Goy>
              <Goy id="Meet the Team">Meet The Team</Goy>
              <Goy id="FAQ">FAQ</Goy>
              <Goy id="Contact">Contact us</Goy>
            </div>
            <div className="md:hidden block z-50">
              <Sheet>
                <SheetTrigger
                  className="text-white -my-4 mt-1 text-2xl"
                  aria-label="Open menu"
                >
                  <AlignJustify fill="white" size={27} />
                </SheetTrigger>
                <SheetContent
                  className="flex-col flex gap-3 text-left items-start font-bold"
                  style={{
                    backgroundImage:
                      "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
                  }}
                >
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
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
