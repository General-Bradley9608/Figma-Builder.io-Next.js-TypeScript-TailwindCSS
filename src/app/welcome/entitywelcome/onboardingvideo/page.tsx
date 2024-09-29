import React from "react";
import Header from "@/components/Header/Header";
import MainContent from "@/components/welcome/entityWelcome/onboardingVideo/MainContent";
import Footer from "@/components/Footer/Footer";

const PlayCV: React.FC = () => {
  return (
    <div className="flex self-stretch bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PlayCV;
