"use client";

import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { useAuth } from "@/providers/Auth";
import { hourOptions, minuteOptions, weekOptions } from "@/lib/options";

import DecorateButton from "@/components/onboarding/DecorateButton";

export default function PracticeTimePlanner() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("");

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ hour: string; minute: string; per: string }>({
    defaultValues: {
      hour: "",
      minute: "",
      per: "",
    },
  });

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
              trainingPlan: {
                hours: selectedHour,
                mins: selectedMinute,
                per: selectedWeek,
              },
            },
          }),
        }
      );
      if (req.ok) {
        router.push("/onboarding/plantime/interviewdate");
      } else {
        console.error("Failed to update user data");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }, [selectedHour, selectedMinute, selectedWeek, router]);

  const handleBackClick = () => {
    router.push("/onboarding/trainingpath");
  };

  return (
    <OnboardingTemplate
      headerTitle="Plan your practice time"
      headerSubTitle="Pick the training time that works for you"
      bodyTitle="I can dedicate..."
      bodyTitleClassName=""
      handleBackClick={handleBackClick}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-full font-bold"
      >
        <div className="flex flex-col justify-center w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col md:flex-row gap-2 max-md:max-w-full">
            <Dropdown
              name="hour"
              options={hourOptions}
              selectedOption={selectedHour}
              onSelect={(option) => setSelectedHour(option)}
              placeholder="00h"
              className="sm:max-w-[192px]"
            />
            <Dropdown
              name="minute"
              options={minuteOptions}
              selectedOption={selectedMinute}
              onSelect={(option) => setSelectedMinute(option)}
              placeholder="00m"
              className="sm:max-w-[192px]"
            />
            <Dropdown
              name="week"
              options={weekOptions}
              selectedOption={selectedWeek}
              onSelect={(option) => setSelectedWeek(option)}
              placeholder="per day"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              variant={theme === "dark" ? "secondary" : "default"}
            >
              Continue
            </Button>
          </div>
        </div>
      </form>
    </OnboardingTemplate>
  );
}
