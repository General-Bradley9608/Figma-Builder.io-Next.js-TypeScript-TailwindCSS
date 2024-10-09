import { cva } from "class-variance-authority";
import React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Props = {
  name: string;
  options: Array<string>;
  placeholder: string;
  className?: string;
  inputClassName?: string;
  selectedOption: string;
  onSelect: (option: string) => void;
};

export const Dropdown: React.FC<Props> = ({
  name,
  options,
  placeholder,
  className,
  inputClassName,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "mt-8 text-center w-full md:text-6xl sm:text-4xl text-2xl",
        className
      )}
    >
      <div className="relative w-full mx-auto">
        <div className="relative">
          <input
            name={name}
            type="text"
            className={cn(
              "w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent placeholder-muted",
              inputClassName
            )}
            placeholder={placeholder}
            value={selectedOption}
            onChange={(e) => onSelect(e.target.value)}
            onClick={() => setIsOpen(!isOpen)}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <ul className="absolute z-10 w-full mt-2 text-sm text-start font-semibold bg-white border rounded-lg shadow-lg dark:text-black max-h-80 overflow-y-auto">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
