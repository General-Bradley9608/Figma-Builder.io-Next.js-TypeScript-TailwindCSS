"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import Card from "@/components/Card";
import { useAuth } from "@/providers/Auth";
import { OnboardingTemplate } from "../_components/OnboardingTemplate";

interface TrainingPathProps {}

export default function TrainingPath({}: TrainingPathProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const { user } = useAuth();

  const trainingOptions = [
    {
      title: "Structured Program",
      description:
        "Get a daily practice schedule with a personalized plan and calendar.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2134b8003f4be0dba69f7e77d299942c97378b02852eb43a51ec72d1a3c50864?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b",
      defaultStyle: "bg-zinc-300 text-black dark:bg-[#9FA0F5] dark:text-white",
      hoverStyle:
        "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white",
    },
    {
      title: "Freestyle Practice",
      description:
        "Practice interviews anytime you want, whenever it suits you.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd42e1f75462bcd4cf77b44a074fdbc6c809a1b092660571907f6415b6dabc8c?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b",
      defaultStyle: "bg-zinc-300 text-black dark:bg-[#9FA0F5] dark:text-white",
      hoverStyle:
        "hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white",
    },
  ];

  const handleBackClick = () => {
    router.push("/onboarding/interviewchallenge");
  };

  const handleCardClick = async (title: string) => {
    try {
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
                trainingType: title
              },
            },
          }),
        }
      );
      if (req.ok) {
        router.push("/onboarding/plantime");
      } else {
        console.error("Failed to update user data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <OnboardingTemplate
      headerTitle="Choose your training path"
      headerSubTitle="Pick the training method that works best for you."
      bodyTitle="I want to go with a..."
      bodyTitleClassName="text-4xl md:text-7xl"
      handleBackClick={handleBackClick}
    >
      <div className="flex flex-wrap gap-6 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {trainingOptions.map((option, index) => (
          <Card key={index} {...option} handleClick={handleCardClick} />
        ))}
      </div>
    </OnboardingTemplate>
  );
}
