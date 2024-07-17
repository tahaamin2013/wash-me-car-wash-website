import { Plus } from "lucide-react";
import Image from "next/image";
import React, { memo } from "react";

const GiftCertificate: React.FC = memo(() => {
  return (
    <div
      id="MemberShips"
      className="bg-primaryBlue-200 my-6 grid grid-cols-1 sm:grid-cols-2 rounded-xl text-white overflow-hidden shadow-xl"
    >
      <div className="flex py-8 flex-col justify-center items-center gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 tracking-widest">
          GIFT CERTIFICATE
        </h1>
        <p className="mb-4 text-center px-4">
          Gift the joy of a pristine ride with Wash Me Car Wash Gift
          Certificates - the perfect, eco-friendly way to say &quot;thank you
          &quot; or celebrate any occasion in style!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center px-4">
          <ul className="list-disc border-2 border-white py-6 px-10 rounded-lg">
            <li>Equals to $10.90 per wash</li>
            <li>Regularly ($15.00) each</li>
            <li>
              You{" "}
              <span className="text-red-500 font-extrabold">
                SAVE $41.00
              </span>
            </li>
          </ul>
          <Plus className="justify-self-center" size="40" stroke="white" />
          <ul className="list-disc border-2 border-white py-6 px-10 rounded-lg">
            <li>You receive a bonus of 50% OFF </li>
            <li>Teflon Simoniz Wax for an additional</li>
            <li>
              <span className="text-red-500 font-extrabold">
                Savings of $20.00
              </span>
            </li>
          </ul>
        </div>
        <p className="text-red-500 font-extrabold mt-4">
          TOTAL SAVINGS of $61.00
        </p>
      </div>

      <div className="relative w-full h-full min-h-[263px]">
        <Image
          src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,w_62/v1720962938/Wash%20Me%20Car%20Wash%20Images/RealMockup_jn2xyv.webp"
          alt="Gift Certificate Image"
          layout="fill"
          objectFit="cover"
          priority
          className="transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
});

GiftCertificate.displayName = 'GiftCertificate';

export default GiftCertificate;