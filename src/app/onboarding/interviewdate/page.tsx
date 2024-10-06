"use client";

import { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { useAuth } from "@/providers/Auth";
import { dayOptions, monthOptions } from "@/lib/options";

// import DecorateButton from "@/components/onboarding/DecorateButton";

export default function PracticeTimePlanner() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const router = useRouter();

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ day: string; month: string }>({
    defaultValues: {
      day: "",
      month: "",
    },
  });

  const onSubmit = useCallback(async () => {
    try {
      const currentYear = new Date().getFullYear();
      const interviewDate = new Date(
        `${currentYear}-${selectedMonth}-${selectedDay}`
      );

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
              interviewDate: interviewDate,
            },
          }),
        }
      );
      if (req.ok) {
        router.push("/onboarding/allset");
      } else {
        console.error("Failed to update user data");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }, [selectedDay, selectedMonth, router]);

  const handleBackClick = () => {
    router.push("/onboarding/plantime");
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
              name="day"
              options={dayOptions}
              selectedOption={selectedDay}
              onSelect={(option) => setSelectedDay(option)}
              placeholder="dd"
              className="sm:max-w-[192px]"
            />
            <Dropdown
              name="month"
              options={monthOptions}
              selectedOption={selectedMonth}
              onSelect={(option) => setSelectedMonth(option)}
              placeholder="mm"
              className="sm:max-w-[192px]"
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
