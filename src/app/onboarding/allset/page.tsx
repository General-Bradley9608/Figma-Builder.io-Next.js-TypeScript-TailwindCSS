'use client';

import React from "react";
import { useTheme } from "next-themes";

export default function PlayCVComponent() {
  const { theme } = useTheme();

  return (
    <div className="flex overflow-hidden flex-col text-black bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex relative flex-col items-center justify-center px-20 pt-16 pb-64 w-full min-h-[1024px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex relative flex-col mb-0 max-w-full w-[715px] max-md:mb-2.5">
          <div className="flex gap-3 items-center self-center text-2xl font-bold whitespace-nowrap">
            <div className="flex shrink-0 self-stretch my-auto w-6 h-6 bg-indigo-50 rounded" />
            <div className="self-stretch my-auto dark:text-white">PlayCV</div>
          </div>      
          <img loading="lazy" src={theme === 'dark' ? "/13-1.png" : "/13.png"} alt="" className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.48] max-w-[649px] min-h-[20px] min-w-[20px]" />
          <div className="flex relative flex-col mt-8 w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="z-0 self-center text-4xl font-bold text-center dark:text-white">
              You're all set !
            </h1>
            <p className="z-0 self-center mt-8 text-2xl leading-8 text-center max-md:max-w-full dark:text-white">
              You're ready to shine! 🌟 Start practicing with our AI-powered
              interview coach and take your skills to the next level.
            </p>
            <div className="flex z-0 gap-4 justify-center items-start self-center mt-8 max-w-full text-base font-semibold text-white dark:text-blue-500 w-[191px]">
              <button className="gap-2 self-stretch px-5 py-4 bg-indigo-600 dark:bg-white rounded-lg min-h-[48px] w-[191px]">
                Let's start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
