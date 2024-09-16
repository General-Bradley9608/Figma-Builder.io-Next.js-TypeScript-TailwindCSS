import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center items-center w-full text-center text-white">
      <h1 className="text-9xl font-bold leading-[142px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Welcome to PLAY.CV
      </h1>
      <p className="mt-6 text-base tracking-normal leading-6 w-[522px] max-md:max-w-full">
        Your AI-powered interview coach is here to help you crush your next job interview. Ready to kickstart your journey to success?
      </p>
    </header>
  );
};

export default Header;