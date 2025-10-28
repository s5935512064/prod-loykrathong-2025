"use client";
import React, { FC, useEffect, useState, Fragment } from "react";
import { TopLane, MidLane, BotLane } from "@/components/KratongItem";
import { motion } from "framer-motion";
import { MidLaneSpecial, TopLaneSpecial } from "@/components/BoardKratong";
import { MidLaneSelf } from "@/components/SelfKratong";

interface Props {
  data: any;
  onloy: boolean;
  selfKratong?: LocalKratongItem;
}

function shuffle(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function chunk(arr: Array<any>, cCount: number) {
  const len = Math.ceil(arr.length / cCount);
  let chunks = [],
    i = 0;

  const n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}

const managerKrathong = [
  [
    {
      id: 9999,
      name: "..",
      wish: "ขอให้ข้าพเจ้ามีโชคด้านการงาน การเงิน สุขภาพ ทำมาค้าขึ้น เป็นที่รักของคนรอบตัว ปังทุกเรื่องด้วยเถิด",
      profile: "/loykrathong/assets/profile/k_apichai.webp",
      krathong_type: 1,
    },
  ],
  [
    {
      id: 8888,
      name: "..",
      wish: "ขอให้ข้าพเจ้ามีความสุข ปราศจากความทุกข์และภยันตรายใด ๆ สุขภาพแข็งแรง เจริญรุ่งเรืองยิ่งๆขึ้นไป",
      profile: "/loykrathong/assets/profile/k_suebpong.webp",
      krathong_type: 2,
    },
  ],
  [
    {
      id: 7777,
      name: "..",
      wish: "ขอให้ข้าพเจ้าจงประสบความสำเร็จทุกประการ ข้ามผ่านทุกปัญหา ปังๆ เฮงๆ",
      profile: "/loykrathong/assets/profile/k_chonpreeya.webp",
      krathong_type: 3,
    },
  ],
];

const Lake: FC<Props> = ({ data, onloy, selfKratong }): JSX.Element => {
  const [lanes, setLanes] = useState<Array<Array<any>>>([[], [], []]);
  const [boardKrathong, setBoardKrathong] = useState(false);
  const [boardKrathong2, setBoardKrathong2] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      const lanes = chunk(data, 3);
      setLanes(lanes);
    }
  }, [data]);

  shuffle(data);

  useEffect(() => {
    setTimeout(() => setBoardKrathong(true), 5000);
    setTimeout(() => setBoardKrathong2(true), 20000);
  }, []);

  return (
    <>
      <div className=" h-full flex flex-col relative ">
        <motion.div
          id="lane-t"
          className=" h-1/4 flex flex-row items-center   relative  -translate-y-5 "
        >
          <TopLane sample={lanes[0]} />
          {boardKrathong ? (
            <TopLaneSpecial sample={managerKrathong[2]} />
          ) : null}
        </motion.div>

        <motion.div
          id="lane-m"
          className="  h-1/4 flex flex-row items-center   relative "
        >
          <MidLane sample={lanes[1]} />
          {onloy && selfKratong ? <MidLaneSelf sample={selfKratong} /> : null}
          <MidLaneSpecial sample={managerKrathong[0]} />
          {boardKrathong2 ? (
            <MidLaneSpecial sample={managerKrathong[1]} />
          ) : null}
        </motion.div>
        <motion.div
          id="lane-b"
          className="  h-2/3 flex-row items-center absolute bottom-[0px] flex justify-end "
        >
          <BotLane sample={lanes[2]} />
        </motion.div>
        <motion.div className=" h-1/2 flex  items-center absolute bottom-0 "></motion.div>
      </div>
    </>
  );
};

export default Lake;
