import React from "react";
import Image from "next/image";

interface FooterImageProps {
  path: string;
  alt: string;
}

export default function FooterImage({ path, alt }: FooterImageProps) {
  return (
    <footer className="flex overflow-hidden relative flex-col items-center px-16 mt-20 w-full text-4xl leading-none text-black whitespace-nowrap min-h-[141px] stroke-[3px] stroke-white stroke-opacity-0 max-md:px-5 max-md:mt-10 max-w-[1450px] max-md:max-w-full">
      <img
        loading="lazy"
        src={path}
        alt={alt}
        className="object-contain mt-14 w-full rounded-none aspect-[6.85] max-md:mt-10 max-md:max-w-full"
      />
    </footer>
  );
}
