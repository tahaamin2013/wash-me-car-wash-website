"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Goy from "./goy";
import { contactDetails, socialLinks, navLinks } from "@/AllWebsiteData"; // Adjust the import path as needed
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <div
      id="Contact"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
      }}
      className="sm:grid mt-4 grid-cols-2 w-full lg:p-9 bg-black items-center justify-center flex-col sm:text-left text-center flex text-white h-fit"
    >
      <div className="flex flex-col">
        <div className="flex">
          <Image
            loading="lazy"
            src="/Hand Wash Open 9 - 4.png"
            width={100}
            height={300}
            className="h-[163px] mt-4 lg:mt-0 relative w-[145px] lg:h-[270px] rounded-l-xl"
            alt="wash me car wash timing image with pink and blue color"
          />

          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/Nnp8YUHGzBs?autoplay=1&mute=1&loop=1&playlist=Nnp8YUHGzBs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
              title="YouTube video player"
              className="w-[290px] lg:w-[470px] rounded-r-xl h-[193px] lg:h-[270px]  top-0 right-0 pointer-events-none"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <div className="flex sm:flex-row sm:justify-center items-center flex-col w-full mt-6 sm:gap-10">
          <h1 className="!text-white/60 sm:block hidden">
            Designed By{" "}
            <Link
              href="https://webkin-solutions.vercel.app/"
              className="underline"
              target="_blank"
            >
              WebKin Solutions
            </Link>
          </h1>
          <p className="sm:relative sm:block hidden !text-white/70 left-44">
            CopyRight Wash Me Carwash Longview
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col w-full h-full items-center justify-center gap-7 sm:gap-[7rem]">
        <div className="flex flex-col">
          <div className="space-y-5">
            <div className="flex gap-3 items-center">
              <FaMapMarkerAlt className="fill-green" />
              {contactDetails.address}
            </div>
            <p className="flex gap-3 items-center">
              <IoMdMail className="mt-0.5 fill-green" />
              {contactDetails.email}
            </p>
            <Link
              className="m-0 dark:text-dark p-0 flex flex-row items-center gap-3"
              href={`tel:${contactDetails.phone}`}
            >
              <FaPhoneAlt className="fill-green" />
              {contactDetails.phone}
            </Link>
          </div>
          <div className="flex text-right justify-center mt-8 space-x-6">
            {socialLinks.map((link, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      aria-label={link.label}
                      target="_blank"
                      href={link.url}
                      className="text-green hover:text-white"
                    >
                      <span className="sr-only">{link.label}</span>
                      <link.icon />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        <nav className="flex flex-col justify-center -mx-5 -my-2 sm:text-center text-left space-y-7">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="text-white/70 hover:text-white transition-all w-fit"
            >
              <Goy
                aria-label={link.label}
                id={link.id}
                className="text-base leading-6"
              >
                {link.label}
              </Goy>
            </div>
          ))}
        </nav>
        <p className="sm:relative mb-7 sm:hidden block !text-white/70 left-44">
          Copyright Wash Me Carwash Longview
        </p>
      </div>
    </div>
  );
}
