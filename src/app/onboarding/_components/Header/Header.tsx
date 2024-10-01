'use client';

import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
  onClick: () => void;
}

export default function Header({title="", subtitle="", className="", onClick}: HeaderProps) {
  return (
    <div className={cn("flex relative items-center justify-center w-full mt-12", className)}>
      <button onClick={onClick} className="absolute left-0 text-sm font-semibold text-accent-foreground dark:text-white whitespace-nowrap px-8 md:px-16 transition-all">
        {"< Back"}
      </button>
      <header className="justify-center text-accent-foreground dark:text-white">
        <div className="flex flex-col self-center text-accent-foreground dark:text-white">
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
