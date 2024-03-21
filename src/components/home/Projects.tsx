"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectItems from "./ProjectsItems";

import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiSass } from "react-icons/si";

export default function Projects() {
  const projectsList = [
    {
      name: "Stones Village Inc.",
      description:
        "This is a website that I built and maintained for a stone supply and fabrication company. Initially, it was built with a Node.js and Express.js backend and React client, then rebuilt with Next.js.",
      alt: "",
      img: "/assets/projects/stonesvillage.jpg",
      href: "https://www.stonesvillage.net/",
      github: "https://github.com/shayanabedi98/stonesvillage-next",
      tech: [<SiNextdotjs />, <SiReact />, <SiTypescript />, <SiTailwindcss />],
    },
    {
      name: "Pantheras Digital Marketing",
      description:
        "Pantheras.ca is a digital marketing platform I started with a couple of friends. This website was created to promote our services, which include graphic design, web development, SEO, and more.",
      alt: "",
      img: "/assets/projects/pantheras.jpg",
      href: "https://pantheras.ca/",
      github: "https://github.com/shayanabedi98/panthera",
      tech: [<SiNextdotjs />, <SiReact />, <SiTypescript />, <SiTailwindcss />],
    },
    {
      name: "To-Do App",
      description:
        "This simple and user-friendly app is a representation of my CRUD capabilities in a simple React project.",
      alt: "",
      img: "/assets/projects/todo.jpg",
      href: "https://todo-list-taupe-beta-44.vercel.app/",
      github: "https://github.com/shayanabedi98/todo-list",
      tech: [<SiReact />, <IoLogoJavascript />, <FaCss3Alt />],
    },
    {
      name: "TV Show Search App",
      description:
        "Using React and the TVmaze API, I built a TV show search app that can display a maximum of the 10 shows with images, which are most relavant to the search input.",
      alt: "",
      img: "/assets/projects/tv.jpg",
      href: "https://tv-search-react.vercel.app/",
      github: "https://github.com/shayanabedi98/tv-search-react",
      tech: [<SiReact />, <IoLogoJavascript />, <FaCss3Alt />],
    },
    {
      name: "Adult BMI Calculator",
      description:
        "This app calculates an Adult's BMI in both imperial and metric units. The result will be displayed next to a short and user-friendly chart explaining the result.",
      alt: "",
      img: "/assets/projects/bmi.jpg",
      href: "https://bmi-calculator-react-tau.vercel.app/",
      github: "https://github.com/shayanabedi98/bmi-calculator-react",
      tech: [<SiReact />, <IoLogoJavascript />, <FaCss3Alt />, <SiSass />],
    },
    {
      name: "Portfolio Website",
      description:
        "This current website was built using Next.js. It will be one that I will constantly update and improve over time. Feel free to check out the source code for this too!",
      alt: "",
      img: "/assets/projects/portfolio.jpg",
      href: "https://shayanabedi.com",
      github: "https://github.com/shayanabedi98/next-portfolio",
      tech: [<SiNextdotjs />, <SiReact />, <SiTypescript />, <SiTailwindcss />],
    },
  ];

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

  return (
    <div className="mt-64 flex flex-col justify-center">
      <motion.h2
        className="text-4xl self-center font-semibold"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        My <span className="text-secondary-color">Projects</span>
      </motion.h2>
      <div className="mt-content grid grid-cols-2 gap-10">
        {inView &&
          projectsList.map((item, index) => {
            return (
              <motion.div
                key={index}
                custom={index}
                variants={variants}
                initial="hidden"
                animate="show"
              >
                <ProjectItems
                  img={item.img}
                  alt={item.alt}
                  description={item.description}
                  name={item.name}
                  github={item.github}
                  href={item.href}
                  index={index}
                  tech={item.tech}
                />
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}
