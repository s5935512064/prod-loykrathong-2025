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
      name: "midlane-1",
      wish: "ขอให้ข้าพเจ้ามีโชคด้านการงาน การเงิน สุขภาพ ทำมาค้าขึ้น เป็นที่รักของคนรอบตัว ปังทุกเรื่องด้วยเถิด",
      profile: "/loykrathong/assets/2025/longtail-mirror.webp",
      krathong_type: 1,
    },
  ],
  [
    {
      id: 8888,
      name: "toplane-2",
      wish: "ขอให้ข้าพเจ้ามีความสุข ปราศจากความทุกข์และภยันตรายใด ๆ สุขภาพแข็งแรง เจริญรุ่งเรืองยิ่งๆขึ้นไป",
      profile: "/loykrathong/assets/2025/longtail-mirror.webp",
      krathong_type: 2,
    },
  ],
  [
    {
      id: 7777,
      name: "botlane-3",
      wish: "ขอให้ข้าพเจ้าจงประสบความสำเร็จทุกประการ ข้ามผ่านทุกปัญหา ปังๆ เฮงๆ",
      profile: "/loykrathong/assets/2025/longtail-mirror.webp",
      krathong_type: 3,
    },
  ],
];

const Lake: FC<Props> = ({ data, onloy, selfKratong }): JSX.Element => {
  const [lanes, setLanes] = useState<Array<Array<any>>>([[], [], []]);
  const [boardKrathong, setBoardKrathong] = useState(false);
  const [boardKrathong2, setBoardKrathong2] = useState(false);

  const [specialKey, setSpecialKey] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const lanes = chunk(data, 3);
      setLanes(lanes);
    }
  }, [data]);

  shuffle(data);

  useEffect(() => {
    // ความเร็วของ special Krathong (MovingKratongSpecial): speed = 10-50s, เฉลี่ย ~30s
    // เราจะใช้ timer ใกล้เคียง/นานกว่าการเดินทางของหนึ่งรอบ (เพื่อให้มี transition ที่เหมาะสมและไม่ชน/หายทันที)
    const SPECIAL_KRATHONG_MIN_SPEED = 10 * 1000; // ms
    const SPECIAL_KRATHONG_MAX_SPEED = 50 * 1000; // ms
    const SPECIAL_KRATHONG_AVG_SPEED = 30 * 1000; // ms

    // ให้ respawn รอบใหม่หลังเวลาประมาณ (random +/- 3s) เพื่อไม่ให้ sync ตรงกันเป๊ะ
    function getNextInterval(base: number) {
      const jitter = Math.floor(Math.random() * 6000) - 3000; // -3,000 ถึง +3,000 ms
      return base + jitter;
    }

    let timer1: NodeJS.Timeout | null = null;
    let timer2: NodeJS.Timeout | null = null;

    let stopped = false;

    function spawnBoardKrathong() {
      if (stopped) return;
      setBoardKrathong(false); // reset
      setTimeout(() => {
        setSpecialKey((prev) => prev + 1); // force remount
        setBoardKrathong(true);
      }, 100);

      timer1 = setTimeout(
        spawnBoardKrathong,
        getNextInterval(SPECIAL_KRATHONG_MAX_SPEED)
      );
    }

    function spawnBoardKrathong2() {
      if (stopped) return;
      setBoardKrathong2(false); // reset
      setTimeout(() => {
        setSpecialKey((prev) => prev + 1); // force remount
        setBoardKrathong2(true);
      }, 100);

      timer2 = setTimeout(
        spawnBoardKrathong2,
        getNextInterval(SPECIAL_KRATHONG_MAX_SPEED + 10000)
      ); // ให้นานกว่า lane แรก 10s
    }

    // เริ่มต้นครั้งแรก (delay ให้ special เคลื่อน/reappear ตาม animation speed โดยไม่ตรงกับกันพอดี)
    timer1 = setTimeout(
      spawnBoardKrathong,
      getNextInterval(SPECIAL_KRATHONG_MAX_SPEED)
    );
    timer2 = setTimeout(
      spawnBoardKrathong2,
      getNextInterval(SPECIAL_KRATHONG_MAX_SPEED + 10000)
    );

    return () => {
      stopped = true;
      timer1 && clearTimeout(timer1);
      timer2 && clearTimeout(timer2);
    };
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
          {/* <MidLaneSpecial sample={managerKrathong[0]} /> */}
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
