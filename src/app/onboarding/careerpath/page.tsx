"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";

import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { industryOptions } from "@/lib/options";
import { useAuth } from "@/providers/Auth";

export default function IndustryForm() {
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const { user } = useAuth();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ industry: string }>({
    defaultValues: {
      industry: "",
    },
  });

  const handleBackClick = () => {
    router.push("/onboarding/chooseexperience");
  };

  const onSubmit = useCallback(async () => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/${user?.id}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          onboarding: {
            industry: selectedIndustry,
          },
        }),
      }
    );
    if (req.ok) {
      router.push("/onboarding/careerpath/role");
    } else {
      console.error("Failed to update user data");
    }
  }, [selectedIndustry, router]);

  return (
    <OnboardingTemplate
      headerTitle="Define your career path"
      headerSubTitle="Share your career aspirations with us"
      bodyTitle="I'm interested in..."
      bodyTitleClassName=""
      handleBackClick={handleBackClick}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-full font-bold"
      >
        <div className="flex flex-wrap justify-center w-full max-md:mt-10 max-md:max-w-full">
          <Dropdown
            name="industry"
            options={industryOptions}
            selectedOption={selectedIndustry}
            onSelect={(option) => setSelectedIndustry(option)}
            placeholder="Select or write an industry"
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
    // <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
    //   <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
    //     <Header
    //       title="Define your career path"
    //       subtitle="Share your career aspirations with us"
    //       onClick={handleBackClick}
    //     />
    //     {(() => {
    //       if (careerDetails.industry === true) {
    //         return <DecorateButton icon="👀" name="Ooolala" direction="right" position="end" />;
    //       } else if (careerDetails.role === true) {
    //         return <DecorateButton icon="🔥" name="Whoa, You're on Fire!" direction="right" position="start" />;
    //       } else if (careerDetails.goal === true) {
    //         return <DecorateButton icon="🚀" name="Boom! You got this!" direction="left" position="end" />;
    //       }
    //     })()}
    //     {(() => {
    //       if (careerDetails.industry === true) {
    //         return (
    //           // <IndustryDropdown
    //           <Dropdown
    //             placeholder="Select or write a goal"
    //             options={[
    //               "Become a team leader",
    //               "Master my technical skills",
    //               "Transition to a new industry",
    //               "Get promoted to a managerial position",
    //               "Start my own business",
    //               "Increase my earning potential",
    //               "Achieve work-life balance",
    //               "Expand my professional network",
    //             ]}
    //             // value={selectedIndustry}
    //             // onChange={setSelectedIndustry}
    //           />
    //         );
    //       } else if (careerDetails.role === true) {
    //         return (
    //           <div></div>
    //           // <Dropdown />
    //           // <RoleDropdown value={selectedRole} onChange={setSelectedRole} />
    //         );
    //       } else if (careerDetails.goal === true) {
    //         return (
    //           <div></div>
    //           // <Dropdown />
    //           // <GoalDropdown value={selectedGoal} onChange={setSelectedGoal} />
    //         );
    //       }
    //     })()}
    //     <button
    //       type="submit"
    //       onClick={handleClick}
    //       className="gap-2 self-center px-5 py-4 mt-8 text-base font-semibold text-white dark:text-blue-500 whitespace-nowrap bg-indigo-600 dark:bg-white rounded-lg min-h-[48px]"
    //     >
    //       Continue
    //     </button>
    //     {theme === "dark" ? (
    //       <FooterImage path="/03-1.png" alt="" />
    //     ) : (
    //       <FooterImage path="/03.png" alt="" />
    //     )}
    //   </div>
    // </main>
  );
}
