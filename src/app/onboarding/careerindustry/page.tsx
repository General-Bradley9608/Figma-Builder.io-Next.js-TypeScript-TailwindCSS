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
import DecorateButton from "../_components/DecorateButton/DecorateButton";

export default function IndustryForm() {
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const { user, fetchMe } = useAuth();

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
      fetchMe();
      router.push("/onboarding/careerrole");
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
      decorateChildren={
        <DecorateButton
          icon="👀"
          name="Ooolala"
          className="-top-12 -right-4 -rotate-[0.18rad] md:-top-6 md:-right-32 transition-all"
        />
      }
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
  );
}
