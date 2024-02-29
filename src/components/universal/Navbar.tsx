"use client";
import Image from "next/image";
import logo from "@/../public/assets/logo.png";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="fixed w-full right-0 left-0 px-24 flex justify-between py-5"
      initial={{ top: -100, opacity: 0, filter: "blur(10px)" }}
      animate={{ top: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        top: { delay: 1, duration: 1.2, ease: "easeInOut" },
        opacity: { delay: 1, duration: 2, ease: "easeInOut" },
        filter: { delay: 1, duration: 2, ease: "easeInOut" },
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="/"
            className="flex items-center border-secondary-color border-[6px] rounded-full border-solid hover:bg-[rgba(249,30,90,0.3)] transition duration-300 ease-in-out"
          >
            <Image src={logo} alt="" className="w-20" />
          </Link>
        </motion.div>
      </motion.div>
      <div className="flex gap-10 items-center">
        <NavbarItem route="/" content="home" />
        {/* <NavbarItem route="/about" content="about" /> */}
        <NavbarItem route="/resume" content="resume" />
        <NavbarItem route="/contact" content="contact" />
      </div>
    </motion.div>
  );
}
