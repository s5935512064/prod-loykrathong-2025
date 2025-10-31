"use client";
import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { Lake } from "@/components/Water";
import dynamic from "next/dynamic";
const Menu = dynamic(() => import("@/components/Menu"), { ssr: false });
import AnimatedCounter from "../AnimatedCounter";
const SocialShared = dynamic(() => import("@/components/SocialShared"), {
  ssr: false,
});

interface Props {}

export interface Selected {
  base: string;
  swan: string;
  candles: string;
  decorations: string;
}

const Background: FC<Props> = (): JSX.Element => {
  const [count, setCount] = useState(1);
  const [kratong, setKratong] = useState<any>([]);
  const [kratongCount, setKratongCount] = useState<number>(0);
  const [loy, setLoy] = useState<boolean>(false);
  const [localItem, setLocalItem] = useState<LocalKratongItem>();
  const timer = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(10000);

  function getRandom(arr: any[], n: number) {
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    // if (n > len)
    //   throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  const startLoy = (input: boolean) => {
    setLoy(input);
    const temp = window.localStorage.getItem("userData");
    if (temp) {
      setLocalItem(JSON.parse(temp));
    }
    setKratongCount((currentKrathong) => ++currentKrathong);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const URL =
          process.env.NEXT_PUBLIC_API_URL +
          `api/krathong?page=${count}&limit=100&year=2025`;
        const result = await axios.get(URL, {
          headers: {
            "X-CSRF-Token": process.env.NEXT_PUBLIC_CSRF_SECRET,
          },
        });

        if (result.status == 200 && result.data.status == "success") {
          setKratongCount(result.data.total);
          const rand = getRandom(result.data.data, 8);
          setKratong(rand);
          if (result.data.nextPage) setCount(count + 1);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (count == 1) {
      fetchData();
    } else {
      const timer = setTimeout(() => {
        fetchData();
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    for (var i = 0; i < 200; i++) {
      //get random dimensions
      var x = Math.random() * 100;
      var y = Math.random() * 30;
      var d = Math.random() * 4;
      var s = Math.random() * 2 + 1.5;
      //create new element and add to html
      var star = document.createElement("div");
      star.classList.add("star");
      var sky = document.getElementById("sky");
      if (sky) sky.appendChild(star);

      star.style.width = d + "px";
      star.style.height = d + "px";
      star.style.top = y + "%";
      star.style.left = x + "%";
      star.style.animationDuration = s + "s";
    }
  }, []);

  useEffect(() => {
    //@ts-ignore
    clearInterval(timer.current);
    //@ts-ignore
    timer.current = setInterval(() => {
      setTimeRemaining((currentTime) => --currentTime);
    }, 1000);
  }, []);

  return (
    <>
      <Menu onLoy={(input: boolean) => startLoy(input)} />
      <div className="w-full h-screen overflow-hidden relative bg-[url('/loykrathong/assets/2025/bg-expand-width.webp')] bg-cover bg-center bg-no-repeat flex justify-center items-center bg-[#253152] bg-blend-normal">
        <div className="absolute top-0 left-0 w-full h-[100vh]  !z-[10]  ">
          <div className="w-full h-full relative">
            <Image
              unoptimized
              src={"/loykrathong/assets/2025/city-expand-width-v2.webp"}
              alt="city-item"
              width="0"
              height="0"
              sizes="100vw"
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full   "
            />
          </div>
        </div>

        <div id="sky" className="w-full h-full relative" />

        {/* ###### MOON ######## */}
        <div className="w-24 h-24 md:w-32 md:h-32 absolute right-5 md:right-16 top-7 md:top-10">
          <div className="absolute w-full  scale-95  z-[5]">
            <Image
              unoptimized
              src={"/loykrathong/assets/2025/moonv2.webp"}
              alt="moon"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-0 scale-[2.0] z-[2] opacity-25 animate-pulse grayscale">
            <Image
              unoptimized
              src={"/loykrathong/assets/scene/blur.webp"}
              alt="moon_blur"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full absolute inset-0 h-1/2 flex  justify-center  gap-2 sm:mt-8   ">
          <div className="w-full max-w-screen-sm  relative flex flex-col items-center gap-4  p-6 z-[10] drop-shadow-sm ">
            <div className="w-full h-fit relative ">
              <Image
                src={"/loykrathong/assets/2025/title-2025.webp"}
                alt="title"
                width="0"
                height="0"
                sizes="100vw"
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full "
              />
            </div>

            <div className="flex flex-col  items-center gap-2">
              <p className="relative text-base md:text-lg   text-white whitespace-nowrap  ">
                ลอยไปแล้ว
                <span className="px-2 text-5xl font-bold md:text-7xl">
                  <AnimatedCounter from={0} to={kratongCount} />
                </span>
                กระทง
              </p>
            </div>

            <div className="relative xmd:hidden">
              <SocialShared />
            </div>
          </div>
        </div>

        {/* ###### WATER ######## */}

        <div className="absolute h-1/2 bottom-0 w-full md:translate-y-5 z-[11] ">
          <Lake data={kratong} onloy={loy} selfKratong={localItem} />
        </div>

        {/* ###### FLOWER ######## */}
        <div className="fixed h-fit w-full bottom-0 translate-y-10 !z-[12] scale-95">
          <div className="relative w-full h-full">
            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[35%] bottom-[-10px] z-0 hidden lg:block">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/leaf.webp"}
                alt="lutus4"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]  w-fit absolute right-[5%] bottom-[-16px] -skew-x-12 ">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/leaf-2.webp"}
                alt="lutus2"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]  w-fit absolute right-[6%] bottom-10 boat">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/flower-3.webp"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]  w-fit absolute right-[13%] bottom-10 ">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_2.webp"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[5%] bottom-16 boat-left">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_2.webp"}
                alt="lutus3"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[35%] bottom-16 boat-left hidden lg:block">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/flower-3.webp"}
                alt="lutus4"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[8%] bottom-0 boat-left hidden lg:block">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/flower-3.webp"}
                alt="lutus4"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[22%] bottom-[-10px] boat-left hidden lg:block">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/leaf-2.webp"}
                alt="lutus4"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-[37%] bottom-20 boat-left hidden lg:block">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_2.webp"}
                alt="lutus5"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-[36%] transform  bottom-5 hidden lg:block">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_4.webp"}
                alt="lutus5"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full scale-x-[-1]"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[28%] bottom-0 scale-110 hidden lg:block ">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_4.webp"}
                alt="lutus6"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[20%] bottom-16 scale-75 ">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_2.webp"}
                alt="lutus7"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[14%] bottom-2">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/flower-2.webp"}
                alt="lutus8"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-[28%] bottom-2 hidden lg:block">
              <Image
                unoptimized
                src={"/loykrathong/assets/2025/flower-2.webp"}
                alt="lutus9"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-0 bottom-0 scale-110 ">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_3.webp"}
                alt="lutus10"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-[20%] bottom-0">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_5.webp"}
                alt="lutus11"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-0 bottom-0 scale-110 ">
              <Image
                unoptimized
                src={"/loykrathong/assets/scene/lotus_4.webp"}
                alt="lutus12"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="fixed bottom-[-5%] md:bottom-0 h-80 !z-[13] flex justify-center translate-y-10 items-end w-fit ">
          <div className="relative w-full h-full">
            <Image
              unoptimized
              src={"/loykrathong/assets/2025/wood-bridge.webp"}
              alt="bridge"
              width="0"
              height="0"
              priority
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              className="w-full h-full   "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
