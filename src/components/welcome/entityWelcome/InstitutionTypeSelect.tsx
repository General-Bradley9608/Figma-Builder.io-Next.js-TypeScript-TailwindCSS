import React, { useState } from 'react';

interface InstitutionTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const institutionTypes = [
  "Junior Middle School",
  "Senior Middle School",
  "University"
];

export default function InstitutionTypeSelect({ value, onChange }: InstitutionTypeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (type: string) => {
    onChange(type);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="institutionType" className="text-sm font-medium leading-none text-zinc-900 mb-1.5">
        Institution type
      </label>
      <div className="relative">
        <button
          type="button"
          id="institutionType"
          onClick={() => setIsOpen(!isOpen)}
          className="flex gap-2 items-center px-3.5 py-2.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {value || "Select your institution type"}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f288935232c2b601ff5bd7f94908d897dfaab83742491521bc37030849a2b7c?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square ml-auto"
            alt=""
          />
        </button>
        {isOpen && (
          <ul
            className="absolute z-10 w-full bg-white border text-black border-gray-300 rounded-lg mt-1 shadow-lg"
            role="listbox"
          >
            {institutionTypes.map((type, index) => (
              <li
                key={index}
                className="px-3.5 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(type)}
                role="option"
                aria-selected={value === type}
              >
                {type}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
