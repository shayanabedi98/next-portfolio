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
import { DiMongodb } from "react-icons/di";
// import { SiSass } from "react-icons/si";
import { v4 as uuid } from "uuid";

export default function Projects() {
  const projectsList = [
    {
      name: "Stones Village Inc.",
      description:
        "This is a website that I built and maintained for a stone supply and fabrication company. Initially, it was built with a Node.js and Express.js backend and React client, then rebuilt with Next.js.",
      alt: "",
      img: "/assets/projects/stonesvillage.JPG",
      href: "https://www.stonesvillage.net/",
      github: "https://github.com/shayanabedi98/stonesvillage-next",
      tech: [
        <SiNextdotjs key={uuid()} />,
        <SiReact key={uuid()} />,
        <SiTypescript key={uuid()} />,
        <SiTailwindcss key={uuid()} />,
      ],
    },
    {
      name: "Pantheras Digital Marketing",
      description:
        "Pantheras.ca is a digital marketing platform I started with a couple of friends. This website was created to promote our services, which include graphic design, web development, SEO, and more.",
      alt: "",
      img: "/assets/projects/pantheras.JPG",
      href: "https://pantheras.ca/",
      github: "https://github.com/shayanabedi98/panthera",
      tech: [
        <SiNextdotjs key={uuid()} />,
        <SiReact key={uuid()} />,
        <SiTypescript key={uuid()} />,
        <SiTailwindcss key={uuid()} />,
      ],
    },
    {
      name: "BeatZilla",
      description:
        "This simple and user-friendly app is a representation of my CRUD capabilities in a simple React project.",
      alt: "",
      img: "/assets/projects/beatzilla.JPG",
      href: "https://beatzilla.vercel.app/",
      github: "https://github.com/shayanabedi98/beatzilla",
      tech: [
        <SiReact key={uuid()} />,
        <IoLogoJavascript key={uuid()} />,
        <FaCss3Alt key={uuid()} />,
      ],
    },
    {
      name: "MTC Millwork Inc.",
      description:
        "This app calculates an Adult's BMI in both imperial and metric units. The result will be displayed next to a short and user-friendly chart explaining the result.",
      alt: "",
      img: "/assets/projects/mtc-millwork.JPG",
      href: "https://www.mtcmillwork.com/",
      github: "https://github.com/shayanabedi98/mtc-millwork",
      tech: [
        <SiNextdotjs key={uuid()} />,
        <SiReact key={uuid()} />,
        <SiTypescript key={uuid()} />,
        <SiTailwindcss key={uuid()} />,
      ],
    },
    {
      name: "Tasker",
      description:
        "Using React, Next.js, MongoDB, and Prisma, I built a user-friendly task management web application with CRUD operations through custom APIs and authentication.",
      alt: "",
      img: "/assets/projects/tasker.JPG",
      href: "https://tasker-coral-kappa.vercel.app/",
      github: "https://github.com/shayanabedi98/tasker",
      tech: [
        <SiNextdotjs key={uuid()} />,
        <SiReact key={uuid()} />,
        <SiTypescript key={uuid()} />,
        <SiTailwindcss key={uuid()} />,
        <DiMongodb key={uuid()} />,
      ],
    },
    {
      name: "TV Show Search App",
      description:
        "Using React and the TVmaze API, I built a TV show search app that can display a maximum of the 10 shows with images, which are most relavant to the search input.",
      alt: "",
      img: "/assets/projects/tv.JPG",
      href: "https://tv-search-react.vercel.app/",
      github: "https://github.com/shayanabedi98/tv-search-react",
      tech: [
        <SiReact key={uuid()} />,
        <IoLogoJavascript key={uuid()} />,
        <FaCss3Alt key={uuid()} />,
      ],
    },

    // {
    //   name: "Portfolio Website",
    //   description:
    //     "This current website was built using Next.js. It will be one that I will constantly update and improve over time. Feel free to check out the source code for this too!",
    //   alt: "",
    //   img: "/assets/projects/portfolio.JPG",
    //   href: "https://shayanabedi.com",
    //   github: "https://github.com/shayanabedi98/next-portfolio",
    //   tech: [<SiNextdotjs key={uuid()} />, <SiReact key={uuid()} />, <SiTypescript key={uuid()} />, <SiTailwindcss key={uuid()} />],
    // },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.2, // Increase the delay for each item
      },
    }),
  };

  return (
    <div className="mt-64 flex flex-col justify-center">
      <motion.h2
        className="text-3xl sm:text-4xl self-center font-semibold"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-secondary-color">Projects</span>
      </motion.h2>
      <div className="mt-content justify-items-center grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
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
                  key={index}
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
