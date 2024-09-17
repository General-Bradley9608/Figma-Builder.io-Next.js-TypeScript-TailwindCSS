import React from "react";

export default function DecorateButton({
  icon,
  name,
  direction,
  position,
}: {
  icon: string;
  name: string;
  direction: string;
  position: string;
}) {
  return (
    <div className={`flex relative flex-col items-${position} w-full max-w-[1019px] max-md:max-w-full`}>
      {direction === "right" ? (
      <button className={`flex z-10 gap-2 justify-end items-end px-5 py-4 mt-40 mr-32 text-base font-medium bg-white bg-opacity-10 min-h-12 rotate-[-0.17948938805876508rad] border border-blue-700 dark:border-white rounded-[32px] max-md:mt-10 max-md:mr-2.5`}>
        <span className="self-stretch my-auto text-white">{icon}</span>
        <span className="self-stretch my-auto leading-6 text-black dark:text-white">
          {name}
        </span>
      </button>) : (
      <button className={`flex z-10 gap-2 justify-end items-end px-5 py-4 mt-40 mr-32 text-base font-medium bg-white bg-opacity-10 min-h-12 rotate-[0.17948938805876508rad] border border-blue-700 dark:border-white rounded-[32px] max-md:mt-10 max-md:mr-2.5`}>
        <span className="self-stretch my-auto text-white">{icon}</span>
        <span className="self-stretch my-auto leading-6 text-black dark:text-white">
          {name}
        </span>
      </button>)}
    </div>
  );
}
