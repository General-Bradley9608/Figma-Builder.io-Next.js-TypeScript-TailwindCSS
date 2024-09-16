import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary, secondary, onClick }) => {
  const baseClasses = "flex items-start w-full text-base font-semibold whitespace-nowrap rounded-lg";
  const primaryClasses = "overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-indigo-600 text-white rounded-lg border border-indigo-600 border-solid shadow-sm min-w-[240px]";
  const secondaryClasses = "overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full rounded-lg text-zinc-900 min-w-[240px]";

  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : ''} ${secondary ? secondaryClasses : ''} items-start justify-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;