'use client';

import {useState, ChangeEvent, FormEvent} from "react";

type TimeUnit = "hours" | "minutes" | "days";

const TimePicker = ({ unit }: { unit: TimeUnit }) => {
  const options =
    unit === "hours"
      ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"))
      : unit === "minutes"
      ? Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"))
      : ["per day"];

  return (
    <div className="flex items-center whitespace-nowrap max-md:text-4xl">
      <select
        className="appearance-none bg-transparent text-6xl text-start text-gray-300 max-md:text-4xl"
        aria-label={`Select ${unit}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c017ae261b426315e3d81096f79b6cc252058237f893beae20f0dd43cd3777f?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square"
      />
    </div>
  );
};

export default function TrainingTimePicker() {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center mt-8 text-6xl text-center text-gray-300 max-md:max-w-full max-md:text-4xl">
      <TimePicker unit="hours" />
      <TimePicker unit="minutes" />
      <TimePicker unit="days" />
    </div>
  );
};
