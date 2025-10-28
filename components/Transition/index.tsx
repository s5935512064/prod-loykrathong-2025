"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Transition: FC<Props> = ({ children }): JSX.Element => {
  const ref = useRef(null);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          ref={ref}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "spring", duration: 1.5 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Transition;
