import { cn } from "@/lib/utils";
import React from "react";
import Header from "./Header";
import { FormBody } from "./FormBody";
import FooterImage from "./FooterImage";

const OnboardingTemplate: React.FC<{
  title: React.ReactNode;
  body: React.ReactNode;
  className: string;
}> = ({ title = "", body = "", className = "" }) => {
  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
          {/* <Header /> */}
          {/* <FormBody /> */}
        </div>
        {/* <FooterImage /> */}
      </div>
    </main>
  );
};
OnboardingTemplate.displayName = "OnboardingTemplate";

export { OnboardingTemplate };
