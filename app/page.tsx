"use client";
import dynamic from "next/dynamic";

const SocialShared = dynamic(() => import("@/components/SocialShared"), {
  ssr: false,
});
const Speaker = dynamic(() => import("@/components/Speaker"), { ssr: false });
const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});
import LoykraThongContent from "@/components/LoyKraThongContent";

export default function Home() {
  return (
    <div className="flex min-h-screen h-full flex-col items-center bg-[#222e4d] relative">
      <div className="hidden xmd:block">
        <SocialShared />
      </div>
      <Background />
      <Speaker />
      {/* <LoykraThongContent /> */}
    </div>
  );
}
