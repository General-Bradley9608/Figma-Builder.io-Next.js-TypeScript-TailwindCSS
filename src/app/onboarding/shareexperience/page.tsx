"use client";

import React, { useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { OnboardingTemplate } from "../_components/OnboardingTemplate";
import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/Button";
import { useAuth } from "@/providers/Auth";

const UploadExperience: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { theme } = useTheme();
  const router = useRouter();
  const { user, fetchMe } = useAuth();
  
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<{
    cv: File | null;
  }>({
    defaultValues: {
      cv: null,
    },
  });

  const handleFileUpload = (file: File) => {
    if (file.size <= 25 * 1024 * 1024) {
      // 25MB in bytes
      setUploadedFile(file);
    } else {
      alert("File size exceeds 25MB limit");
    }
  };

  const handleBackClick = () => {
    router.push("/onboarding/careergoal");
  };

  const handleSkipClick = () => {
    router.push("/onboarding/interviewchallenge");
  };

  const onSubmit = useCallback(async () => {
    try {
      if (!uploadedFile) {
        alert("Please upload a file.");
        return;
      }
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
              cv: uploadedFile,
            },
          }),
        }
      );
      if (req.ok) {
        fetchMe();
        router.push("/onboarding/interviewchallenge");
      } else {
        console.error("Error:", req.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, [uploadedFile, router]);

  return (
    <OnboardingTemplate
      headerTitle="Share your experience"
      headerSubTitle="Tell us about your background to tailor your practice sessions"
      bodyTitle="Upload your CV"
      bodyTitleClassName=""
      handleBackClick={handleBackClick}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-full font-bold"
      >
        <div className="flex flex-col justify-center w-full max-md:mt-10 max-md:max-w-full">
          <FileUpload
            onFileUpload={handleFileUpload}
            uploadedFile={uploadedFile}
          />
          <div className="flex gap-4 items-center justify-center mt-12 text-base font-semibold max-md:mt-10">
            <Button
              type="submit"
              variant={theme === "dark" ? "secondary" : "default"}
            >
              Continue
            </Button>
            <Button
              type="button"
              onClick={handleSkipClick}
              variant="secondary"
              className={cn(
                "bg-gray-300 bg-opacity-20",
                theme === "dark"
                  ? "text-primary-foreground"
                  : "text-accent-foreground"
              )}
            >
              Skip for now
            </Button>
          </div>
        </div>
      </form>
    </OnboardingTemplate>
  );
};

export default UploadExperience;
