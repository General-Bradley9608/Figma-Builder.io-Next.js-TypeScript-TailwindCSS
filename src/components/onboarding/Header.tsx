'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onClick: () => void;
}

export default function Header({title, subtitle, onClick}: HeaderProps) {
  return (
    <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
      <button onClick={onClick} className="flex items-start self-stretch my-auto text-sm font-semibold leading-none text-black dark:text-white whitespace-nowrap">
        <div className="flex gap-2 justify-center items-center">
          <span className="self-stretch my-auto">{`< Back`}</span>
        </div>
      </button>
      <header className="flex flex-col items-center justify-center my-auto text-black dark:text-white min-w-[240px] w-[257px]">
        <div className="flex flex-col self-center my-auto text-black dark:text-white min-w-[240px] w-[375px]">
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
