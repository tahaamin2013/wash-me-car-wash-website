"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Link from "next/link";
// import Map from './Map';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const triggerEmail = async (data: any) => {
    await emailjs
      .send("service_yvq67f2", "template_dle46j9", data, "w8JGFlRvfl2SekBl7")
      .then((success: any) => {
        console.log("Success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err: any) => {
        console.log("message cannot go Successfully!");

        console.log(err);
      });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const errors: FormErrors = {};

    if (!name) {
      errors.name = true;
    }
    if (!email) {
      errors.email = true;
    }
    if (!message) {
      errors.message = true;
    }

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      triggerEmail(formData);
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [isSent, setIsSent] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
    router.refresh();
  };

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e: any) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const errorMessage = validateInput(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const validateEmail = (email: string): boolean => {
    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateInput = (
    fieldName: string,
    value: string
  ): string | undefined => {
    switch (fieldName) {
      case "name":
        return value.trim() === "" ? "Name is required" : undefined;
      case "email":
        return value.trim() === ""
          ? "Email is required"
          : !validateEmail(value)
          ? "Invalid email format"
          : undefined;
      case "message":
        return value.trim() === "" ? "Message is required" : undefined;
      default:
        return undefined;
    }
  };

  return (
    <div id="Contact">
      <h1 className="flex flex-row items-center mb-4 mt-2 text-2xl">
        <hr className="bg-blue w-full h-0.5 mt-0.5" />
        <span className="mx-2 text-blue">Contact</span>
        <hr className="bg-blue w-full h-0.5 mt-0.5" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="bg-blue text-white border shadow-xl p-2 rounded-lg py-6 px-8 overflow-hidden"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <div className="z-10 flex flex-col justify-center  items-center h-full">
            <form
              className="flex flex-col w-full gap-8"
              onSubmit={onFormSubmit}
            >
              <div>
                <div className="flex sm:flex-row flex-col sm:gap-7 gap-0 w-full">
                  {/* Email */}
                  <div className="mb-6 w-full">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleInputChange}
                      value={formData.name}
                      required
                      className={`dark:dark:bg-[#f3f3f3] border border-[#33353F] text-black placeholder-[#9CA2A9] dark:placeholder-[#474444] text-sm rounded-lg block w-full p-2.5 ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Your Name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="mb-6 w-full">
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="emailfield"
                      type="email"
                      onBlur={handleBlur}
                      placeholder="example@website.com"
                      name="email"
                      onChange={handleInputChange}
                      value={formData.email}
                      required
                      className={`dark:dark:bg-[#f3f3f3] border border-[#33353F] text-black placeholder-[#9CA2A9] dark:placeholder-[#474444] text-sm rounded-lg block w-full p-2.5 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    id="messagefield"
                    cols={2}
                    rows={5}
                    className={`resize-none dark:bg-[#f3f3f3] border border-[#33353F] text-black placeholder-[#9CA2A9] dark:placeholder-[#474444] dark:text-sm rounded-lg block w-full p-2.5 ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Let's talk about..."
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  aria-label="Send Message button for Contact"
                  className="bg-[#b4c656] transition-all duration-150 text-black font-medium py-2.5 px-5 rounded-lg w-fit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="bg-blue border shadow-xl rounded-lg py-5 px-4 text-white overflow-hidden"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
          }}
        >
          <div className="grid grid-cols-1 mb-2 items-center gap-2">
            <div>
              <p className="font-extrabold text-xl">
                Visit for an extraordinary car care experience
              </p>
            </div>
            <div>
              <p className="m-0 dark:text-dark p-0 flex flex-row items-center justify-between">
                <div className="flex gap-1 items-center">
                  <FaMapMarkerAlt className="fill-green" />
                  1953 9th Ave, Longview, WA,
                </div>
                <p className="m-0 dark:text-dark -mt-3 p-0 flex flex-row items-center gap-3">
                  <IoTime size={25} className="fill-green" />
                  <div className="flex flex-col">
                    <h1 className="font-bold mt-3 text-lg">Hand Wash Open</h1>
                    Mon - Sat 9 – 6 <br />
                    Sun 10 – 4
                  </div>
                </p>
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11057.182314530331!2d-122.9279929!3d46.14486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54946c94ec9bed79%3A0x41eb6feac6768b1b!2sWash%20Me%20Car%20Wash!5e0!3m2!1sen!2sbr!4v1708203053173!5m2!1sen!2sbr"
            className="rounded-xl mt-2 w-full"
            loading="lazy"
          ></iframe>
          <div className="flex flex-col gap-1 mt-6">
            <p className="flex gap-3 items-center">
              <IoMdMail className="mt-0.5 fill-green" />
              eileen@eileentefft.com
            </p>
            <p className="m-0 dark:text-dark p-0 flex flex-row items-center gap-3">
              <FaPhoneAlt className="fill-green" />
              360-4304126
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
