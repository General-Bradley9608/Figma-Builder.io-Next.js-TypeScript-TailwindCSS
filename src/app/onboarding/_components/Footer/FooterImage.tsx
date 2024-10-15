import React from "react";
import Image from "next/image";

interface FooterImageProps {
  path: string;
  alt: string;
  emoji?: {
    symbol: string;
    label?: string;
  };
}

export default function FooterImage({
  path,
  alt,
  emoji = { symbol: "", label: "" },
}: FooterImageProps) {
  return (
    <footer className="flex overflow-hidden relative flex-col items-center px-16 mt-20 w-full text-4xl leading-none text-black whitespace-nowrap min-h-[141px] stroke-[3px] stroke-white stroke-opacity-0 max-md:px-5 max-md:mt-10 max-w-[1450px] max-md:max-w-full">
      <img
        loading="lazy"
        src={path}
        alt={alt}
        className="object-contain mt-14 w-full rounded-none aspect-[6.85] max-md:mt-10 max-md:max-w-full"
      />
      {/* {emoji.symbol ? (
        <div className="flex justify-center text-6xl font-semibold w-full">
          <div
            className="flex items-center justify-center px-5 w-[106px] h-[106px] rounded-full bg-neutral-100"
            role="emoji"
            aria-label={emoji.label}
          >
            {emoji.symbol}
          </div>
        </div>
      ) : (
        <></>
      )}{" "} */}
    </footer>
  );
}
