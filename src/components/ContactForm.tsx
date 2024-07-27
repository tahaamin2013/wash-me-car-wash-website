import React, { useState } from "react";
import { Button } from "./ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "93f23dc4-ded0-42ad-bd57-c07ab9a01f25",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form
      id="Contact"
      onSubmit={handleSubmit}
      className="w-full my-10 mx-auto flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mx-auto mb-2">Contact Form</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="email@example.com"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+ 0123 456 789"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <Button
        type="submit"
        aria-label="Submit Form"
        className="bg-black text-white"
      >
        Submit Form
      </Button>
    </form>
  );
}
