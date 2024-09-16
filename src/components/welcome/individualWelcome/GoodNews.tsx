import React from "react";

export default function GoodNews() {
  return (
    <div className="flex overflow-hidden relative items-center px-4 py-3.5 text-white bg-indigo-600 rounded-3xl min-h-[165px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/930058e2453bec19138fc9c1ce37380cc08a9ff7efb9016a8b81b7f51e5335a4?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b"
        className="object-contain absolute bottom-0 z-0 self-start rounded-2xl aspect-[3.39] h-[166px] left-[0px] min-w-[240px] w-[560px] max-md:max-w-full opacity-60"
      />
      <div className="flex z-0 flex-col self-stretch my-auto text-lg min-w-[240px] w-[307px]">
        <div className="font-bold leading-none">
          Good news! <span className="">🎁</span>
        </div>
        <div className="mt-2 leading-6">
          As a member of this esteemed institution, you’ve unlocked a 10%
          discount on all our subscriptions.
        </div>
      </div>
      <div className="z-0 self-stretch my-auto text-9xl font-bold max-md:text-4xl">
        <span className="font-extrabold tracking-tighter">10</span>
        <span className="text-5xl">%</span>
      </div>
    </div>
  );
}
