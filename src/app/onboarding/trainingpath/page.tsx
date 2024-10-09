"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import Card from "@/components/Card";
import { useAuth } from "@/providers/Auth";
import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import { rest } from "../../../lib/rest";

export default function TrainingPath() {
  const { theme } = useTheme();
  const router = useRouter();
  const { user, fetchMe } = useAuth();
  const [selected, setSelected] = useState<number>();

  const trainingOptions = [
    {
      title: "Structured Program",
      description:
        "Get a daily practice schedule with a personalized plan and calendar.",
      image: theme === "dark" ? "/12-1.svg" : "/12.svg",
      defaultStyle: "bg-accent text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle:
        "hover:bg-primary hover:text-primary-foreground dark:hover:bg-blue-600 dark:hover:text-white",
    },
    {
      title: "Freestyle Practice",
      description:
        "Practice interviews anytime you want, whenever it suits you.",
      image: theme === "dark" ? "/13-1.svg" : "/13.svg",
      defaultStyle: "bg-accent text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle:
        "hover:bg-primary hover:text-primary-foreground dark:hover:bg-blue-600 dark:hover:text-white",
    },
  ];

  const handleBackClick = () => {
    router.push("/onboarding/interviewchallenge");
  };

  const handleCardClick = async (title: string) => {
    try {
      let trainingType = "";
      if (title == "Structured Program") trainingType = "structured";
      else trainingType = "freestyle";

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
              trainingPlan: {
                trainingType: trainingType,
              },
            },
          }),
        }
      );

      if (req.ok) {
        fetchMe();
        if (title === "Structured Program") router.push("/onboarding/plantime");
        else router.push("/onboarding/interviewdate");
      } else {
        console.error("Failed to update user data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let trainingType = user?.onboarding?.trainingPlan?.trainingType!;
    if (trainingType === "structured") setSelected(0);
    if (trainingType === "freestyle") setSelected(1);
  }, [user]);

  return (
    <OnboardingTemplate
      headerTitle="Choose your training path"
      headerSubTitle="Pick the training method that works best for you."
      bodyTitle="I want to go with a..."
      bodyTitleClassName="text-4xl md:text-7xl"
      handleBackClick={handleBackClick}
    >
      <div className="flex flex-wrap gap-6 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {trainingOptions?.map((option, index) => (
          <Card
            key={index}
            isSelected={selected === index}
            {...option}
            handleClick={handleCardClick}
          />
        ))}
      </div>
    </OnboardingTemplate>
  );
}
