'use client';

import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onClick: () => void;
}

export default function Header({title, subtitle, onClick}: HeaderProps) {
  return (
    <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
      <button onClick={onClick} className="flex items-start self-stretch my-auto text-sm font-semibold leading-none text-black whitespace-nowrap">
        <div className="flex gap-2 justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/133c3d1720b421e11da66963f056fed69a4d13512cb5126f6202db5146dad929?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <span className="self-stretch my-auto">Back</span>
        </div>
      </button>
      <header className="flex flex-col items-center justify-center my-auto text-black min-w-[240px] w-[257px]">
        <div className="flex flex-col self-center my-auto text-black min-w-[240px] w-[375px]">
          <h2 className="gap-2 self-center text-xl font-semibold">
           {title}
          </h2>
          <p className="mt-2 text-base text-center">
            {subtitle}
          </p>
        </div>
      </header>
    </div>
  );
}
