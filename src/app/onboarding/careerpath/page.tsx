"use client";

import React, { useState } from "react";
import Header from "../_components/Header";
import IndustryDropdown from "@/components/onboarding/IndustryDropdown";
import RoleDropdown from "@/components/onboarding/RoleDropdown";
import FooterImage from "../_components/FooterImage";
import GoalDropdown from "@/components/onboarding/GoalDropdown";
import DecorateButton from "@/components/onboarding/DecorateButton";
import { useTheme } from "next-themes";

interface CareerDetails {
  industry: boolean;
  role: boolean;
  goal: boolean;
}

export default function CareerPathForm() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const { theme } = useTheme();

  const [careerDetails, setCareerDetails] = useState<CareerDetails>({
    industry: true,
    role: false,
    goal: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (careerDetails.industry === true) {
      setCareerDetails({
        ...careerDetails,
        industry: false,
        role: true,
      });
    } else if (careerDetails.role === true) {
      setCareerDetails({
        ...careerDetails,
        role: false,
        goal: true,
      });
    } else if (
      careerDetails.industry === false &&
      careerDetails.role === false &&
      careerDetails.goal === true
    ) {
      window.location.href = "/onboarding/shareexperience";
    }
  };

  const handleBackClick = () => {
    if (careerDetails.goal === true) {
      setCareerDetails({
        ...careerDetails,
        goal: false,
        role: true,
      });
    } else if (careerDetails.role === true) {
      setCareerDetails({
        ...careerDetails,
        role: false,
        industry: true,
      });
    } else if (
      careerDetails.industry === true &&
      careerDetails.role === false &&
      careerDetails.goal === false
    ) {
      window.location.href = "/onboarding/chooseexperience";
    }
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <Header
          title="Define your career path"
          subtitle="Share your career aspirations with us"
          onClick={handleBackClick}
        />
        {(() => {
          if (careerDetails.industry === true) {
            return <DecorateButton icon="👀" name="Ooolala" direction="right" position="end" />;
          } else if (careerDetails.role === true) {
            return <DecorateButton icon="🔥" name="Whoa, You're on Fire!" direction="right" position="start" />;
          } else if (careerDetails.goal === true) {
            return <DecorateButton icon="🚀" name="Boom! You got this!" direction="left" position="end" />;
          }
        })()}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-full font-bold"
        >
          {(() => {
            if (careerDetails.industry === true) {
              return (
                <IndustryDropdown
                  value={selectedIndustry}
                  onChange={setSelectedIndustry}
                />
              );
            } else if (careerDetails.role === true) {
              return (
                <RoleDropdown value={selectedRole} onChange={setSelectedRole} />
              );
            } else if (careerDetails.goal === true) {
              return (
                <GoalDropdown value={selectedGoal} onChange={setSelectedGoal} />
              );
            }
          })()}
          <button
            type="submit"
            onClick={handleClick}
            className="gap-2 self-center px-5 py-4 mt-8 text-base font-semibold text-white dark:text-blue-500 whitespace-nowrap bg-indigo-600 dark:bg-white rounded-lg min-h-[48px]"
          >
            Continue
          </button>
        </form>
        {theme === "dark" ? (
          <FooterImage path="/03-1.png" alt="" />
        ) : (
          <FooterImage path="/03.png" alt="" />
        )}
      </div>
    </main>
  );
}
