import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";

const PricingContainer = (data: any) => {
  const Data = data.data;

  return (
    <div className="border p-4 bg-white w-full rounded-2xl flex flex-col justify-center items-center text-center sm:w-[400px] px-5 shadow-xl py-12">
      <CldImage
        loading="lazy"
        alt="car image"
        src={Data.image}
        width={320}
        height={250}
        className="w-52 hover:scale-110 transition-all duration-300"
      />
      <h1 className="text-2xl font-bold capitalize">{Data.title}</h1>
      <h2 className="text-2xl font-bold mt-2 uppercase">
        hand wash <br /> ONE-TIME
      </h2>
      <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
        <span className="text-lg font-bold">$</span>
        {Data.price}
      </p>
      <div className="flex flex-col gap-1 mb-1">
        {Data.services.map((service: any, index: any) => (
          <span key={index} className="flex items-center justify-center w-full gap-2">
            <FaCheck fill="green" />
            {service}
          </span>
        ))}
      </div>
      <div className="mt-3 border-0 border-t-2 border-black">
        <div className="font-bold text-lg">
          <p className="text-[#717c33]">Join</p>

          <h3>Our Monthly Car Wash Membership Includes Teflon Wax</h3>
          <p className="text-[#717c33]">&</p>

          <span className="text-red-600 text-xl">SAVE MONEY!</span>
        </div>

        <Link
          target="_blank"
          href="https://touch4wash.com/hugesavings/hugesavingmembers.php?flk=2266b543ddd7762a69f0a4c0173dfbdd"
          className="flex items-center text-xl rounded-md w-full justify-center my-2"
        >
          <Button
            size="lg"
            aria-label="Compact Club Membership button"
            className="bg-primaryGreen text-black font-bold py-8 hover:text-white text-lg"
          >
            {Data.membership.title} <br />
            Membership
          </Button>
        </Link>
        <p className="font-bold text-5xl mb-2 text-black flex items-start justify-center">
          <span className="text-lg font-bold">$</span>
          {Data.membership.price}
        </p>
        <p className="font-sans text-[10px]  uppercase">4 Washes Per Month</p>
        <p className="flex flex-col gap-1 mb-1 w-full items-center justify-center">
          Click the Above Link <br />
          Or
          <br />
          Scan the QR Code Below By Utilizing Your Smartphone Camera
        </p>
        <div className="w-full flex justify-center">
          <Image
            loading="lazy"
            className="mt-3"
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/1st%20qr.png"
            width={150}
            height={250}
            alt="Compact Club"
          />
        </div>
        <p>
          For Instant Access to Our Exclusive Membership Benefits without the
          need to download the app
        </p>
      </div>
    </div>
  );
};

export default PricingContainer;
