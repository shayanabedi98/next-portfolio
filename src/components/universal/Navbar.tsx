"use client";
import Image from "next/image";
import logo from "@/../public/assets/logo.png";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <motion.div
      className="fixed w-full right-0 left-0 px-4 md:px-24 z-[1] bg-primary-color flex justify-between py-5"
      initial={{ top: -100, opacity: 0, filter: "blur(10px)" }}
      animate={{ top: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        top: { delay: 1, duration: 1.2, ease: "easeInOut" },
        opacity: { delay: 1, duration: 2, ease: "easeInOut" },
        filter: { delay: 1, duration: 2, ease: "easeInOut" },
      }}
    >
      <motion.div className="flex items-center gap-5">
        <AnimatePresence>
          {mobile && (
            <motion.div
              className="fixed top-0 left-0 h-screen w-screen flex flex-col bg-primary-color text-xl z-10 text-secondary-color font-bold px-4 md:px-24 py-9"
              initial={{ left: "-100%" }}
              animate={{ left: 0 }}
              exit={{ left: "-100%" }}
            >
              <div
                onClick={() => setMobile(false)}
                className="absolute text-3xl text-secondary-color border-4 border-secondary-color p-1 rounded-full self-end"
              >
                <IoCloseSharp />
              </div>
              <div className="flex flex-col justify-center items-center gap-10 h-full">
                {/* mobile */}
                <Link onClick={() => setMobile(false)} href="/">home</Link>
                <Link onClick={() => setMobile(false)} href="/resume">resume</Link>
                <Link onClick={() => setMobile(false)} href="/contact">contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-3"
        >
          <Link
            href="/"
            className="flex items-center border-secondary-color border-[6px] rounded-full border-solid max-lg:active:bg-[rgba(249,30,90,0.3)] max-lg:active:scale-[1.2] lg:hover:bg-[rgba(249,30,90,0.3)] lg:hover:scale-[1.2] transition duration-300 ease-in-out"
          >
            <Image src={logo} alt="" className="w-16" />
          </Link>
        </motion.div>
        <div className="hidden lg:flex text-2xl gap-5">
          <Link
            className="hover:scale-[1.3] transition duration-300 ease-in-out"
            target="_blank"
            href="https://github.com/shayanabedi98?"
          >
            <FaGithub fill="#f91e5a" />
          </Link>
          <Link
            className="hover:scale-[1.3] transition duration-300 ease-in-out"
            target="_blank"
            href="https://www.linkedin.com/in/shayan-abedi-6b1320185/"
          >
            <FaLinkedin fill="#f91e5a" />
          </Link>
        </div>
      </motion.div>
      <div className="hidden lg:flex gap-10 items-center">
        <NavbarItem route="/" content="home" />
        <NavbarItem route="/resume" content="resume" />
        <NavbarItem route="/contact" content="contact" />
      </div>
      <div className="flex lg:hidden items-center justify-end">
        <div
          onClick={() => setMobile(true)}
          className="text-2xl text-secondary-color border-4 border-secondary-color p-2 rounded-full"
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </motion.div>
  );
}
