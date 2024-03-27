"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();

    setSending(true);

    const data: FormData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
      alert(
        "Message sent! I'll get back to your within 1-2 business days. Thank you!"
      );
      window.location.reload();
    } else if (!response.ok) {
      setSending(false);
      alert("Something went wrong, please try again or give us a call.");
    }
  }

  return (
    <div className="my-64 flex flex-col items-center">
      <motion.h1
        className="text-5xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <span className="text-secondary-color">Contact</span>
      </motion.h1>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onSubmit={handleSubmit}
        className="mt-content flex flex-col bg-button-color-2 justify-center items-start p-3 w-[500px] border-box text-primary-color"
      >
        <h2 className="text-primary-text-color font-semibold text-2xl mb-1 p-2 ">
          Feel free to reach out to me!
        </h2>
        <div className="flex flex-col w-full my-1 p-2">
          <label className="text-secondary-color mb-1" htmlFor="name">
            Name
          </label>
          <input
            placeholder="John Doe"
            minLength={1}
            maxLength={50}
            autoComplete="off"
            className="p-1 bg-button-color-2 rounded-md"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="flex flex-col w-full p-2">
          <label className="text-secondary-color mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            placeholder="1234567890"
            minLength={1}
            maxLength={50}
            autoComplete="off"
            className="p-1 bg-button-color-2 rounded-md"
            type="tel"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            id="phone"
            required
          />
        </div>
        <div className="flex flex-col w-full my-1 p-2">
          <label className="text-secondary-color mb-1" htmlFor="email">
            Email
          </label>
          <input
            placeholder="johndoe@email.com"
            maxLength={50}
            minLength={5}
            autoComplete="off"
            className="p-1 bg-button-color-2 rounded-md"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col w-full my-1 p-2">
          <label className="text-secondary-color mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            placeholder="How can we help?"
            className="resize-none p-1 bg-button-color-2 h-28 rounded-md"
            name="message"
            id="message"
            required
          ></textarea>
        </div>
        <button
          className={`bg-secondary-color rounded-md font-semibold w-40 h-[40px] hover:bg-accent-color transition duration-500 ease-in-out mx-auto ${
            sending ? "text-gray-300" : ""
          }`}
          type="submit"
        >
          {sending ? "sending..." : "send message"}
        </button>
      </motion.form>
    </div>
  );
}
