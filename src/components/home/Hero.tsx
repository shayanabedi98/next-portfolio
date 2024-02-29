"use client";
import Image from "next/image";
import avatar from "@/../public/assets/avatar2.png";
import Sidebar from "../home/Sidebar";
import { motion } from "framer-motion";

export default function Hero() {
  const position = "Web Developer";

  const containerAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3.5,
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="">
      <div className="flex gap-20 items-center justify-center my-52">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex flex-col w-1/2 px-10">
          <motion.h1
            className="text-5xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-secondary-color">Shayan Abedi</span>.
          </motion.h1>
          <motion.h2
            className="text-secondary-text-color text-xl mt-4 w-full"
            variants={containerAnimations}
            initial="hidden"
            animate="visible"
          >
            {position.split("").map((char, index) => (
              <motion.span key={index} variants={childVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
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
          <Image
            src={avatar}
            alt=""
            className="bg-secondary-color rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
