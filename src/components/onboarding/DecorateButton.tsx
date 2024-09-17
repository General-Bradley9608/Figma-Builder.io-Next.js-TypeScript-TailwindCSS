import React from "react";

export default function DecorateButton({
  icon,
  name,
  angle,
  position,
}: {
  icon: string;
  name: string;
  angle: string;
  position: string;
}) {
  return (
    <div className={`flex relative flex-col items-${position} w-full max-w-[1019px] max-md:max-w-full`}>
      <button className={`flex z-10 gap-2 justify-end items-end px-5 py-4 mt-40 mr-32 text-base font-medium bg-white bg-opacity-10 min-h-12 rotate-[${angle}] border border-blue-700 rounded-[32px] max-md:mt-10 max-md:mr-2.5`}>
        <span className="self-stretch my-auto text-white">{icon}</span>
        <span className="self-stretch my-auto leading-6 text-black">
          {name}
        </span>
      </button>
    </div>
  );
}
