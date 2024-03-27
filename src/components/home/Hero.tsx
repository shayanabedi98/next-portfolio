"use client";

import Image from "next/image";
import avatar from "@/../public/assets/avatar2.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-20 items-center justify-center mt-52">
      <div className="flex flex-col w-1/2 lg:px-10">
        <motion.h1
          className="lg:text-5xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-secondary-color">Shayan Abedi</span>.
        </motion.h1>
        <motion.div
          className="mt-content2 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              3000,
              "Web Developer",
              3000,
              "HTML, CSS, JavaScript/TypeScript",
              3000,
              "TailwindCSS, React.js, Next.js 14",
              3000,
            ]}
            wrapper="h2"
            speed={70}
            repeat={Infinity}
          />
        </motion.div>
      </div>
      <motion.div
        className="flex w-1/2 justify-end"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          opacity: { delay: 2, duration: 1.5, ease: "easeInOut" },
          filter: { delay: 2, duration: 1.5, ease: "easeInOut" },
        }}
      >
        <Image src={avatar} alt="" className="bg-secondary-color rounded-xl" />
      </motion.div>
    </div>
  );
}
