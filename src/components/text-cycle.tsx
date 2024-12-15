"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Generative AI", "Automotive AI", "Government AI"];

const TextCycle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 2.5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="inline-flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
          className="gradient-text text-transparent bg-clip-text text-center text-4xl font-bold leading-tight tracking-tighter md:text-8xl lg:leading-[1.1]"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextCycle;
