"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button, LinkButton } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { institutionOptions, institutionTypeOptions } from "@/lib/options";

const userName = "Constantin";
const userEmail = "hello@example.com";

export default function Welcome() {
  const [institutionName, setInstitutionName] = useState("");
  const [institutionType, setInstitutionType] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleClick = () => {
    router.push("/onboardingvideo");
  };
  return (
    <div className="flex bg-primary-foreground">
      <div className="flex w-full bg-primary-foreground min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <main className="flex items-center justify-center bg-primary-foreground">
            <div className="flex flex-col p-4 max-w-full bg-accent rounded-[32px] w-[448px]">
              <div className="flex flex-col w-full text-center">
                <p className="flex flex-col w-full text-3xl font-semibold leading-10 text-accent-foreground">
                  Welcome abroad,
                </p>
                <p className="flex flex-col w-full text-3xl font-semibold leading-10 text-accent-foreground">
                  {userName}! 🎉
                </p>
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-8 w-full"
              >
                <div className="flex flex-col w-full mb-4">
                  <label className="text-sm font-medium leading-none text-accent-foreground mb-1.5">
                    Institution Name
                  </label>
                  <Dropdown
                    name="institutionname"
                    options={institutionOptions}
                    selectedOption={institutionName}
                    onSelect={(option) => setInstitutionName(option)}
                    placeholder="Select or write an industry"
                    className="mt-0"
                    inputClassName="flex text-base text-secondary-foreground bg-primary-foreground rounded-lg border border-gray-300 border-solid shadow-sm"
                  />
                </div>
                <div className="flex flex-col w-full mb-4">
                  <label className="text-sm font-medium leading-none text-accent-foreground mb-1.5">
                    Institution Type
                  </label>
                  <Dropdown
                    name="institutiontype"
                    options={institutionTypeOptions}
                    selectedOption={institutionType}
                    onSelect={(option) => setInstitutionType(option)}
                    placeholder="Select or write an industry"
                    className="mt-0"
                    inputClassName="flex text-base text-secondary-foreground bg-primary-foreground rounded-lg border border-gray-300 border-solid shadow-sm"
                  />
                </div>
                <div className="flex flex-col mt-4 w-full text-base font-semibold">
                  <Button
                    // type="submit"
                    onClick={handleClick}
                  >
                    Continue
                  </Button>
                  <LinkButton href="/signup" className="bg-transparent">
                    Go back
                  </LinkButton>
                </div>
              </form>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
