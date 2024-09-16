import React from "react";
import VideoSection from "./VideoSection";
import ActionButtons from "./ActionButtons";

export default function OnboardingVideo() {
  return (
    <main className="flex flex-col items-center self-center max-w-full w-[968px]">
      <VideoSection />
      <ActionButtons />
    </main>
  );
};
