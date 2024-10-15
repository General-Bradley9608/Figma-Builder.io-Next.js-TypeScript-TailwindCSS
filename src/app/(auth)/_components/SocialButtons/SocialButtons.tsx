"use client";

import React, { use, useEffect, useState } from "react";

import { socialButtons } from "@/utils/data";
import { Button, LinkButton } from "@/components/Button";
import { set } from "react-hook-form";

interface Props {
  accountType: string;
}

export default function SocialLogin({ accountType }: Props) {
  const entitySocialButtons = [socialButtons[0], ...socialButtons.slice(-2)];
  const buttons =
    accountType === "individual" ? socialButtons : entitySocialButtons;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (url: string) => {
    const width = 500;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      url,
      "Social Login",
      `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars=yes,status=1`
    );
  };

  const LoginModal = ({
    isOpen,
    url,
    onClose,
  }: {
    isOpen: boolean;
    url: string;
    onClose: () => void;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-lg max-w-md mx-auto">
          <h2 className="text-xl mb-4">Sign in with Google</h2>
          <iframe
            src={url}
            className="w-full h-96"
            title="Google Login"
          ></iframe>
          <button onClick={onClose} className="mt-4 text-gray-500">
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <form className="flex flex-col mt-4 w-full">
      <div className="flex flex-wrap gap-3 justify-center items-center mt-4 w-full">
        {buttons.slice(0, 3).map((button, index) => (
          <React.Fragment key={index}>
            <Button
              type="button"
              onClick={() => handleButtonClick(button.href)}
              key={index}
              children={<img src={button.src}></img>}
              className="flex flex-1 justify-center items-center rounded-lg border border-gray-300 border-solid"
            />
            <LoginModal
              isOpen={isModalOpen}
              url={button.href}
              onClose={() => setModalOpen(false)}
            />
          </React.Fragment>
        ))}
      </div>

      {accountType === "individual" && (
        <div className="flex flex-wrap gap-3 justify-center items-center mt-4 w-full">
          {buttons.slice(3, 6).map((button, index) => (
            <React.Fragment key={index}>
              <Button
                type="button"
                onClick={() => handleButtonClick(button.href)}
                key={index}
                children={<img src={button.src}></img>}
                className="flex flex-1 justify-center items-center rounded-lg border border-gray-300 border-solid"
              />
              <LoginModal
                isOpen={isModalOpen}
                url={button.href}
                onClose={() => setModalOpen(false)}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </form>
  );
}
