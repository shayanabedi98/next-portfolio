"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import TechnologiesItem from "./TechnologiesItem";
import { DiMongodb } from "react-icons/di";

export default function Technologies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.2, // Increase the delay for each item
      },
    }),
  };

  const technologiesList = [
    { name: "HTML", img: <FaHtml5 /> },
    { name: "CSS", img: <IoLogoCss3 /> },
    { name: "JavaScript", img: <IoLogoJavascript /> },
    { name: "TypeScript", img: <SiTypescript /> },
    { name: "Python", img: <FaPython /> },
    { name: "SASS", img: <SiSass /> },
    { name: "TailwindCSS", img: <SiTailwindcss /> },
    { name: "React.js", img: <FaReact /> },
    { name: "Next.js", img: <SiNextdotjs /> },
    { name: "Node.js", img: <FaNodeJs /> },
    { name: "Express.js", img: <SiExpress /> },
    { name: "MongoDB", img: <DiMongodb /> },
  ];

  return (
    <div className="mt-64 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl font-semibold"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        My <span className="text-secondary-color">Technologies</span>
      </motion.h2>
      <div className="mt-content grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-16 min-h-[580px]">
        {inView &&
          technologiesList.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={variants}
              initial="hidden"
              animate="show"
            >
              <TechnologiesItem icon={item.img} name={item.name} />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
