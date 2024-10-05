import React from "react";

import { Button } from "@/components/Button";

interface Challenge {
  emoji: string;
  text: string;
}

interface ChallengeSelectorProps {
  challenges: Challenge[];
  selectedChallenges: string[];
  onChallengeToggle: (challenge: string) => void;
  onSelectAll: () => void;
}

export default function ChallengeSelector({
  challenges,
  selectedChallenges,
  onChallengeToggle,
  onSelectAll,
}: ChallengeSelectorProps) {
  const handleClick = () => {
    window.location.href = "/onboarding/trainingpath";
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mt-8 w-full text-base font-medium text-black max-md:max-w-full">
      <Button
        type="button"
        onClick={onSelectAll}
        className="px-5 py-3 my-auto border border-muted bg-primary-foreground text-accent-foreground dark:bg-[#9FA0F5] dark:text-primary-foreground border-solid min-h-[48px] rounded-[32px] hover:bg-gray-100 dark:hover:bg-gray-300 cursor-pointer"
      >
        Select All
      </Button>
      {challenges.map((challenge) => (
        <Button
          key={challenge.text}
          type="button"
          onClick={() => onChallengeToggle(challenge.text)}
          className={`flex gap-2 self-stretch px-5 py-3 my-auto bg-primary-foreground text-accent-foreground dark:bg-[#9FA0F5] dark:text-primary-foreground border border-solid min-h-[48px] rounded-[32px] hover:bg-gray-100 dark:hover:bg-gray-300 cursor-pointer ${
            selectedChallenges.includes(challenge.text)
              ? "border-indigo-600 bg-indigo-600 bg-opacity-10 dark:bg-gray-500"
              : "border-gray-200"
          }`}
        >
          <span className="self-stretch my-auto">{challenge.emoji}</span>
          <span className="self-stretch my-auto">{challenge.text}</span>
        </Button>
      ))}
    </div>
  );
}
