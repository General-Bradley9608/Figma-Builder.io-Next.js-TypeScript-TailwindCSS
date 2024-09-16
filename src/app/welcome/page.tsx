import React from "react";
import Header from "@/components/header/Header";
import IndividualWelcome from "@/components/welcome/IndividualWelcome";
import Footer from "@/components/footer/Footer";

export default function Welcome() {
  return (
    <div className="flex self-stretch bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <IndividualWelcome userName="Constantin" userEmail="constantin44wdx@harvard.com" entity="Havard Univeristy"/>
          <Footer />
        </div>
      </div>
    </div>
  );
};
