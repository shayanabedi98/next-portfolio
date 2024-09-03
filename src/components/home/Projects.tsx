"use client";

import Image from "next/image";
import { projects } from "../../../utils/projects";
import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

export default function Projects() {
  const [showInfo, setShowInfo] = useState(false);
  const [indexClicked, setIndexClick] = useState<null | number>(null);

  return (
    <div className="mt-64 flex w-full flex-col items-center justify-center lg:hidden">
      <h2 className="self-center text-3xl font-semibold sm:text-4xl">
        My <span className="text-secondary-color">Projects</span>
      </h2>
      <div className="mt-content flex w-[90%] flex-wrap items-center justify-center gap-6">
        {projects.map((item, index) => (
          <div className="relative w-full">
            <Image
              onClick={() => {
                setShowInfo(true);
                setIndexClick(index);
              }}
              src={item.images[0].src}
              alt={item.images[0].alt}
              width={1000}
              height={1000}
              quality={95}
              className="object-cover min-h-80"
            />
            {showInfo && index == indexClicked && (
              <div
                onClick={() => {
                  setShowInfo(false);
                  setIndexClick(index);
                }}
                className="absolute left-0 top-0 flex h-full w-full flex-col justify-center gap-2 sm:gap-4 bg-primary-color bg-opacity-95 px-2 py-4"
              >
                <h3 className="text-base sm:text-2xl font-bold">{item.name}</h3>
                <div className="flex flex-col sm:gap-2">
                  {item.description.map((desc, index) => (
                    <p key={index} className="text-xs sm:text-sm">
                      - {desc}
                    </p>
                  ))}
                </div>
                <div className="flex w-32 flex-col gap-3 text-xs sm:text-sm">
                  <Link
                    className="flex items-center gap-2 transition lg:hover:text-secondary-color"
                    target="_blank"
                    href={item.github}
                  >
                    <FaGithub className="text-lg sm:text-2xl" /> GitHub
                  </Link>
                  <Link
                    className="flex items-center gap-2 transition lg:hover:text-secondary-color"
                    target="_blank"
                    href={item.deployment}
                  >
                    <IoIosLink className="text-lg sm:text-2xl" /> Live View
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
