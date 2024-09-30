'use client';

import React from "react";

interface PersonaCardProps {
  image: string;
  title: string;
  description: string;
  defaultStyle: string;
  hoverStyle: string;
}

export default function PersonaCard({ image, title, description, defaultStyle, hoverStyle }: PersonaCardProps) {
  const handleClick = () => {
    window.location.href = "/onboarding/careerpath";
  };

  return (
    <div onClick={handleClick} className={`flex flex-col grow shrink items-center self-stretch px-6 py-5 my-auto rounded-3xl min-h-[302px] min-w-[240px] w-[229px] cursor-pointer max-md:px-5 ${defaultStyle} ${hoverStyle} `}>
      <img loading="lazy" src={image} alt={title} className="object-contain max-w-full aspect-[1.06] w-[193px]" />
      <div className="flex flex-col items-center mt-6 w-60 max-w-full">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-xs leading-6 text-center">{description}</p>
      </div>
    </div>
  );
};
