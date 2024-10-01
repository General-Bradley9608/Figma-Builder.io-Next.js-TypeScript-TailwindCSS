"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Header from "../_components/Header/Header";
import TrainingTimePicker from "@/components/onboarding/TrainingTimePicker";
import InterviewTimePicker from "@/components/onboarding/InterviewTimePicker";
import FooterImage from "../_components/Footer/FooterImage";
import DecorateButton from "@/components/onboarding/DecorateButton";
import { useTheme } from "next-themes";

interface TimeDetails {
  dedicatedTime: boolean;
  interviewTime: boolean;
}

export default function PracticeTimePlanner() {
  const { theme } = useTheme();

  const [timeDetails, setTimeDetails] = useState<TimeDetails>({
    dedicatedTime: true,
    interviewTime: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (timeDetails.dedicatedTime === true) {
      setTimeDetails({
        ...timeDetails,
        dedicatedTime: false,
        interviewTime: true,
      });
    }
    else if (timeDetails.dedicatedTime === false && timeDetails.interviewTime === true) {
      window.location.href = "/onboarding/allset";
    }
  };

  const handleBackClick = () => {
    if (timeDetails.dedicatedTime === false) {
      setTimeDetails({
        ...timeDetails,
        dedicatedTime: true,
        interviewTime: false,
      });
    }
    else if (timeDetails.dedicatedTime === true && timeDetails.interviewTime === false) {
      window.location.href = "/onboarding/trainingpath";
    }
  }

  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-[]:h-screen">
      <div className="flex relative flex-col items-center justify-center py-14 w-full max-md:max-w-full">
        <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
          <Header
            title="Plan your practice time"
            subtitle="Pick the training time that works for you"
            onClick={handleBackClick}
          />
          {(() => {
            if (timeDetails.dedicatedTime === true) {
              return (
                <DecorateButton icon="💫" name="Just Magic!" direction="right"  position="end" />
              );
            } else if (timeDetails.interviewTime === true) {
              return (
                <DecorateButton icon="💪" name="Power Move!" direction="right"  position="end" />
              );
            }
          })()}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-full font-bold "
          >
            {(() => {
              if (timeDetails.dedicatedTime === true) {
                return (
                  <div className="flex flex-col items-center justify-center max-w-full font-bold w-[726px]">
                    <h2 className="self-stretch text-4xl text-center text-black dark:text-white max-md:max-w-full">
                      I can dedicate...
                    </h2>
                    <TrainingTimePicker />
                  </div>
                );
              } else if (timeDetails.interviewTime === true) {
                return (
                  <div className="flex flex-col items-center justify-center max-w-full font-bold w-[726px]">
                    <h2 className="self-stretch text-4xl text-center text-black dark:text-white max-md:max-w-full">
                      I have a job interview coming up on...
                    </h2>
                    <InterviewTimePicker />
                  </div>
                );
              }
            })()}
            <button
              type="submit"
              onClick={handleClick}
              className="self-center px-5 py-4 mt-8 text-base font-semibold text-white dark:text-blue-500 whitespace-nowrap bg-indigo-600 dark:bg-white rounded-lg min-h-[48px]"
            >
              Continue
            </button>
          </form>
        </div>
        {theme === "dark" ? (
          <FooterImage path="/07-1.png" alt="" />
        ) : (
          <FooterImage path="/07.png" alt="" />
        )}
      </div>
    </main>
  );
}
