"use client"

import { Header } from "@/components/Header";
import { Posts } from "@/components/Post";

export default function Home() {
  return (
    <div className="w-4/6 p-3 bg-white h-5/6 rounded-3xl flex flex-row shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <Header/>
      <Posts/>
    </div>
  );
}
