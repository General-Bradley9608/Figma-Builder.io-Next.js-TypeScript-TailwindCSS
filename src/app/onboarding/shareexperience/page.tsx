"use client";

import React, { useState } from "react";
import UploadArea from "@/components/onboarding/UploadArea";
import Header from "@/components/onboarding/Header";
import FooterImage from "@/components/onboarding/FooterImage";

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

  const handleFileUpload = (file: File) => {
    if (file.size <= 25 * 1024 * 1024) {
      // 25MB in bytes
      setUploadedFile(file);
    } else {
      alert("File size exceeds 25MB limit");
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <main className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <Header
          title="Share your experience"
          subtitle="Tell us about your background to tailor your practice sessions"
        />
        <section className="flex flex-col items-center justify-center mt-44 max-w-full w-[908px] max-md:mt-10">
          <h2 className="self-stretch text-4xl font-bold text-center text-black max-md:max-w-full">
            Upload your CV
          </h2>
          <UploadArea
            onFileUpload={handleFileUpload}
            uploadedFile={uploadedFile}
          />
          <div className="flex gap-4 items-start mt-12 text-base font-semibold max-md:mt-10">
            <button
              onClick={onContinue}
              className="gap-2 self-stretch px-5 py-4 text-white whitespace-nowrap bg-indigo-600 rounded-lg min-h-[48px]"
            >
              Continue
            </button>
            <button
              onClick={onSkip}
              className="gap-2 self-stretch px-5 py-4 text-black rounded-lg bg-neutral-100 min-h-[48px]"
            >
              Skip for now
            </button>
          </div>
        </section>
        <FooterImage path="/04.png" alt="" />
      </main>
    </div>
  );
};

export default UploadExperience;
