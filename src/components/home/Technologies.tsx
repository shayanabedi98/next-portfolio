"use client";

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
import { SiRedux } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";

export default function Technologies() {
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
    { name: "Redux", img: <SiRedux /> },
    { name: "Wordpress", img: <FaWordpressSimple /> },
    { name: "Prisma", img: <SiPrisma /> },
  ];

  return (
    <div className="mt-64 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-semibold">
        My <span className="text-secondary-color">Technologies</span>
      </h2>
      <div className="mt-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-40 lg:gap-x-8 xl:gap-x-40 gap-y-16 min-h-[580px]">
        {technologiesList.map((item, index) => (
          <div key={index}>
            <TechnologiesItem icon={item.img} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
