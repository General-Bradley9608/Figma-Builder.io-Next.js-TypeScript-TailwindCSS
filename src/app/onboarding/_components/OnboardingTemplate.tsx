import React from "react";
import { useTheme } from "next-themes";

import Header from "./Header/Header";
import { FormBody } from "./FormBody/FormBody";
import FooterImage from "./Footer/FooterImage";
import DecorateButton from "./DecorateButton/DecorateButton";

const OnboardingTemplate: React.FC<{
  headerTitle?: string;
  headerSubTitle?: string;
  bodyTitle?: string;
  bodyTitleClassName?: string;
  children?: React.ReactNode;
  decorateChildren?: React.ReactNode | undefined;
  handleBackClick: () => void;
}> = ({
  headerTitle = "",
  headerSubTitle = "",
  bodyTitle = "",
  bodyTitleClassName = "",
  children,
  decorateChildren,
  handleBackClick,
}) => {
  const { theme } = useTheme();

  return (
    <main className="flex overflow-hidden flex-col bg-white dark:bg-gradient-to-b dark:from-[#5d5fef] dark:via-[#6E6FF1] dark:to-[#BCBDF7] min-h-screen">
      <Header
        className=""
        title={headerTitle}
        subtitle={headerSubTitle}
        onClick={handleBackClick}
      />
      <div className="flex relative flex-col items-center justify-center w-full h-[full] max-w-full">
        <div className="flex relative flex-col items-center justify-center w-full max-w-full px-2 sm:px-4">
          <FormBody
            title={bodyTitle}
            titleClassName={bodyTitleClassName}
            decorate={decorateChildren}
          >
            {children}
          </FormBody>
        </div>
        {theme === "dark" ? (
          <FooterImage path="/02-1.png" alt="" />
        ) : (
          <FooterImage path="/02.png" alt="" />
        )}
      </div>
    </main>
  );
};
OnboardingTemplate.displayName = "OnboardingTemplate";

export { OnboardingTemplate };
