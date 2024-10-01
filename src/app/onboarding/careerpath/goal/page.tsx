"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FieldValues } from "react-hook-form";

import { OnboardingTemplate } from "../../_components/OnboardingTemplate";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { goalOptions } from "@/lib/options";

export default function GoalForm() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleBackClick = () => {
    router.push("/onboarding/chooseexperience");
  };

  const handleSubmit = (data: FieldValues) => {
    console.log(data.goal);
    // router.push("/onboarding/careerpath/role");
  };

  return (
    <OnboardingTemplate
      headerTitle="Define your career path"
      headerSubTitle="Share your career aspirations with us"
      bodyTitle="My career goal is to..."
      bodyTitleClassName=""
      handleBackClick={handleBackClick}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-full font-bold"
      >
        <div className="flex flex-wrap justify-center w-full">
          <Dropdown
            name="goal"
            options={goalOptions}
            placeholder="Select or write a goal"
          />
          <Button
            type="submit"
            variant={theme === "dark" ? "secondary" : "default"}
          >
            Continue
          </Button>
        </div>
      </form>
    </OnboardingTemplate>
  );
}
