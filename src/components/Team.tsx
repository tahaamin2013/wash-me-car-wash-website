import React from "react";
import { CldImage } from "next-cloudinary";

const Team = () => {
  return (
    <div id="Meet the Team" className="relative">
      <div className="h-[520px]">
        <CldImage
          alt="Wash me car wash team image"
          src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_480/v1720904495/Team_Image_zx0lyx.jpg"
          fill
         loading="lazy"
          className="object-cover absolute inset-0 object-center w-screen"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-auto sm:left-5 sm:right-0 sm:top-auto sm:bottom-5 rounded-none w-full sm:w-[400px] h-fit text-left text-black transition-all bg-white p-7">
        <h3 className="text-2xl font-bold mb-3 text-primaryBlue-200">
          Meet the Team
        </h3>
        <div className="flex flex-col gap-2 w-full text-sm">
          <p>
            Wash Me Car Wash, founded in 1992, was acquired by Randy and Eileen Tefft in March 2021. As the area&apos;s only hand wash car wash, we&apos;re proud that our wonderful staff continued with us.
          </p>
          <p>
            As local owners with extensive business experience, we&apos;re committed to serving our community and maintaining the high standards you&apos;ve come to expect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;