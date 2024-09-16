"use client";

import React, { useState } from "react";
import Header from "@/components/onboarding/Header";
import IndustryDropdown from "@/components/onboarding/IndustryDropdown";
import RoleDropdown from "@/components/onboarding/RoleDropdown";
import FooterImage from "@/components/onboarding/FooterImage";
import GoalDropdown from "@/components/onboarding/GoalDropdown";

interface CareerPathFormProps {
  onSubmit: (industry: string) => void;
}

interface CareerDetails {
  industry: boolean;
  role: boolean;
  goal: boolean;
}

export default function CareerPathForm({ onSubmit }: CareerPathFormProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const [careerDetails, setCareerDetails] = useState<CareerDetails>({
    industry: true,
    role: false,
    goal: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onSubmit(selectedIndustry);
  };

  const handleClick = () => {
    if (careerDetails.industry === true) {
      setCareerDetails({
        ...careerDetails,
        industry: false,
        role: true,
      });
    } 
    else if (careerDetails.role === true) {
      setCareerDetails({
        ...careerDetails,
        role: false,
        goal: true,
      });
    }
    else if (careerDetails.industry === false && careerDetails.role === false && careerDetails.goal === true) {
      window.location.href = "/onboarding/shareexperience";
    }
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <Header title="Define your career path" subtitle="Share your career aspirations with us" />
        <section className="flex flex-col items-center justify-center mt-44 max-w-full w-[908px] max-md:mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-full font-bold w-[920px]"
          >
            {(() => {
              if (careerDetails.industry === true) {
                return (
                  <IndustryDropdown
                    selectedIndustry={selectedIndustry}
                    setSelectedIndustry={setSelectedIndustry}
                  />
                );
              } else if (careerDetails.role === true) {
                return (
                  <RoleDropdown
                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}
                  />
                );
              } else if (careerDetails.goal === true) {
                return (
                  <GoalDropdown
                    selectedGoal={selectedGoal}
                    setSelectedGoal={setSelectedGoal}
                  />
                );
              }
            })()}
            <button
              type="submit"
              onClick={handleClick}
              className="gap-2 self-center px-5 py-4 mt-8 text-base font-semibold text-white whitespace-nowrap bg-indigo-600 rounded-lg min-h-[48px]"
            >
              Continue
            </button>
          </form>
        </section>
        <FooterImage path="/03.png" alt="" />
      </div>
    </main>
  );
};
