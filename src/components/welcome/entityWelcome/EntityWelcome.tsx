"use client";

import React, { useState } from "react";
import InstitutionInput from "./InstitutionInput";
import InstitutionTypeSelect from "./InstitutionTypeSelect";

export default function InstitutionForm({userName, userEmail}: {userName: string, userEmail: string}) {
  const [institutionName, setInstitutionName] = useState("");
  const [institutionType, setInstitutionType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleClick = () => {
    window.location.href = "/welcome/entitywelcome/onboardingvideo";
  }

  return (
    <main className="flex self-stretch bg-white">
      <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
        <section className="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col p-4 max-w-full bg-neutral-100 rounded-[32px] w-[448px]">
            <div className="flex flex-col w-full text-center">
              <h1 className="flex flex-col w-full text-3xl font-semibold leading-10 text-accent-foreground">
                Welcome aboard, {userName}! 🎉
              </h1>
              <div className="flex gap-2 items-center self-center mt-4 text-base font-medium leading-none whitespace-nowrap text-accent-foreground">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c3fabc6f34b4673244f30a59d62b0385c701e9c8ee4c41ad6a4ee6546e110?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
                <span>{userEmail}</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full">
              <InstitutionInput
                value={institutionName}
                onChange={setInstitutionName}
              />
              <InstitutionTypeSelect
                value={institutionType}
                onChange={setInstitutionType}
              />
              <div className="flex flex-col mt-8 w-full text-base font-semibold">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-indigo-600 rounded-lg border border-indigo-600 border-solid shadow-sm min-w-[240px] text-white"
                >
                  Continue
                </button>
                <button
                  type="button"
                  className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 mt-2 w-full rounded-lg min-w-[240px] text-accent-foreground"
                >
                  Go back
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};