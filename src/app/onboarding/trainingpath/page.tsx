'use client';

import React from "react";
import Header from "@/components/onboarding/Header";
import TrainingOption from "@/components/onboarding/TrainingOption";
import FooterImage from "@/components/onboarding/FooterImage";
import { useTheme } from "next-themes";

interface TrainingPathProps {}

export default function TrainingPath({}: TrainingPathProps) {
  const { theme } = useTheme();

  const trainingOptions = [
    {
      title: "Structured Program",
      description:
        "Get a daily practice schedule with a personalized plan and calendar.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2134b8003f4be0dba69f7e77d299942c97378b02852eb43a51ec72d1a3c50864?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b",
      imageAlt: "Structured Program illustration",
      defaultStyle: "bg-zinc-300 text-black dark:bg-[#9FA0F5] dark:text-white",
      hoverStyle: "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white",
    },
    {
      title: "Freestyle Practice",
      description:
        "Practice interviews anytime you want, whenever it suits you.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd42e1f75462bcd4cf77b44a074fdbc6c809a1b092660571907f6415b6dabc8c?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b",
      imageAlt: "Freestyle Practice illustration",
      defaultStyle: "bg-zinc-300 text-black dark:bg-[#9FA0F5] dark:text-white",
      hoverStyle: "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white",
    },
  ];

  const handleBackClick = () => {
    window.location.href = "/onboarding/interviewchallenge";
  }

  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex relative flex-col items-center justify-center py-14 w-full max-md:max-w-full">
        <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
          <Header
            title="Choose your training path"
            subtitle="Pick the training method that works best for you."
            onClick={handleBackClick}
          />
          <div className="flex flex-col mt-52 max-w-full w-[908px] max-md:mt-10">
            <h1 className="text-6xl font-bold text-center text-black dark:text-white max-md:max-w-full max-md:text-4xl">
              I want to go with a...
            </h1>
            <div className="flex flex-wrap gap-10 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
              {trainingOptions.map((option, index) => (
                <TrainingOption key={index} {...option} />
              ))}
            </div>
          </div>
        </div>
        {theme === "dark" ? (
          <FooterImage path="/06-1.png" alt="" />
        ) : (
          <FooterImage path="/06.png" alt="" />
        )}
      </div>
    </main>
  );
};
