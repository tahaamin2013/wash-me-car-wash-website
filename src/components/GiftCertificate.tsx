import { Plus } from "lucide-react";
import { CldImage } from "next-cloudinary";
import React from "react";

const GiftCertificate: React.FC = () => {
  return (
    <div
      id="#MemberShips"
      className="bg-primaryBlue-200 my-6 py-8 w-full h-full justify-center items-center gap-3 sm:grid grid-cols-2 text-white overflow-hidden shadow-xl"
    >
      <div className="">
        <h1 className="text-2xl text-center sm:text-3xl font-bold mb-1 tracking-widest">
          GIFT CERTIFICATE
        </h1>
        <p className="mb-4 text-center">
          Gift the joy of a pristine ride with Wash Me Car Wash Gift
          Certificates - the perfect, eco-friendly way to say &quot;thank you
          &quot; or celebrate any occasion in style!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <ul className="list-disc border-2 border-white w-fit ml-3 py-6 px-10 rounded-lg">
            <li>Equals to $10.90 per wash</li>
            <li>Regularly ($15.00) each</li>
            <li>
              You{" "}
              <span className="text-[#f60a11] font-extrabold">SAVE $41.00</span>
            </li>
          </ul>
          <Plus size="40" stroke="white" />
          <ul className="list-disc border-2 border-white w-fit pl-9 pr-3 px-10 py-6 rounded-lg">
            <li>You receive a bonus of 50% OFF </li>
            <li>Teflon Simoniz Wax for an additional</li>
            <li>
              <span className="text-[#f60a11] font-extrabold">
                Savings of $20.00
              </span>
            </li>
          </ul>
        </div>
        <p className="text-[#f60a11] font-extrabold text-center">TOTAL SAVINGS of $61.00</p>
      </div>

      <CldImage
        src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,w_62/v1720962938/Wash%20Me%20Car%20Wash%20Images/RealMockup_jn2xyv.webp"
        alt="Gift Certificate Image"
        width={700}
        loading="lazy"
        height={230}
      />
    </div>
  );
};

export default GiftCertificate;
