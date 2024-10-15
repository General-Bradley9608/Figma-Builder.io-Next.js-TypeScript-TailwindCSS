"use client";

import React from "react";

import { socialButtons } from "@/utils/data";
import { LinkButton } from "@/components/Button";

interface Props {
  accountType: string;
}

export default function SocialLogin({ accountType }: Props) {
  const entitySocialButtons = [socialButtons[0], ...socialButtons.slice(-2)];
  const buttons =
    accountType === "individual" ? socialButtons : entitySocialButtons;

  return (
    <form className="flex flex-col mt-4 w-full">
      <div className="flex flex-wrap gap-3 justify-center items-center mt-4 w-full">
        {buttons.slice(0, 3).map((button, index) => (
          <LinkButton
            key={index}
            href={button.href}
            children={<img src={button.src}></img>}
            className="flex flex-1 justify-center items-center rounded-lg border border-gray-300 border-solid"
          />
        ))}
      </div>

      {accountType === "individual" && (
        <div className="flex flex-wrap gap-3 justify-center items-center mt-4 w-full">
          {buttons.slice(3, 6).map((button, index) => (
            <LinkButton
              key={index}
              href={button.href}
              children={<img src={button.src}></img>}
              className="flex flex-1 justify-center items-center rounded-lg border border-gray-300 border-solid"
            />
          ))}
        </div>
      )}
    </form>
  );
}
