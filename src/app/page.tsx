"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import FooterImage from "@/app/onboarding/_components/FooterImage";

export default function WelcomePage() {
  const handleClick = () => {
    window.location.href = "/onboarding/chooseexperience";
  };

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center self-center max-w-full w-[890px]">
          <header className="flex flex-col justify-center items-center w-full text-center text-black dark:text-white">
            <button
              onClick={onChangeTheme}
              className="flex items-end self-stretch my-auto text-sm font-semibold leading-none text-black dark:text-white whitespace-nowrap"
            >
              <div className="flex gap-2 justify-center items-center">
                <span className="self-stretch my-auto">ThemeChange</span>
              </div>
            </button>
            <h1 className="text-9xl font-bold leading-[142px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Welcome to PLAY.CV
            </h1>
            <p className="mt-6 text-base tracking-normal leading-6 w-[522px] max-md:max-w-full">
              Your AI-powered interview coach is here to help you crush your
              next job interview. Ready to kickstart your journey to success?
            </p>
          </header>
          <button
            onClick={handleClick}
            className="gap-2 px-5 py-4 mt-8 max-w-full text-base font-semibold text-white bg-indigo-600 dark:text-indigo-600 dark:bg-white rounded-lg min-h-[48px] w-[250px]"
          >
            Get Started
          </button>
        </div>
        {theme === "dark" ? (
          <FooterImage path="/01-1.png" alt="" />
        ) : (
          <FooterImage path="/01.png" alt="" />
        )}
      </div>
    </main>
  );
}
