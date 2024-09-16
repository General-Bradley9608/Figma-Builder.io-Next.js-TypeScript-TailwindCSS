'use client';

import React, { useState } from 'react';
import Header from '@/components/onboarding/Header';
import ChallengeSelector from '@/components/onboarding/ChallengeSelector';
import FooterImage from '@/components/onboarding/FooterImage';

interface Challenge {
  emoji: string;
  text: string;
}

const InterviewChallenges: React.FC = () => {
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const challenges: Challenge[] = [
    { emoji: '😰', text: 'Nervousness' },
    { emoji: '📝', text: 'Structuring Answers' },
    { emoji: '👀', text: 'Maintaining Eye Contact' },
    { emoji: '🗣️', text: 'Speaking Clearly' },
    { emoji: '🤔', text: 'Handling Unexpected Questions' },
    { emoji: '📚', text: 'Demonstrating Relevant Experience' },
    { emoji: '🌍', text: 'Overcoming Cultural Barriers' },
    { emoji: '🧠', text: 'Articulating Complex Ideas' },
    { emoji: '🔥', text: 'Maintaining Focus Under Pressure' },
    { emoji: '👀', text: 'Managing Non-Verbal Communication' },
    { emoji: '🤷🏻', text: 'Other' },
  ];

  const handleChallengeToggle = (challenge: string) => {
    setSelectedChallenges(prev =>
      prev.includes(challenge)
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  const handleSelectAll = () => {
    setSelectedChallenges(challenges.map(c => c.text));
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col items-center justify-center py-14 w-full min-h-[1024px] max-md:max-w-full">
        <div className="flex relative flex-col items-center justify-center w-full max-w-[1110px] max-md:max-w-full">
          <Header title="Let's tackle your challenges" subtitle="Help us understand your interview challenges and what you want to improve." />
          <ChallengeSelector
            challenges={challenges}
            selectedChallenges={selectedChallenges}
            onChallengeToggle={handleChallengeToggle}
            onSelectAll={handleSelectAll}
          />
        </div>
        <FooterImage path="/05.png" alt="Footer Image" />
      </div>
    </main>
  );
};

export default InterviewChallenges;