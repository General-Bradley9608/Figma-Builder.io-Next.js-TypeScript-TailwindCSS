"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import { useAuth } from "@/providers/Auth";
import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import { rest } from "@/lib/rest";
import Card from "@/components/Card";

interface ChooseWorkProps {}

export default function ChooseWork({}: ChooseWorkProps) {
  const { theme } = useTheme();
  const router = useRouter();
  const { user, fetchMe } = useAuth();
  const [selected, setSelected] = useState<number>();

  const personas = [
    {
      image: theme === "dark" ? "/09-1.png" : "/09.png",
      title: "Student",
      description: "Currently still learning",
      defaultStyle: "bg-accent text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle:
        "hover:bg-primary hover:text-primary-foreground dark:hover:bg-blue-600 dark:hover:text-white",
    },
    {
      image: theme === "dark" ? "/10-1.png" : "/10.png",
      title: "Working Professional",
      description: "Have a job but looking for opportunities",
      defaultStyle: "bg-accent text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle:
        "hover:bg-primary hover:text-primary-foreground dark:hover:bg-blue-600 dark:hover:text-white",
    },
    {
      image: theme === "dark" ? "/11-1.png" : "/11.png",
      title: "Currently Not Working",
      description: "Have a job but looking for opportunities",
      defaultStyle: "bg-accent text-black dark:text-white dark:bg-[#8889F3]",
      hoverStyle:
        "hover:bg-primary hover:text-primary-foreground dark:hover:bg-blue-600 dark:hover:text-white",
    },
  ];

  const handleBackClick = () => {
    router.push("/onboarding");
  };

  const handleCardClick = async (title: string) => {
    let personaExperience = "";
    if (title === "Student") personaExperience = "student";
    else if (title === "Working Professional")
      personaExperience = "professional";
    else personaExperience = "noJob";
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
              persona: personaExperience,
            },
          }),
        }
      );
      if (req.ok) {
        fetchMe();
        router.push("/onboarding/careerindustry");
      } else console.error("Failed to update user data");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let persona = user?.onboarding?.persona!;
    if (persona === "student") setSelected(0);
    if (persona === "professional") setSelected(1);
    if (persona === "noJob") setSelected(2);
    console.log(user);
  }, [user]);

  return (
    <OnboardingTemplate
      headerTitle="Let's get to know you"
      headerSubTitle="We need a few details to personalize your experience."
      bodyTitle="I am a..."
      bodyTitleClassName="text-4xl md:text-7xl"
      handleBackClick={handleBackClick}
    >
      <div className="flex flex-wrap gap-6 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {personas.map((persona, index) => (
          <Card
            key={index}
            isSelected={selected === index}
            {...persona}
            handleClick={handleCardClick}
          />
        ))}
      </div>
    </OnboardingTemplate>
  );
}
