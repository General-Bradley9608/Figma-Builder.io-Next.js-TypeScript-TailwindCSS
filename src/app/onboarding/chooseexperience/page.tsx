import React from "react";
import Header from "@/components/onboarding/Header";
import PersonaCard from "@/components/onboarding/PersonaCard";
import FooterImage from "@/components/onboarding/FooterImage";

interface ChooseWorkProps {}

export default function ChooseWork({}: ChooseWorkProps) {
  const personas = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45773c63e710fba12bed5072a303b4633aa3e9836dc4981f69487391d90e87c9?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b",
      title: "Student",
      description: "Currently still learning",
      defaultStyle: "bg-zinc-50 text-black",
      hoverStyle: "hover:bg-blue-600 hover:text-white",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e0690b41a9c38ac4cee567451e3a1538c06324ff65905e2e6c1ceae260774e7?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b",
      title: "Working Professional",
      description: "Have a job but looking for opportunities",
      defaultStyle: "bg-zinc-50 text-black",
      hoverStyle: "hover:bg-blue-600 hover:text-white",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3ef9c1f5c62bb40fab02001e2fde25041500960720f8a619d6c81b00badec35b?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b",
      title: "Currently Not Working",
      description: "Have a job but looking for opportunities",
      defaultStyle: "bg-zinc-50 text-black",
      hoverStyle: "hover:bg-blue-600 hover:text-white",
    },
  ];

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
          <Header
            title="Let's get to know you"
            subtitle="We need a few details to personalize your experience"
          />
          <section className="flex flex-col items-center justify-center mt-44 max-w-full w-[908px] max-md:mt-10">
            <h1 className="text-7xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
              I am a...
            </h1>
            <div className="flex flex-wrap gap-6 mt-12 w-full max-md:mt-10 max-md:max-w-full">
              {personas.map((persona, index) => (
                <PersonaCard key={index} {...persona} />
              ))}
            </div>
          </section>
        </div>
        <FooterImage path="/02.png" alt="" />
      </div>
    </main>
  );
}
