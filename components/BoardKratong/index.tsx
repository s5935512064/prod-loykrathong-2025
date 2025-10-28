"use client";

import React, { useEffect, useState, useRef, FC } from "react";
import { motion } from "framer-motion";
import { WaterOneData } from "@/map/animations";
import dynamic from "next/dynamic";
const KrathongPopup = dynamic(() => import("@/components/KrathongPopup"), {
  ssr: false,
});

interface Props {
  sample: any;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function getRndInteger(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndDecimal(min: number, max: number) {
  var precision = 100;
  min = Math.ceil(min);
  max = Math.floor(max);
  return (
    Math.floor(
      Math.random() * (max * precision - min * precision) + min * precision
    ) /
    (1 * precision)
  );
}

interface KratongMoving {
  data: any;
  initialX?: number;
  speed?: number;
  lane: string;
}

export const MovingKratongSpecial: FC<KratongMoving> = ({
  initialX = 0,
  data,
  lane,
}): JSX.Element => {
  let xPosition = getRndInteger(0, 250);
  let yPosition = getRndInteger(-10, 50);
  let speed = getRndInteger(200, 350);
  const ref = useRef(null);

  return (
    <>
      <motion.div
        ref={ref}
        animate={{
          x: [-xPosition, 2999],
          y: [yPosition],
        }}
        transition={{
          x: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        className="absolute left-[-100px]"
      >
        <motion.div
          animate={WaterOneData.animate}
          transition={WaterOneData.transition}
          className="relative"
        >
          <KrathongPopup lane={lane} info={data} />
        </motion.div>
      </motion.div>
    </>
  );
};

export const TopLaneSpecial: FC<Props> = ({ sample }): JSX.Element => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratongSpecial
          key={`lane-t-special-${item.name}`}
          data={item}
          initialX={index * 600}
          lane="t"
        />
      )
    );
  };

  useEffect(() => {
    sample.map((item: any, index: any) => {
      if (item != undefined) addKratong(item, index);
    });
  }, [sample]);

  // const generateKratong = useMemo(() => {
  //   sample.map((item: any, index: any) => {
  //     if (item != undefined) addKratong(item, index);
  //   });
  //   return <>{temp}</>;
  // }, [sample]);

  return <>{temp}</>;
};

export const MidLaneSpecial: FC<Props> = ({ sample }): JSX.Element => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratongSpecial
          key={`lane-m-special-${item.name}`}
          data={item}
          initialX={index * 600}
          lane="m"
        />
      )
    );
  };

  // const generateKratong = useMemo(() => {
  //   sample.map((item: any, index: any) => {
  //     if (item != undefined) addKratong(item, index);
  //   });
  //   return <>{temp}</>;
  // }, [sample]);

  useEffect(() => {
    sample.map((item: any, index: any) => {
      if (item != undefined) addKratong(item, index);
    });
  }, [sample]);

  return <>{temp}</>;
};

export const BotLaneSpecial: FC<Props> = ({ sample }): JSX.Element => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratongSpecial
          key={`lane-b-special-${item.name}`}
          data={item}
          initialX={index * 600}
          lane="b"
        />
      )
    );
  };

  // const generateKratong = useMemo(() => {
  //   sample.map((item: any, index: any) => {
  //     if (item != undefined) addKratong(item, index);
  //   });
  //   return <>{temp}</>;
  // }, [sample]);

  useEffect(() => {
    sample.map((item: any, index: any) => {
      if (item != undefined) addKratong(item, index);
    });
  }, [sample]);

  return <>{temp}</>;
};
