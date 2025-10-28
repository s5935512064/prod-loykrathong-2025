"use client";

import type { NextPage } from "next";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  lane: string;
  info: ManagerKrathong;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const KrathongPopup: FC<Props> = ({ lane, info }): JSX.Element => {
  const [toggle, setToggle] = useState(true);

  function getOS() {
    var userAgent = window.navigator.userAgent,
      platform =
        //@ts-ignore
        window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (/Linux/.test(platform)) {
      os = "Linux";
    }

    return os;
  }

  useEffect(() => {
    const device_os = getOS();

    if (device_os == "iOS" || device_os == "Android") setToggle(false);
  }, []);

  return (
    <>
      <div
        onClick={() => setToggle(!toggle)}
        className={classNames(
          lane == "t"
            ? "w-32 h-32 md:w-44 md:h-44 brightness-[85%] hover:brightness-100 active:brightness-110  -translate-y-10 md:-translate-y-7"
            : lane == "m"
            ? "w-36 h-36 md:w-48 md:h-48 brightness-[95%] hover:brightness-100 active:brightness-110 -translate-y-2 md:-translate-y-3"
            : "w-36 h-36 md:w-40 md:h-40 hover:brightness-100 active:brightness-110",
          " relative duration-200 transition-all cursor-pointer !z-[99] ",
          ""
        )}
      >
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
              className="w-fif h-fit bg-white/80 backdrop-blur-sm rounded-xl absolute -top-10 flex justify-center items-center translate-x-1/2 !z-[-99] shadow "
            >
              <div className="p-4 max-w-[250px] text-xs md:text-sm flex flex-col">
                <p>{info.wish.substring(0, 150)}</p>
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-semibold">{info.name}</span>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Image
          unoptimized
          src={`/loykrathong/assets/kratong/krathong-special-${info.krathong_type}.webp`}
          alt="kratong"
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

export default KrathongPopup;
