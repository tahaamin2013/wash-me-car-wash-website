import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <>
      {/* Desktop View */}
      <div
        id="Meet the Team"
        className="hidden sm:block relative bg-blue h-[520px] text-white overflow-hidden rounded-xl"
      >
        <div className="absolute inset-0">
          <Image
            alt="Wash me car wash team image"
            src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/teem.webp"
            width={1200}
            loading="eager"
            height={800}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="relative z-10 inset-0 text-center flex justify-between w-full gap-3 items-center h-full">
          <div className="flex flex-col gap-4 mt-[1px] sm:mt-[120px] w-full justify-center items-center">
            <div className="absolute bottom-4 rounded-none w-fit h-fit left-6 right-4 text-left text-black transition-all bg-white backdrop-blur-sm px-7 py-7">
              <h3 className="text-2xl font-semibold mb-1 text-blue">
                Meet the Team
              </h3>
              <div className="flex flex-col gap-2 w-full lg:w-[400px]">
                <p className="text-[13px]">
                  Although Wash Me Car Wash was started in 1992, Randy and
                  Eileen Tefft bought the car wash in March of 2021. Why did
                  they buy Wash Me Car Wash Longview? Because it was the only
                  hand wash car wash around and all the wonderful staff stayed
                  on with us. We’ll keep on the good work!
                </p>
                <p className="text-[13px]">
                  We are local owners with a long history of owning and managing
                  businesses. We love that we can serve this community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        id="Meet the Team - mobile"
        className="sm:hidden block text-white overflow-hidden rounded-xl"
      >
        <Image
          alt="Wash me car wash team image"
          src="https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/teem.webp"
          loading="eager"
          width={600}
          height={400}
          className="w-full h-full object-center object-cover"
        />
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <div className="rounded-none w-fit h-fit text-left text-black transition-all bg-white px-7 py-7">
            <h3 className="text-2xl font-semibold mb-1 text-blue">
              Meet the Team
            </h3>
            <div className="flex flex-col gap-2 w-full lg:w-[400px]">
              <p className="text-[13px]">
                Although Wash Me Car Wash was started in 1992, Randy and Eileen
                Tefft bought the car wash in March of 2021. Why did they buy
                Wash Me Car Wash Longview? Because it was the only hand wash car
                wash around and all the wonderful staff stayed on with us. We’ll
                keep on the good work!
              </p>
              <p className="text-[13px]">
                We are local owners with a long history of owning and managing
                businesses. We love that we can serve this community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
