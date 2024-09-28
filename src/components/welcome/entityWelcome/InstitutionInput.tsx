import { useState, ChangeEvent } from 'react';

interface InstitutionInputProps {
  value: string;
  onChange: (value: string) => void;
}

const predefinedInstitutions = [
  "Harvard University",
  "Stanford University",
  "Indiana University Bloomington"
];

export default function InstitutionInput({ value, onChange }: InstitutionInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor="institutionName" className="text-sm font-medium leading-none text-accent-foreground mb-1.5">
        Institution Name
      </label>
      <div className="relative">
        <input
          type="text"
          id="institutionName"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
          placeholder="Select or write the name of your institution"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc242ab7ea455a55c112491f9db17d175868bbfcf2fddfe3c0b673f166a69df?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1"
          className="object-contain absolute right-3.5 top-1/2 transform -translate-y-1/2 w-5 aspect-square"
          alt=""
        />
        {showSuggestions && (
          <ul className="absolute z-10 w-full bg-white border text-black border-gray-300 rounded-lg mt-1 shadow-lg">
            {predefinedInstitutions.map((institution, index) => (
              <li
                key={index}
                className="px-3.5 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(institution)}
              >
                {institution}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
