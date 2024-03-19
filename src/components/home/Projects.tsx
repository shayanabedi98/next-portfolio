"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

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
    </div>
  );
}
