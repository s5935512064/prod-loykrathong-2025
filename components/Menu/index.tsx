"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { WaterOneData } from "@/map/animations";
import { Edit } from "@/components/Vector";
import { browserName } from "react-device-detect";
import axios from "axios";

interface Props {
  onLoy: (toggle: boolean) => void;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const itemKratong = [
  {
    id: 0,
    name: "kratong-0",
    type: 0,
    src: "/loykrathong/assets/2025/krathong/T01.webp",
  },
  {
    id: 1,
    name: "kratong-1",
    type: 1,
    src: "/loykrathong/assets/2025/krathong/T02.webp",
  },
  {
    id: 2,
    name: "kratong-2",
    type: 2,
    src: "/loykrathong/assets/2025/krathong/T03.webp",
  },
  {
    id: 3,
    name: "kratong-3",
    type: 3,
    src: "/loykrathong/assets/2025/krathong/T04.webp",
  },
  {
    id: 4,
    name: "kratong-4",
    type: 4,
    src: "/loykrathong/assets/2025/krathong/T05.webp",
  },
  {
    id: 5,
    name: "kratong-5",
    type: 5,
    src: "/loykrathong/assets/2025/krathong/T06.webp",
  },
  {
    id: 6,
    name: "kratong-6",
    type: 6,
    src: "/loykrathong/assets/2025/krathong/T07.webp",
  },
  {
    id: 7,
    name: "kratong-7",
    type: 7,
    src: "/loykrathong/assets/2025/krathong/T08.webp",
  },
  {
    id: 8,
    name: "kratong-8",
    type: 8,
    src: "/loykrathong/assets/2025/krathong/T09.webp",
  },

  {
    id: 10,
    name: "kratong-10",
    type: 10,
    src: "/loykrathong/assets/2025/krathong/T11.webp",
  },
  {
    id: 9,
    name: "kratong-9",
    type: 9,
    src: "/loykrathong/assets/2025/krathong/T10.webp",
  },
  {
    id: 11,
    name: "kratong-11",
    type: 11,
    src: "/loykrathong/assets/2025/krathong/T12.webp",
  },
];

const RUDE_WORDS = [
  // คำด่า/คำหยาบภาษาไทย
  "ควย",
  "เหี้ย",
  "สัส",
  "มึง",
  "กู",
  "เย็ด",
  "หี",
  "ไอ้สัตว์",
  "ระยำ",
  "โง่",
  "ชาติหมา",
  "สถุล",
  "ดอก",
  "มึน",
  "เสือก",
  "แม่ง",
  "ไอ้เวร",
  "ชิบหาย",
  "มารดา",
  "จัญไร",
  "ส้นตีน",

  // คำด่า/คำหยาบภาษาอังกฤษ
  "fuck",
  "shit",
  "bitch",
  "ass",
  "dick",
  "pussy",
  "bastard",
  "damn",
  "cunt",
  "whore",
  "slut",
  "idiot",
  "stupid",
  "retard",
  "moron",

  // คำแสลง/คำไม่สุภาพ
  "กาก",
  "โคตร",
  "จน",
  "ขี้ขลาด",
  "ปัญญาอ่อน",
  "ทุเรศ",
  "อีแก่",
  "อีตัว",
  "ไอ้แก่",

  // คำที่อาจมีนัยทางการเมือง/ความเชื่อ
  "ล้มเจ้า",
  "ชังชาติ",
  "ตายซะ",
  "ฆ่าตัว",
  "ทำลาย",
];

const Menu: FC<Props> = ({ onLoy }): JSX.Element => {
  const [csrfToken, setCsrfToken] = useState<string>("loading...");
  let [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [wish, setWish] = useState<string>("");
  const [localKratong, setLocalKratong] = useState(false);
  const [selected, setSelected] = useState<KratongItem>(itemKratong[0]);
  const [localItem, setLocalItem] = useState<LocalKratongItem | null>(null);
  const [toggle, setToggle] = useState(true);

  const [ipAddress, setIPAddress] = useState("");
  const [browser, setBrowser] = useState<string>("");
  const [osDevice, setOSDevice] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  function closeModal() {
    setName("");
    setWish("");
    setSelected(itemKratong[0]);
    setIsOpen(false);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function openModal(caseKratong: string) {
    scrollToTop();

    if (caseKratong == "edit") {
      const temp = window.localStorage.getItem("userData");
      if (temp) {
        setLocalKratong(true);
        setLocalItem(JSON.parse(temp));
      }
      setIsOpen(true);
    } else if (caseKratong == "new") {
      localStorage.clear();
      setLocalKratong(false);
      //@ts-ignore
      setLocalItem(null);
      setIsOpen(true);
    }
  }

  const filterRudeWords = (text: string): string => {
    let filteredText = text.toLowerCase();

    // Remove spaces and special characters for better matching
    const normalizedText = filteredText
      .replace(/\s+/g, "")
      .replace(/[._\-*]/g, "");

    RUDE_WORDS.forEach((word) => {
      // Basic matching
      const regex = new RegExp(word, "gi");
      filteredText = filteredText.replace(regex, "***");

      // Match words with spaces or special characters between letters
      const looseRegex = new RegExp(word.split("").join("[\\s._\\-*]*"), "gi");
      filteredText = filteredText.replace(looseRegex, "***");
    });

    return filteredText;
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredWish = filterRudeWords(event.target.value);
    setName(filteredWish);
  };

  const handleWishChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const filteredWish = filterRudeWords(event.target.value);
    setWish(filteredWish);
  };

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

  function getIP() {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const data = {
      name: name,
      wish: wish,
      kratong: selected,
      loy: false,
    };

    localStorage.setItem("userData", JSON.stringify(data));
    setToggle(true);
    setLocalItem(data);
    setIsOpen(false);
  };

  const loyKratong = async () => {
    setLoading(true);

    const data = {
      name: localItem?.name,
      wish: localItem?.wish,
      kratong: localItem?.kratong,
      loy: true,
    };

    localStorage.setItem("userData", JSON.stringify(data));
    onLoy(true);

    if (csrfToken != null && ipAddress) {
      try {
        const resulte = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + `api/krathong`,
          {
            member_name: name,
            member_wish: wish,
            krathong_type: selected.type,
            krathong_src: selected.src,
            device_os: osDevice == null ? "null" : osDevice,
            device_browser: browser,
            device_ip: ipAddress,
            loy: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token": csrfToken,
            },
          }
        );

        if (resulte.status == 200) {
          removeKratong();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  function removeKratong() {
    localStorage.removeItem("userData");
    setLoading(false);
    setToggle(false);
    setLocalKratong(false);
    setLocalItem(null);
    setName("");
    setWish("");
    setSelected(itemKratong[0]);
  }

  useEffect(() => {
    const temp = window.localStorage.getItem("userData");
    if (temp) {
      setLocalKratong(true);
      setLocalItem(JSON.parse(temp));
    }
  }, [toggle]);

  useEffect(() => {
    const os = getOS();
    getIP();
    setOSDevice(os);
    setBrowser(browserName);
  }, []);

  useEffect(() => {
    const el = document.querySelector(
      'meta[name="x-csrf-token"]'
    ) as HTMLMetaElement | null;

    if (el) {
      setCsrfToken(el.content);
      return;
    } else {
      setCsrfToken("missing");
    }
  }, []);

  return (
    <>
      <div className=" h-fit fixed bottom-5 z-50 px-6 xmd:px-10  flex flex-col-reverse gap-2 items-center justify-center">
        {localItem && localItem.loy == false ? (
          <div className="flex items-center gap-2  ">
            <button
              type="button"
              onClick={() => openModal("edit")}
              className="-ml-7 bottom-1 xmd:ml-2 left-0 absolute w-9 h-9 text-sm bg-blue-600 rounded-full text-white flex flex-col justify-center items-center "
            >
              <Edit size="5" />
              {/* <span className="whitespace-nowrap -mt-1">แก้ไขกระทง</span> */}
            </button>
            <button
              type="button"
              onClick={loyKratong}
              disabled={loading}
              style={{ backgroundColor: `${loading ? "#ccc" : ""}` }}
              className="py-2 to-[#FFDA00] bg-gradient-to-t  from-orange-500 text-amber-800 text-center shadow  rounded-full min-w-[150px]  whitespace-nowrap text-2xl font-semibold hover:brightness-105  transition-all duration-200 z-[60] hover:scale-110"
            >
              <span className="drop-shadow">
                {loading ? "กำลังลอยกระทง..." : "ปล่อยกระทง"}
              </span>
            </button>

            <button
              type="button"
              onClick={removeKratong}
              className="-mr-7 bottom-1 xmd:mr-2 right-0 absolute w-9 h-9 text-sm bg-red-600 rounded-full text-white flex flex-col justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>

              {/* <span className="whitespace-nowrap -mt-1">ลบ</span> */}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => openModal("new")}
            className="px-7 py-2 to-[#FFDA00] bg-gradient-to-t  from-orange-500 text-amber-800 text-center shadow  rounded-full min-w-[150px]  whitespace-nowrap text-2xl font-semibold hover:brightness-105  transition-all duration-200 z-[60] hover:scale-110"
          >
            <span className="drop-shadow">สร้างกระทง</span>
          </button>
        )}

        {localItem ? (
          <AnimatePresence>
            {localItem.loy == false ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="w-36 h-36 sm:w-52 sm:h-52 relative cursor-pointer -translate-y-10 sm:-translate-y-14"
              >
                <motion.div
                  animate={WaterOneData.animate}
                  transition={WaterOneData.transition}
                  className="relative max-h-[150px]"
                >
                  <div className="w-full h-fit bg-white/80 backdrop-blur-sm rounded-xl !absolute top-0  translate-x-1/2 !z-[-99] shadow">
                    <p className="p-4 max-w-[250px] text-xs md:text-sm text-start">
                      {localItem.wish.substring(0, 150)} <br /> ...
                      <span className="px-1 font-semibold">
                        {localItem.name}
                      </span>
                    </p>
                  </div>

                  <Image
                    unoptimized
                    src={localItem.kratong.src}
                    alt={localItem.kratong.name}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                    className="w-full h-full translate-y-5"
                  />
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        ) : null}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative !z-[99]"
          onClose={() => setIsOpen(isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                  {!localItem && (
                    <div className="absolute right-4 z-10 top-4 ">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full border   flex items-center justify-center text-black outline-none bg-white"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        <span className="sr-only">close</span>
                      </button>
                    </div>
                  )}

                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900 dark:text-gray-900"
                  >
                    มาสร้างกระทงกัน!
                  </Dialog.Title>
                  <div className="flex flex-col">
                    <p className=" text-gray-500 border-b pb-2">
                      ร่วมกันลดขยะในแม่น้ำลำคลอง
                      การลอยกระทงออนไลน์ช่วยสืบสานประเพณีไทยได้โดยที่ไม่ต้องเพิ่มขยะให้กับธรรมชาติ
                    </p>

                    <div>
                      <label
                        htmlFor="first_name"
                        className="text-lg block mt-2 font-semibold text-gray-900 dark:text-gray-900"
                      >
                        ชื่อของคุณ (Name)
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        onChange={handleNameChange}
                        value={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        placeholder="สมรักษ์"
                        required
                      />
                      <p className="text-red-500 text-sm">
                        * โปรดระบุชื่อของคุณ เช่น ชื่อจริง (ไม่ระบุนามสกุล),
                        ชื่อเล่น หรือนามแฝง
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="wish"
                        className="text-lg block mt-2 font-semibold text-gray-900 dark:text-gray-900"
                      >
                        คำอธิษฐาน (Wish)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        onChange={handleWishChange}
                        value={wish}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        placeholder="ใส่คำอธิษฐาน"
                      ></textarea>
                      <p className="text-red-500 text-sm">
                        * กรุณาใช้ถ้อยคำที่สุภาพ
                      </p>
                    </div>

                    <div>
                      <p className="text-lg block mt-2  font-semibold text-gray-900 dark:text-gray-900">
                        เลือกกระทง
                      </p>

                      <div className="w-full h-[200px] flex justify-center items-start -mt-9 relative overflow-hidden mb-4">
                        {/* <div className="w-full scale-75 relative overflow-hidden rounded-full">
                        </div> */}
                        <Image
                          unoptimized
                          src={selected?.src}
                          alt="self_krathong"
                          width="0"
                          height="0"
                          sizes="100vw"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                          className="w-full h-full translate-y-5 scale-90"
                        />
                      </div>

                      <div className="flex items-center  overflow-x-scroll xmd:overflow-auto xmd:flex-wrap gap-2  ">
                        <RadioGroup
                          value={selected}
                          onChange={setSelected}
                          defaultValue={
                            localKratong ? localItem?.kratong : selected
                          }
                        >
                          <RadioGroup.Label className="sr-only">
                            Server size
                          </RadioGroup.Label>
                          <div className="flex items-center  overflow-x-scroll xmd:overflow-auto xmd:flex-wrap gap-2 py-2 px-1">
                            {itemKratong.map((item, index) => (
                              <RadioGroup.Option
                                key={index}
                                value={item}
                                className={({ active, checked }) =>
                                  `${
                                    active
                                      ? " outline-none border-red-500 ring-1 ring-red-500"
                                      : ""
                                  }
                  ${
                    checked
                      ? "bg-white bg-opacity-75 text-white outline-none border-red-500 ring-1 ring-red-500"
                      : "bg-gray-50"
                  }
                  w-16 h-16 rounded-xl  border border-gray-300 shrink-0 relative cursor-pointer `
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <Image
                                      unoptimized
                                      src={item.src}
                                      alt={item.name}
                                      width="0"
                                      height="0"
                                      sizes="100vw"
                                      style={{
                                        objectFit: "contain",
                                        objectPosition: "center",
                                      }}
                                      className="w-full h-full scale-90 hover:scale-95 duration-200 transition-all"
                                    />
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-lg font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 min-w-[150px]"
                      onClick={handleSubmit}
                    >
                      สร้างกระทง
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Menu;
