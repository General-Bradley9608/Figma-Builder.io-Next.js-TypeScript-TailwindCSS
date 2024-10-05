"use client";

import React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/Button";

export default function PlayCVComponent() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col text-accent-foreground bg-primary-foreground dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex gap-3 items-center self-center text-2xl pt-16 font-bold whitespace-nowrap">
        <div className="flex w-6 h-6 bg-indigo-50 rounded" />
        <div className=" dark:text-white">PlayCV</div>
      </div>
      <div className="flex flex-col items-center justify-center px-5 w-full">
        <div className="flex flex-col max-w-full w-[715px]">
          <img
            loading="lazy"
            src={theme === "dark" ? "/08-1.png" : "/08.png"}
            alt=""
            className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full aspect-[1.48] max-w-[649px] min-h-[20px] min-w-[20px]"
          />
          <div className="flex flex-col mt-8 w-full max-md:mt-10 max-md:max-w-full">
            <h1 className="z-0 self-center text-4xl font-bold text-center dark:text-white">
              You're all set !
            </h1>
            <p className="z-0 self-center mt-8 text-2xl leading-8 text-center max-md:max-w-full dark:text-white">
              You're ready to shine! 🌟 Start practicing with our AI-powered
              interview coach and take your skills to the next level.
            </p>
            <div className="flex flex-col items-center mt-8 mb-8 w-full">
              <Button
                type="button"
                variant={theme === "dark" ? "secondary" : "default"}
              >
                Let's start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
