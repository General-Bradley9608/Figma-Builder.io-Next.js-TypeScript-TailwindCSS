"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useForm } from "react-hook-form";

import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import { Dropdown } from "@/components/Dropdown";
import { Button } from "@/components/Button";
import { levelOptions, roleOptions } from "@/lib/options";
import { useAuth } from "@/providers/Auth";
import DecorateButton from "../_components/DecorateButton/DecorateButton";

export default function RoleForm() {
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const { user, fetchMe } = useAuth();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{ level: String; role: string }>({
    defaultValues: {
      level: "",
      role: "",
    },
  });

  const handleBackClick = () => {
    router.push("/onboarding/careerindustry");
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
              targetRole: {
                level: selectedLevel,
                role: selectedRole,
              },
            },
          }),
        }
      );
      if (req.ok) {
        fetchMe();
        router.push("/onboarding/careergoal");
      } else {
        console.error("Failed to update user data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }, [selectedLevel, selectedRole, router]);

  useEffect(() => {
    let level = user?.onboarding?.targetRole?.level!;
    let role = user?.onboarding?.targetRole?.role!;
    if (level && role) {
      setSelectedLevel(level);
      setSelectedRole(role);
    } else {
      setSelectedLevel("");
      setSelectedRole("");
    }
  }, [user]);

  return (
    <OnboardingTemplate
      headerTitle="Define your career path"
      headerSubTitle="Share your career aspirations with us"
      bodyTitle="I'm targeting a role or position"
      bodyTitleClassName=""
      handleBackClick={handleBackClick}
      decorateChildren={
        <DecorateButton
          icon="🔥"
          name="Whoa, You're on Fire!"
          className="-top-12 -left-0 -rotate-[0.18rad] md:-top-20 md:left-0 transition-all dark:bg-transparent"
        />
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-full font-bold"
      >
        <div className="flex flex-col justify-center w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col md:flex-row gap-2 max-md:max-w-full">
            <Dropdown
              name="level"
              options={levelOptions}
              selectedOption={selectedLevel}
              onSelect={(option) => setSelectedLevel(option)}
              placeholder="Senior"
              className="sm:max-w-[384px]"
            />
            <Dropdown
              name="role"
              options={roleOptions}
              selectedOption={selectedRole}
              onSelect={(option) => setSelectedRole(option)}
              placeholder="Select or write a role"
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
