"use client";
import dynamic from "next/dynamic";

const SocialShared = dynamic(() => import("@/components/SocialShared"), {
  ssr: false,
});
const Speaker = dynamic(() => import("@/components/Speaker"), { ssr: false });
const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="fixed inset-0 flex h-screen flex-col items-center overflow-hidden">
      <SocialShared />
      <Background />
      <Speaker />
    </div>
  );
}
