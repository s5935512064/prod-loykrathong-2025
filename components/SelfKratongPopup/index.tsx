"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  lane: string;
  info: LocalKratongItem;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const SelfKratongPopup: FC<Props> = ({ lane, info }): JSX.Element => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div
        onClick={() => setToggle(!toggle)}
        className={classNames(
          lane == "t"
            ? "w-24 h-24 md:w-32 md:h-32 brightness-[85%] hover:brightness-100 active:brightness-110"
            : lane == "m"
            ? "w-32 h-32 md:w-44 md:h-44 brightness-[95%] hover:brightness-100 active:brightness-110"
            : "w-36 h-36 md:w-40 md:h-40 hover:brightness-100 active:brightness-110",
          " relative duration-200 transition-all cursor-pointer -translate-y-7",
          ""
        )}
      >
        <div className="absolute w-full h-full">
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>

        <AnimatePresence>
          {toggle ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-full h-fit bg-white/80 backdrop-blur-sm rounded-xl absolute -top-10 flex justify-center items-center translate-x-1/2 !z-[-99] shadow "
            >
              <div className="p-4 max-w-[250px] text-xs md:text-sm flex flex-col relative w-full">
                <p className="!w-full text-left ">
                  {info.wish.substring(0, 150)} <br /> ...
                  <span className="px-1 font-semibold">{info.name}</span>
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Image
          unoptimized
          src={info.kratong.src}
          alt={`kratong-${info.name}`}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          className="w-full h-full "
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </>
  );
};

export default SelfKratongPopup;
