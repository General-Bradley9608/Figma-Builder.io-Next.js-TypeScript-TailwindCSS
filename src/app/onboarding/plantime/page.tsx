"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Header from "@/components/onboarding/Header";
import TrainingTimePicker from "@/components/onboarding/TrainingTimePicker";
import InterviewTimePicker from "@/components/onboarding/InterviewTimePicker";
import FooterImage from "@/components/onboarding/FooterImage";

interface TimeDetails {
  dedicatedTime: boolean;
  interviewTime: boolean;
}

const DecorateButton = ({icon, name}: {icon: string, name: string}) => {
  return (
    <div className="flex relative flex-col items-end w-full max-w-[1019px] max-md:max-w-full">
      <button className="flex z-10 gap-2 justify-end items-end px-5 py-4 mt-40 mr-32 text-base font-medium bg-white bg-opacity-10 min-h-12 rotate-[-0.17948938805876508rad] border border-blue-700 rounded-[32px] max-md:mt-10 max-md:mr-2.5">
        <span className="self-stretch my-auto text-white">{icon}</span>
        <span className="self-stretch my-auto leading-6 text-black">
          {name}
        </span>
      </button>
    </div>
  );
};

export default function PracticeTimePlanner() {
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
    <main className="flex overflow-hidden flex-col bg-white">
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
                <DecorateButton icon="💫" name="Just Magic!" />
              );
            } else if (timeDetails.interviewTime === true) {
              return (
                <DecorateButton icon="💪" name="Power Move!" />
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
                    <h2 className="self-stretch text-4xl text-center text-black max-md:max-w-full">
                      I can dedicate...
                    </h2>
                    <TrainingTimePicker />
                  </div>
                );
              } else if (timeDetails.interviewTime === true) {
                return (
                  <div className="flex flex-col items-center justify-center max-w-full font-bold w-[726px]">
                    <h2 className="self-stretch text-4xl text-center text-black max-md:max-w-full">
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
              className="self-center px-5 py-4 mt-8 text-base font-semibold text-white whitespace-nowrap bg-indigo-600 rounded-lg min-h-[48px]"
            >
              Continue
            </button>
          </form>
        </div>
        <FooterImage path="/07.png" alt="" />
      </div>
    </main>
  );
}
