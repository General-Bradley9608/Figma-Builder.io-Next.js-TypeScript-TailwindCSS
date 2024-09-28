'use client';

import React from "react";
import Link from "next/link";

interface SocialLoginButtonProps {
  src: string;
  alt: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ src, alt }) => (
  <button className="flex overflow-hidden flex-1 shrink gap-3 justify-center items-center self-stretch p-2.5 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm basis-0">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain self-stretch my-auto w-6 aspect-square"
    />
  </button>
);

export default function SocialLogin() {
  const socialButtons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e10bc7533a164e0031fd942cf27b1993be15f18a743c75d89a9bd4ab735e295?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Social login option 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b0be1e5c6c6c1af2cdf805f58f6ee6ca33254447f8dc6d3b58c283fd11c5806?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Social login option 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd7e4d479508997b73ae02ed81daaf6984eb664bd24c49e635370cbfab5eac99?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Social login option 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef51369e0bd6684f3d3b21f1b52fb862ce49565564c10eafafac3bc60fa68729?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Social login option 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccc902fe8a7b0c618fe8fd4360ecd6a0881010357fbda2e961a0c808c2383a85?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Social login option 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a50677598d5de7476bf4ff67fa8299b275814039a5a4ed8c10adcfbc65da0a1a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Social login option 6",
    },
  ];

  return (
    <div className="flex flex-col mt-4 w-full">
      <div className="flex gap-4 items-center mt-4 w-full text-sm leading-none text-center text-gray-500">
        <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-100 border-solid basis-0 w-[150px]" />
        <div className="self-stretch my-auto">Or login with</div>
        <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-100 border-solid basis-0 w-[150px]" />
      </div>
      <form className="flex flex-col mt-4 w-full">
        <div className="flex flex-wrap gap-3 justify-center items-center mt-4 w-full">
          {socialButtons.slice(0, 3).map((button, index) => (
            <SocialLoginButton key={index} {...button} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center mt-3 w-full">
          {socialButtons.slice(3).map((button, index) => (
            <SocialLoginButton key={index + 3} {...button} />
          ))}
        </div>
        <div className="flex gap-1 justify-center items-start mt-4 w-full text-sm leading-none">
          <p className="text-secondary-foreground">Don't have an account? </p>
          <Link
            href="/signup"
            className="font-semibold text-indigo-600 whitespace-nowrap"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
