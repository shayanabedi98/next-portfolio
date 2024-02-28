"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.div
      className="flex relative justify-center gap-10 h-full text-2xl"
      initial={{ left: -100, opacity: 0, filter: "blur(10px)" }}
      animate={{ left: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        left: { delay: 1, duration: 1.2, ease: "easeInOut" },
        opacity: { delay: 1, duration: 2, ease: "easeInOut" },
        filter: { delay: 1, duration: 2, ease: "easeInOut" },
      }}
    >
      <FaGithub fill="#f91e5a" />
      <FaLinkedin fill="#f91e5a" />
    </motion.div>
  );
}
