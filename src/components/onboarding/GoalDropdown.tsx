import React from "react";

interface GoalDropdownProps {
  selectedGoal: string;
  setSelectedGoal: (industry: string) => void;
}

export default function GoalDropdown({
  selectedGoal,
  setSelectedGoal,
}: GoalDropdownProps) {
  const goals = [
    "To be Top",
    "To be an Architect",
    "To be an Engineer",
  ];

  return (
    <div className="flex flex-col justify-center mt-8 w-full text-6xl text-center text-gray-300 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-row text-4xl items-center justify-center">
        <h2 className="text-center text-black max-md:max-w-full">
          My career goal is to...
        </h2>
        <img loading="lazy" src="/6.png" alt="" className="size-fit" />
      </div>
      <input
        list="goals"
        value={selectedGoal}
        onChange={(e) => setSelectedGoal(e.target.value)}
        placeholder="Select or write a goal"
        className="border-2 mt-10"
      />
      <datalist id="goals">
        {goals.map((goal) => (
          <option key={goal} value={goal} />
        ))}
      </datalist>
    </div>
  );
}
