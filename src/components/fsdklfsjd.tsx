import Autoplay from "embla-carousel-autoplay";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";

const Git: React.FC = () => {
  return (
    <>
      <div id="#MemberShips">
        <div
          key="2"
          className="bg-blue my-6 items-center sm:grid grid-cols-2 rounded-xl text-white overflow-hidden shadow-xl"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <div className="flex py-8 flex-col w-full h-full justify-center items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1 tracking-widest">
              GIFT CERTIFICATE
            </h1>
            <p className="mb-4 text-center">
              Gift the joy of a pristine ride with Wash Me Car Wash Gift
              Certificates – the perfect, eco-friendly way to say &quot;thank
              you &quot; or celebrate any occasion in style!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="border-2 border-white w-fit ml-3 py-6 px-10 rounded-lg">
                <ul className="list-disc">
                  <li>Equals to $10.90 per wash</li>
                  <li>Regularly ($15.00) each</li>
                  <li>
                    You{" "}
                    <span className="text-[#f60a11] font-extrabold">
                      SAVE $41.00
                    </span>
                  </li>
                </ul>
              </div>
              <Plus size="40" stroke="white" />
              <div className="border-2 border-white w-fit pl-9 pr-3 px-10 py-6 rounded-lg">
                <ul className="list-disc">
                  <li>You receive a bonus of 50% OFF </li>
                  <li>Teflon Simoniz Wax for an additional</li>
                  <li>
                    <span className="text-[#f60a11] font-extrabold">
                      Savings of $20.00
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <span className="text-[#f60a11] font-extrabold">
                TOTAL SAVINGS of $61.00
              </span>
            </div>
          </div>

          <img
            loading="eager"
            className="max-w-full "
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/RealMockup.webp"
            alt={`Step 1 image`}
          />
        </div>
      </div>
    </>
  );
};

export default Git;
