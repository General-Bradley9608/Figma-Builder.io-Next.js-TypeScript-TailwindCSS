"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FieldValues } from "react-hook-form";

import { OnboardingTemplate } from "../../_components/OnboardingTemplate";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { levelOptions, roleOptions } from "@/lib/options";

export default function RoleForm() {
  const router = useRouter();
  const { theme } = useTheme();

  const handleBackClick = () => {
    router.push("/onboarding/chooseexperience");
  };

  const handleSubmit = (data: FieldValues) => {
    console.log(data.role);
    // router.push("/onboarding/careerpath/role");
  };

  return (
    <OnboardingTemplate
      headerTitle="Define your career path"
      headerSubTitle="Share your career
      aspirations with us"
      bodyTitle="I'm targeting a role or position"
      bodyTitleClassName=""
      handleBackClick={handleBackClick}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-full font-bold"
      >
        <div className="flex flex-wrap justify-center w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-cols md:flex-row gap-2 max-md:max-w-full">
            <Dropdown
              name="level"
              options={levelOptions}
              placeholder="Senior"
              className="sm:max-w-[384px]"
            />
            <Dropdown
              name="role"
              options={roleOptions}
              placeholder="Select or write a role"
            />
          </div>
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
