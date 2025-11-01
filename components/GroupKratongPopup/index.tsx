"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  lane: string;
  info: KratongFetch;
  zIndex: number;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const GroupKratongPopup: FC<Props> = ({ lane, info, zIndex }): JSX.Element => {
  const [toggle, setToggle] = useState(Math.random() < 0.1);

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
            ? "w-24 h-24 md:w-36 md:h-36 brightness-[85%] hover:brightness-100 active:brightness-110"
            : lane == "m"
            ? "w-28 h-28 md:w-36 md:h-36 brightness-[95%] hover:brightness-100 active:brightness-110"
            : "w-32 h-32 md:w-36 md:h-36 hover:brightness-100 active:brightness-110",
          " relative duration-200 transition-all cursor-pointer ",
          `!z-[${zIndex}]`
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
              className="w-full h-fit bg-white/80 backdrop-blur-sm rounded-xl absolute -top-10 flex justify-center items-center translate-x-1/2 !z-[-99] shadow "
            >
              <div className="p-4 max-w-[250px] text-xs md:text-sm flex flex-col relative w-full">
                <p className="!w-full text-left ">
                  {info.member_wish.substring(0, 150)} <br /> ...
                  <span className="px-1 font-semibold">{info.member_name}</span>
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <Image
          unoptimized
          src={`${info.krathong_src}`}
          alt={`kratong-${info.member_name}`}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          className="w-full h-full scale-90  "
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </>
  );
};

export default GroupKratongPopup;
