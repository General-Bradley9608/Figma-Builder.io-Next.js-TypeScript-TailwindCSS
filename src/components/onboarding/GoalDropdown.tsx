"use client";

import React, { useState, ChangeEvent } from "react";

interface GoalDropdownProps {
  value: string;
  onChange: (goal: string) => void;
}

export default function GoalDropdown({ value, onChange }: GoalDropdownProps) {
  const goals = ["To be Top", "To be an Architect", "To be an Engineer"];

  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col justify-center mt-8 w-[750px] text-6xl text-center text-gray-300 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-row text-4xl items-center justify-center">
        <h2 className="text-center text-black max-md:max-w-full">
          My career goal is to...
        </h2>
      </div>
      <div className="relative">
        <input
          type="text"
          id="goalName"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Select or write a goal"
          className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/558447cc100c64b0111f9f317a1e3daadf82e094fa49e7113ecd522f9414f6a6?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1"
          alt="Dropdown arrow"
          className="object-contain absolute right-0 transform -translate-y-16 w-14 aspect-square pointer-events-none"
        />
        {showSuggestions && (
          <ul className="w-full bg-white border text-gray-600 border-gray-300 rounded-lg mt-1 shadow-lg">
            {goals.map((goal, index) => (
              <li
                key={index}
                className=" hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(goal)}
              >
                {goal}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
