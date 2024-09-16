import React from "react";

interface IndustryDropdownProps {
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
}

export default function IndustryDropdown({
  selectedIndustry,
  setSelectedIndustry,
}: IndustryDropdownProps) {
  const industries = ["Ecommerce", "Finance", "Healthcare"];

  return (
    <div className="flex flex-col justify-center mt-8 w-full text-6xl text-center text-gray-300 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-row text-4xl items-center justify-center">
        <h2 className="text-center text-black max-md:max-w-full">
          I'm interested in...
        </h2>
        <img loading="lazy" src="/4.png" alt="" className="size-fit" />
      </div>
      <input
        list="industries"
        value={selectedIndustry}
        onChange={(e) => setSelectedIndustry(e.target.value)}
        placeholder="Select or write an industry"
        className="border-2 mt-10"
      />
      <datalist id="industries">
        {industries.map((industry) => (
          <option key={industry} value={industry} />
        ))}
      </datalist>
    </div>
  );
}
