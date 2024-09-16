import React from 'react';
import Header from './Header';
import GetStartedButton from './GetStartedButton';
import BackgroundImage from './BackgroundImage';

const WelcomePage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-gradient-to-b from-[#5d5fef] via-[#6E6FF1] to-[#BCBDF7]">
      <section className="flex relative flex-col pt-72 pb-7 w-full min-h-[1024px] max-md:pt-24 max-md:max-w-full">
        <BackgroundImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/917addc41ee8ffd8fce8fe2b1cbcfdea287c67ed8eb87c5a4509ba27ff607cdd?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b" />
        <div className="flex relative flex-col justify-center items-center self-center max-w-full w-[890px]">
          <Header />
          <GetStartedButton />
        </div>
        <img
          loading="lazy"
          src="/01-1.png"
          alt=""
          className="object-contain mt-14 w-full rounded-none aspect-[6.85] max-md:mt-10 max-md:max-w-full"
        />
      </section>
    </main>
  );
};

export default WelcomePage;