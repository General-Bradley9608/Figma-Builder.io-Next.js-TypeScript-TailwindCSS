import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-start p-8 w-full text-2xl font-bold text-black whitespace-nowrap min-h-[96px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-3 items-center">
        <div className="flex shrink-0 self-stretch my-auto w-6 h-6 bg-indigo-50 rounded" aria-hidden="true" />
        <h1 className="self-stretch my-auto">PlayCV</h1>
      </div>
    </header>
  );
};

export default Header;