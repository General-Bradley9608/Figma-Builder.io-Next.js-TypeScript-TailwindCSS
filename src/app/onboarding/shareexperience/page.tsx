"use client";

import React, { useState } from "react";
import UploadArea from "@/components/onboarding/UploadArea";
import Header from "../_components/Header/Header";
import FooterImage from "../_components/Footer/FooterImage";
import { useTheme } from "next-themes";

interface UploadExperienceProps {
  onContinue: () => void;
  onSkip: () => void;
  onBack: () => void;
}

const UploadExperience: React.FC<UploadExperienceProps> = ({
  onContinue,
  onSkip,
  onBack,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { theme } = useTheme();

  const handleFileUpload = (file: File) => {
    if (file.size <= 25 * 1024 * 1024) {
      // 25MB in bytes
      setUploadedFile(file);
    } else {
      alert("File size exceeds 25MB limit");
    }
  };

  const handleClick = () => {
    window.location.href = "/onboarding/interviewchallenge";
  };

  const handleBackClick = () => {
    window.location.href = "/onboarding/careerpath";
  }

  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <Header
          title="Share your experience"
          subtitle="Tell us about your background to tailor your practice sessions"
          onClick={handleBackClick}
        />
        <section className="flex flex-col items-center justify-center mt-28 max-w-full w-[908px] max-md:mt-10">
          <h2 className="self-stretch text-4xl font-bold text-center text-black dark:text-white max-md:max-w-full">
            Upload your CV
          </h2>
          <UploadArea
            onFileUpload={handleFileUpload}
            uploadedFile={uploadedFile}
          />
          <div className="flex gap-4 items-start mt-12 text-base font-semibold max-md:mt-10">
            <button
              onClick={handleClick}
              className="gap-2 self-stretch px-5 py-4 text-white dark:text-blue-500 whitespace-nowrap bg-indigo-600 dark:bg-white rounded-lg min-h-[48px]"
            >
              Continue
            </button>
            <button
              onClick={handleClick}
              className="gap-2 self-stretch px-5 py-4 text-black dark:text-white rounded-lg bg-neutral-100 dark:bg-[#9FA0F5] min-h-[48px]"
            >
              Skip for now
            </button>
          </div>
        </section>
        {theme === "dark" ? (
          <FooterImage path="/04-1.png" alt="" />
        ) : (
          <FooterImage path="/04.png" alt="" />
        )}
      </div>
    </main>
  );
};

export default UploadExperience;
