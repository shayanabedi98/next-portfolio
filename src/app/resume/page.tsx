"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="my-64 flex flex-col justify-center items-center">
      <motion.h1
        className="text-5xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        My <span className="text-secondary-color">Resume</span>
      </motion.h1>
      <motion.object
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-content flex justify-center"
        data="/assets/ShayanAbedi-Resume.pdf"
        type="application/pdf"
        width="100%"
        height={1130}
      >
        <p>
          Unable to display PDF file. Please download the file instead. {""}
          <a
            className="text-secondary-color font-bold"
            href="assets/ShayanAbedi-Resume.pdf"
            target="_blank"
          >
            Download Resume
          </a>
        </p>
      </motion.object>
    </div>
  );
}
