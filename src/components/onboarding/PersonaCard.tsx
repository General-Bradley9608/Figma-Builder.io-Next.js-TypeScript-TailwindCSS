import React from "react";

interface PersonaCardProps {
  image: string;
  title: string;
  description: string;
}

export default function PersonaCard({ image, title, description }: PersonaCardProps) {
  return (
    <div className="flex flex-col grow shrink items-center self-stretch px-6 py-5 my-auto rounded-3xl bg-zinc-50 min-h-[302px] min-w-[240px] w-[229px] max-md:px-5">
      <img loading="lazy" src={image} alt={title} className="object-contain max-w-full aspect-[1.06] w-[193px]" />
      <div className="flex flex-col items-center mt-6 w-60 max-w-full">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-xs leading-6 text-center text-black">{description}</p>
      </div>
    </div>
  );
};
