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
import { contactDetails, socialLinks, navLinks } from "@/AllWebsiteData";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import FoamBubbles from "./FoamBubbles";

export default function Footer() {
  return (
    <footer className="bg-black overflow-x-auto">
      <div
        id="Contact"
        className="sm:grid mt-4 grid-cols-2 w-full lg:p-9 bg-black items-center justify-center flex-col sm:text-left text-center flex text-white h-fit"
      >
        <div className="flex flex-col">
          <div className="flex  items-center">
            <Image
              loading="lazy"
              src="/Hand Wash Open 9 - 4.png"
              width={100}
              height={400}
              className="sm:h-[163px] h-[190px] mt-4 lg:mt-0 relative w-[145px] lg:h-[270px] rounded-l-xl"
              alt="wash me car wash timing image with pink and blue color"
            />

            <video
              className="w-[250px] md:w-full h-[190px] md:h-auto lg:max-w-[30rem] object-cover mt-4 lg:mt-0"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                type="video/webm"
                src="https://res.cloudinary.com/dni4hpqo3/video/upload/v1721000398/car_glqu60.mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex sm:flex-row sm:justify-center items-center flex-col w-full mt-6 sm:gap-10">
            <p className="!text-white/60 sm:block hidden">
              Designed By{" "}
              <Link
                href="https://webkin-solutions.vercel.app/"
                className="underline"
                target="_blank"
              >
                WebKin Solutions
              </Link>
            </p>
            <p className="sm:relative sm:block hidden !text-white/70 left-44">
              CopyRight Wash Me Carwash Longview
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col w-full h-full items-center justify-center gap-7 sm:gap-[7rem]">
          <div className="flex flex-col">
            <div className="space-y-5">
              <p className="flex gap-3 items-center">
                <FaMapMarkerAlt className="fill-green" />
                {contactDetails.address}
              </p>
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
              <Goy
                aria-label={link.label}
                id={link.id}
                key={index}
                className="text-base leading-6 text-white/70 hover:text-white transition-all w-fit"
              >
                {link.label}
              </Goy>
            ))}
          </nav>
          <p className="sm:relative mb-7 sm:hidden block !text-white/70 left-44">
            Copyright Wash Me Carwash Longview
          </p>
        </div>
      </div>
    </footer>
  );
}
