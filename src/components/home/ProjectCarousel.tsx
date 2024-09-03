"use client";

import { useState } from "react";
import { projects } from "../../../utils/projects";
import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";

export default function ProjectCarousel() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleNextProject = () => {
    if (projectIndex == projects.length - 1) {
      setProjectIndex(0);
    } else {
      setProjectIndex((prev) => prev + 1);
    }
    setImageIndex(0);
  };

  const handleNextImage = () => {
    if (imageIndex == projects.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  const handlePrevProject = () => {
    if (projectIndex == 0) {
      setProjectIndex(projects.length - 1);
    } else {
      setProjectIndex((prev) => prev - 1);
    }
    setImageIndex(0);
  };

  const handlePrevImage = () => {
    if (imageIndex == 0) {
      setImageIndex(projects[projectIndex].images.length - 1);
    } else {
      setImageIndex((prev) => prev - 1);
    }
  };

  const handleImageSelect = (index: number) => {
    setImageIndex(index);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative flex justify-center xl:max-w-[1400px]">
        <div className="relative z-10 w-[80%] lg:w-[90%] xl:w-[92%]">
          <Image
            onClick={() => setShowInfo(true)}
            quality={100}
            className="cursor-pointer rounded-md object-cover"
            width={1300}
            height={1000}
            src={projects[projectIndex].images[imageIndex].src}
            alt={projects[projectIndex].images[imageIndex].alt}
          />
          {showInfo && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              className="absolute left-0 top-0 z-10 mx-auto h-full w-full bg-primary-color bg-opacity-[98%] px-8 py-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex h-full w-full flex-col justify-center gap-4 xl:gap-6"
              >
                <IoMdClose
                  className="absolute right-10 top-10 z-20 cursor-pointer rounded-full text-3xl"
                  onClick={() => setShowInfo(false)}
                />
                <h3 className="text-xl font-bold xl:text-3xl">
                  {projects[projectIndex].name}
                </h3>
                <div className="flex flex-col xl:gap-3 gap-1 max-xl:text-sm">
                  {projects[projectIndex].description.map(
                    (p: string, index: number) => (
                      <p key={index}>- {p}</p>
                    ),
                  )}
                </div>
                <div className="flex max-w-[420px] flex-wrap gap-2">
                  {projects[projectIndex].stack.map((tech, index) => (
                    <div
                      className="flex h-8 w-14 items-center justify-center rounded-md bg-white text-xl text-primary-color xl:h-12 xl:w-20 xl:text-3xl"
                      key={index}
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>
                <div className="flex w-32 flex-col gap-3 max-lg:text-sm">
                  <Link
                    className="flex items-center gap-2 transition lg:hover:text-secondary-color"
                    target="_blank"
                    href={projects[projectIndex].github}
                  >
                    <FaGithub className="text-2xl" /> GitHub
                  </Link>
                  <Link
                    className="flex items-center gap-2 transition lg:hover:text-secondary-color"
                    target="_blank"
                    href={projects[projectIndex].deployment}
                  >
                    <IoIosLink className="text-2xl" /> Live View
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* <div className="absolute top-0 z-20 hidden h-full w-full items-center justify-between px-4 text-3xl">
            <button onClick={handlePrevImage}>
              <GrFormNextLink className="rotate-180 rounded-full bg-primary-color" />
            </button>
            <button onClick={handleNextImage}>
              <GrFormNextLink className="rounded-full bg-primary-color" />
            </button>
          </div> */}
        </div>
        <div className="absolute z-0 flex h-full w-full items-center justify-between text-4xl">
          <button onClick={handlePrevProject}>
            <GrFormNextLink className="rotate-180 rounded-full bg-secondary-color" />
          </button>
          <button onClick={handleNextProject}>
            <GrFormNextLink className="rounded-full bg-secondary-color" />
          </button>
        </div>
      </div>
      <div className="relative bottom-8 z-20 flex flex-wrap gap-4 xl:bottom-12">
        {projects[projectIndex].images.map((img, index) => (
          <div
            className="cursor-pointer"
            key={index}
            onClick={() => handleImageSelect(index)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={200}
              height={200}
              className={`h-14 w-24 border-2 object-cover lg:h-20 lg:w-32 ${imageIndex == index ? "border-secondary-color" : "border-primary-color opacity-50"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
