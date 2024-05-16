import React from "react";

const Map = () => {
  return (
    <div
      key="1"
      className="bg-blue lg:grid gap-6 grid-cols-2 px-7 py-6 items-center text-white overflow-hidden shadow-xl"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
      }}
    >
      <div className="flex flex-col items-center mt-6 mb-1 justify-center">
        <div className="flex flex-col mb-4 lg:hidden w-full items-center mt-6 justify-center">
          <h1 className="text-2xl mb-7 font-bold uppercase">Location</h1>
          <p className="font-semibold text-lg mb-2">
            1953 9th Ave, Longview, WA2
          </p>
          <iframe
            className="sm:h-[300px] h-[400px] w-full overflow-hidden rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11057.182314530331!2d-122.9279929!3d46.14486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54946c94ec9bed79%3A0x41eb6feac6768b1b!2sWash%20Me%20Car%20Wash!5e0!3m2!1sen!2sbr!4v1708203053173!5m2!1sen!2sbr"
            width="600"
            height="300"
            aria-hidden="false"
          />
        </div>
        <h1 className="text-2xl font-bold uppercase mb-8">
          HOURS OF OPERATION
        </h1>
        <div className="w-full h-[305px] rounded-xl justify-between border-green border p-4 flex flex-col">
          <div className="flex w-full justify-between font-semibold text-lg">
            <p>Sunday</p>
            <p>9:00 AM - 4:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold text-lg">
            <p>Monday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold text-lg">
            <p>Tuesday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold text-lg">
            <p>Wednesday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold text-lg">
            <p>Thursday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-full justify-between font-semibold text-lg">
            <p>Friday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div className="flex w-fuj  ll justify-between font-semibold text-lg">
            <p>Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-full items-center mt-6 mb-1 justify-center">
        <h1 className="text-2xl font-bold uppercase">Location</h1>
        <p className="font-semibold text-lg mb-2">1953 9th Ave, Longview, WA</p>
        <iframe
          className="sm:w-full sm:h-[300px] h-[400px] w-full overflow-hidden rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11057.182314530331!2d-122.9279929!3d46.14486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54946c94ec9bed79%3A0x41eb6feac6768b1b!2sWash%20Me%20Car%20Wash!5e0!3m2!1sen!2sbr!4v1708203053173!5m2!1sen!2sbr"
          width="600"
          height="300"
          aria-hidden="false"
        />
      </div>
    </div>
  );
};

export default Map;
