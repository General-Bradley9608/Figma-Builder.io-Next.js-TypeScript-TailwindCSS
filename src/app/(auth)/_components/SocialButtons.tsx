"use client";

import React from "react";
import Link from "next/link";
import { LinkButton } from "@/components/Button";

export default function SocialLogin() {
  const socialButtons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e10bc7533a164e0031fd942cf27b1993be15f18a743c75d89a9bd4ab735e295?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Google login",
      href: "/api/oauth/signin/google",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b0be1e5c6c6c1af2cdf805f58f6ee6ca33254447f8dc6d3b58c283fd11c5806?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "Facebook login",
      href: "/api/oauth/signin/facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd7e4d479508997b73ae02ed81daaf6984eb664bd24c49e635370cbfab5eac99?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f",
      alt: "LinkedIn login",
      href: "/api/oauth/signin/linkedin",
    },
  ];

  return (
    <form className="flex flex-col mt-4 w-full">
      <div className="flex flex-wrap gap-3 justify-center items-center mt-4 w-full">
        {socialButtons.slice(0, 3).map((button, index) => (
          <LinkButton
            key={index}
            href={button.href}
            children={<img src={button.src}></img>}
            className="flex flex-1 justify-center items-center rounded-lg border border-gray-300 border-solid"
          />
        ))}
      </div>
    </form>
  );
}
