import { Plus } from "lucide-react";
import Image from 'next/image'
import React from "react";

const GiftCertificate: React.FC = () => {
  return (
    <section
      id="MemberShips"
      className="bg-primaryBlue-200 my-6 py-8 pl-4 w-full flex flex-col sm:grid sm:grid-cols-2 text-white overflow-hidden shadow-xl"
    // aria-labelledby="gift-certificate-title"
    >
      <div className="flex flex-col items-center">
        <h2
          id="gift-certificate-title"
          className="text-2xl text-center sm:text-3xl font-bold mb-1 tracking-widest"
        >
          GIFT CERTIFICATE
        </h2>
        <p className="mb-4 text-center max-w-prose">
          Gift the joy of a pristine ride with Wash Me Car Wash Gift
          Certificates - the perfect, eco-friendly way to say &quot;thank you
          &quot; or celebrate any occasion in style!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <ul
            className="list-disc border-2 border-white w-fit py-6 px-10 rounded-lg"
            aria-label="Savings on washes"
          >
            <li>Equals to $10.90 per wash</li>
            <li>Regularly ($15.00) each</li>
            <li>
              You{" "}
              <p className="w-fit font-extrabold">SAVE $41.00</p>
            </li>
          </ul>
          <Plus size="40" aria-hidden="true" />
          <ul
            className="list-disc   border-2 border-white w-fit py-6 px-10 rounded-lg"
            aria-label="Additional bonus savings"
          >
            <li>You receive a bonus of 50% OFF </li>
            <li>Teflon Simoniz Wax for an additional</li>
            <li>
              <p className="w-fit font-extrabold">
                Savings of $20.00
              </p>
            </li>
          </ul>
        </div>
        <p className="w-fit font-extrabold text-center mt-4">
          TOTAL SAVINGS of $61.00
        </p>
      </div>

      <div className="flex justify-center items-center mt-6 sm:mt-0">
        <Image
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/RealMockup.webp"
          alt="Gift Certificate mockup"
          width={700}
          height={230}
          loading="lazy"
          className="full h-auto"
        />
      </div>
    </section>
  );
};

export default GiftCertificate;
