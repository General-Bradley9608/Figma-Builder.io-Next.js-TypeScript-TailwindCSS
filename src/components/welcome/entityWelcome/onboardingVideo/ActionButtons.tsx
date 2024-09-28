'use client';

import React from 'react';

export default function ActionButtons() {
  return (
    <div className="flex flex-col mt-8 max-w-full text-base font-semibold w-[416px]">
      <button onClick={() => window.location.href = "/admin"} className="flex items-start justify-center w-full text-white whitespace-nowrap rounded-lg overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 bg-indigo-600 border border-indigo-600 border-solid shadow-sm min-w-[240px]">
        Continue
      </button>
      <button onClick={() => window.location.href = "/welcome/entitywelcome"} className="flex items-start justify-center mt-2 w-full rounded-lg text-accent-foreground overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 min-w-[240px]">
        Go back
      </button>
    </div>
  );
};
