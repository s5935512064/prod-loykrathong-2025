"use client";
import type { NextPage } from "next";
import React, { FC, useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WaterOneData } from "@/map/animations";
import SelfKratongPopup from "../SelfKratongPopup";

interface Props {
  sample: any;
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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface KratongMoving {
  data: any;
  initialX?: number;
  speed?: number;
  lane: string;
}

export const MovingKratong: FC<KratongMoving> = ({
  initialX = 0,
  data,
  lane,
}): JSX.Element => {
  let xPosition = getRndInteger(0, 250);
  let yPosition = getRndInteger(-10, 10);
  const ref = useRef(null);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          x: [-xPosition, 2999],
          y: [yPosition],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          x: {
            duration: 150,
            ease: "linear",
          },
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="absolute left-1/3"
      >
        <motion.div
          animate={WaterOneData.animate}
          transition={WaterOneData.transition}
          className="relative"
        >
          <SelfKratongPopup lane={lane} info={data} />
        </motion.div>
      </motion.div>
    </>
  );
};

export const TopLaneSelf: FC<Props> = ({ sample }): JSX.Element => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratong
          key={`lane-t-${item.name}`}
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

export const MidLaneSelf: FC<Props> = ({ sample }): JSX.Element => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratong
          key={`lane-m-${item.name}`}
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
    if (sample != undefined) addKratong(sample, 8989);
    // sample.map((item: any, index: any) => {
    // });
  }, [sample]);

  return <>{temp}</>;
};

export const BotLaneSelf: FC<Props> = ({ sample }): JSX.Element => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratong
          key={`lane-b-${item.name}`}
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
