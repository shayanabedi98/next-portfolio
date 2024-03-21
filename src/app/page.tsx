"use client";

import AboutMe from "@/components/home/AboutMe";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Technologies from "@/components/home/Technologies";
import { useEffect, useState } from "react";

export default function Home() {
  // useEffect(() => {
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   };
  // }, []);
  return (
    <div>
      <Hero />
      <Technologies />
      <Projects />
      <AboutMe />
    </div>
  );
}
