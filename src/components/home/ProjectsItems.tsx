import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

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
  const [clicked, setClicked] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);

  const handleClick = (indexNumber: number) => {
    setClicked(!clicked);
    setItemIndex(indexNumber);
  };

  return (
    <div
      className="max-w-[450px] flex flex-col relative rounded-xl bg-black shadow-xl border-secondary-color min-h-96"
      onClick={() => handleClick(index)}
    >
      <div className="flex justify-center lg:w-1/2 border-b-2 border-secondary-color">
        <Image
          className="rounded-t-xl"
          src={img}
          alt={alt}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col lg:w-1/2 py-2 px-3 gap-5">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="text-neutral-300">{description}</p>
      </div>
      <AnimatePresence>
        {clicked && index == itemIndex && (
          <motion.div
            className="flex flex-col items-center absolute bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.95)] rounded-lg"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ transition: { delay: 0.1 }, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex w-full lg:w-1/2 border-b-2 h-full border-primary-text-color justify-center items-center gap-10 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ transition: { delay: 0 }, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                className="lg:hover:text-secondary-color transition duration-200 ease-in-out"
                target="_blank"
                href={github}
              >
                <FaGithub />
              </Link>
              <Link
                className="lg:hover:text-secondary-color transition duration-200 ease-in-out"
                target="_blank"
                href={href}
              >
                <IoGlobeOutline />
              </Link>
            </motion.div>
            <motion.div
              className="relative flex flex-col items-center h-full lg:w-1/2 p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ transition: { delay: 0 }, opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="absolute font-bold text-2xl text-secondary-color">
                Technologies
              </h3>
              <div className="flex items-center gap-10 text-3xl h-full">
                {tech.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
