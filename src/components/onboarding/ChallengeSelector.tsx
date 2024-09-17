import React from "react";

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
    console.log(selectedChallenges);
    window.location.href = "/onboarding/trainingpath";
  }

  return (
    <section className="flex flex-col justify-center mt-40 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <h2 className="self-center text-4xl font-bold text-black dark:text-white max-md:max-w-full">
          My biggest challenges are...
        </h2>
        <div className="flex flex-wrap gap-4 justify-center items-center mt-8 w-full text-base font-medium text-black max-md:max-w-full">
          <button
            onClick={onSelectAll}
            className="gap-2 self-stretch px-5 py-3 my-auto border border-gray-200 dark:bg-[#9FA0F5] dark:text-white border-solid min-h-[48px] rounded-[32px] hover:bg-gray-100 dark:hover:bg-gray-300 cursor-pointer"
          >
            Select All
          </button>
          {challenges.map((challenge) => (
            <button
              key={challenge.text}
              onClick={() => onChallengeToggle(challenge.text)}
              className={`flex gap-2 justify-center items-center self-stretch px-5 py-3 my-auto dark:bg-[#9FA0F5] dark:text-white border border-solid min-h-[48px] rounded-[32px] hover:bg-gray-100 dark:hover:bg-gray-300 cursor-pointer ${
                selectedChallenges.includes(challenge.text)
                  ? "border-indigo-600 bg-indigo-600 bg-opacity-10 dark:bg-gray-500"
                  : "border-gray-200"
              }`}
            >
              <span className="self-stretch my-auto">{challenge.emoji}</span>
              <span className="self-stretch my-auto">{challenge.text}</span>
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleClick} className="gap-2 self-center px-5 py-4 mt-8 text-base font-semibold text-white dark:text-blue-500 whitespace-nowrap bg-indigo-600 dark:bg-white rounded-lg min-h-[48px] hover:bg-indigo-700">
        Continue
      </button>
    </section>
  );
}
