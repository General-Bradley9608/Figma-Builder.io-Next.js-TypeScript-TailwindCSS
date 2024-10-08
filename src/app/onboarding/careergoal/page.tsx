"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";

import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { goalOptions } from "@/lib/options";
import { useAuth } from "@/providers/Auth";
import DecorateButton from "../_components/DecorateButton/DecorateButton";

export default function GoalForm() {
  const router = useRouter();
  const { theme } = useTheme();
  const { user, fetchMe } = useAuth();
  const [selectedGoal, setSelectedGoal] = useState("");

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ goal: string }>({
    defaultValues: {
      goal: "",
    },
  });

  const handleBackClick = () => {
    router.push("/onboarding/careerrole");
  };

  const onSubmit = useCallback(async () => {
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
              goal: selectedGoal,
            },
          }),
        }
      );
      if (req.ok) {
        fetchMe();
        router.push("/onboarding/shareexperience");
      } else {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }, [selectedGoal, router]);

  return (
    <OnboardingTemplate
      headerTitle="Define your career path"
      headerSubTitle="Share your career aspirations with us"
      bodyTitle="My career goal is to..."
      bodyTitleClassName=""
      handleBackClick={handleBackClick}
      decorateChildren={
        <DecorateButton
          icon="🚀"
          name="Boom! You got this!"
          className="-top-12 -right-0 rotate-[0.18rad] md:-top-20 md:-right-10 transition-all"
        />
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-full font-bold"
      >
        <div className="flex flex-wrap justify-center w-full">
          <Dropdown
            name="goal"
            options={goalOptions}
            selectedOption={selectedGoal}
            onSelect={(option) => setSelectedGoal(option)}
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
