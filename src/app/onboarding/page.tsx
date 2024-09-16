'use client';

import React from "react";
import FooterImage from "@/components/onboarding/FooterImage";

export default function WelcomePage() {
  const handleClick = () => {
    window.location.href = "/onboarding/chooseexperience";
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/917addc41ee8ffd8fce8fe2b1cbcfdea287c67ed8eb87c5a4509ba27ff607cdd?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center items-center self-center max-w-full w-[890px]">
          <header className="flex flex-col justify-center items-center w-full text-center text-black">
            <h1 className="text-9xl font-bold leading-[142px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Welcome to PLAY.CV
            </h1>
            <p className="mt-6 text-base tracking-normal leading-6 w-[522px] max-md:max-w-full">
              Your AI-powered interview coach is here to help you crush your
              next job interview. Ready to kickstart your journey to success?
            </p>
          </header>
          <button onClick={handleClick} className="gap-2 px-5 py-4 mt-8 max-w-full text-base font-semibold text-white bg-indigo-600 rounded-lg min-h-[48px] w-[250px]">
            Get Started
          </button>
        </div>
        <FooterImage path="/01.png" alt="" />
      </div>
    </main>
  );
}
