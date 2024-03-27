"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div className="my-64 flex flex-col justify-center">
      <motion.h2
        className="text-4xl self-center font-semibold"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0,
        }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        About <span className="text-secondary-color">Me</span>
      </motion.h2>
      <div className="flex mt-content gap-20">
        <div className="flex flex-col items-start justify-center w-1/2">
          <motion.p
            className="mt-content text-lg"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: inView ? 1 : 0,
              filter: inView ? "blur(0px)" : "blur(10px)",
            }}
            transition={{
              opacity: { delay: 1, duration: 1, ease: "easeInOut" },
              filter: { delay: 1, duration: 1, ease: "easeInOut" },
            }}
          >
            My journey into the realm of software development began at an
            unexpected crossroad. I studied Business Administration at George
            Brown College in Toronto before deciding to step into the field of
            computer science. I was first introduced to Python on YouTube, after
            my father asked me if I knew what it took to create a website for
            his business. After my initial exposure to code, I learned about
            JavaScript and its capabilities. I spent over a year studying the
            language, along with the many frameworks and libraries in its
            ecosystem. I&apos;ve achieved this goal through many tutorials,
            courses, and projects.
          </motion.p>
          <motion.p
            className="mt-content text-lg"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: inView ? 1 : 0,
              filter: inView ? "blur(0px)" : "blur(10px)",
            }}
            transition={{
              opacity: { delay: 1, duration: 1, ease: "easeInOut" },
              filter: { delay: 1, duration: 1, ease: "easeInOut" },
            }}
          >
            After countless months of head-scratching and keyboard smashing, I
            finally got to build a website for my father&apos;s business in Next.js,
            along with starting my own digital marketing agency with a couple of
            friends. My passion for creativity and building has brought me far
            as I continue to learn new technologies in this constantly improving
            industry.
          </motion.p>
        </div>
        <motion.div
          className="flex justify-end w-1/2"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: inView ? 1 : 0,
            filter: inView ? "blur(0px)" : "blur(10px)",
          }}
          transition={{
            opacity: { delay: 1.5, duration: 1, ease: "easeInOut" },
            filter: { delay: 1.5, duration: 1, ease: "easeInOut" },
          }}
        >
          <Image
            className="object-cover w-[600px] h-[600px] rounded-xl"
            src="/assets/code-screen.jpg"
            alt="Shayan Abedi selfie"
            width={620}
            height={620}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
