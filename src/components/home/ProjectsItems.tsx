import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { AnimatePresence, delay, motion } from "framer-motion";

type Props = {
  img: string;
  alt: string;
  name: string;
  description: string;
  github: string;
  href: string;
  index: number;
  tech: JSX.Element[];
};

export default function ProjectItems({
  img,
  alt,
  description,
  name,
  href,
  github,
  index,
  tech,
}: Props) {
  const [isHover, setIsHover] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const handleMouseOver = (indexNumber: number) => {
    setIsHover(true);
    setItemIndex(indexNumber);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="flex relative rounded-xl bg-black shadow-xl border-secondary-color"
      onMouseOver={() => handleMouseOver(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-1/2 border-r-2 border-secondary-color">
        <Image
          className="rounded-l-xl"
          src={img}
          alt={alt}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col w-1/2 py-2 px-3 gap-5">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="text-neutral-300">{description}</p>
      </div>
      <AnimatePresence>
        {isHover && index == itemIndex && (
          <motion.div
            className="flex items-center absolute bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.95)] rounded-lg"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ transition: { delay: 0.1 }, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex w-1/2 border-r-2 h-full border-primary-text-color justify-center items-center gap-10 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ transition: { delay: 0 }, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                className="hover:text-secondary-color transition duration-200 ease-in-out"
                target="_blank"
                href={github}
              >
                <FaGithub />
              </Link>
              <Link
                className="hover:text-secondary-color transition duration-200 ease-in-out"
                target="_blank"
                href={href}
              >
                <IoGlobeOutline />
              </Link>
            </motion.div>
            <motion.div
              className="relative flex flex-col items-center h-full w-1/2 p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ transition: { delay: 0 }, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="absolute font-bold text-2xl text-secondary-color">
                Technologies
              </h3>
              <div className="flex items-center gap-10 text-3xl h-full">
                {tech.map((item, idx) => {
                  return <div key={idx}>{item}</div>;
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
