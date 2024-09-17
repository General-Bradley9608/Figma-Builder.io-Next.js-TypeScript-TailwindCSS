'use client';

import React from "react";
import Header from "@/components/onboarding/Header";
import PersonaCard from "@/components/onboarding/PersonaCard";
import FooterImage from "@/components/onboarding/FooterImage";
import { useTheme } from "next-themes";

interface ChooseWorkProps {}

export default function ChooseWork({}: ChooseWorkProps) {
  const { theme } = useTheme();

  const personas = [
    {
      image: theme === 'dark' ? "/09-1.png" : "/09.png",
      title: "Student",
      description: "Currently still learning",
      defaultStyle: "bg-zinc-50 text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle: "hover:bg-[#465FF1] hover:text-white dark:hover:bg-[#465FF1] dark:hover:text-white",
    },
    {
      image: theme === 'dark' ? "/10-1.png" : "/10.png",
      title: "Working Professional",
      description: "Have a job but looking for opportunities",
      defaultStyle: "bg-zinc-50 text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle: "hover:bg-[#465FF1] hover:text-white dark:hover:bg-[#465FF1] dark:hover:text-white",
    },
    {      
      image: theme === 'dark' ? "/11-1.png" : "/11.png",
      title: "Currently Not Working",
      description: "Have a job but looking for opportunities",
      defaultStyle: "bg-zinc-50 text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle: "hover:bg-[#465FF1] hover:text-white dark:hover:bg-[#465FF1] dark:hover:text-white",
    },
  ];
  
  const handleBackClick = () => {
    window.location.href = "/onboarding";
  }

  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
          <Header
            title="Let's get to know you"
            subtitle="We need a few details to personalize your experience"
            onClick={handleBackClick}
          />
          <section className="flex flex-col items-center justify-center mt-28 max-w-full w-[908px] max-md:mt-10">
            <h1 className="text-7xl font-bold text-center text-black dark:text-white max-md:max-w-full max-md:text-4xl">
              I am a...
            </h1>
            <div className="flex flex-wrap gap-6 mt-12 w-full max-md:mt-10 max-md:max-w-full">
              {personas.map((persona, index) => (
                <PersonaCard key={index} {...persona} />
              ))}
            </div>
          </section>
        </div>
        {theme === "dark" ? (
          <FooterImage path="/02-1.png" alt="" />
        ) : (
          <FooterImage path="/02.png" alt="" />
        )}
      </div>
    </main>
  );
}
