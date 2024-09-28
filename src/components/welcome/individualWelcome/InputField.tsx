import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
  icon: string;
  isDropdown?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, icon, isDropdown = false }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className="text-sm font-medium leading-none text-accent-foreground mb-1.5">
        {label}
      </label>
      <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
        <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0 min-w-[240px]">
          <img loading="lazy" src={icon} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
          {isDropdown ? (
            <select
              id={label.toLowerCase().replace(/\s/g, '-')}
              className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
            >
              <option value="">{placeholder}</option>
            </select>
          ) : (
            <input
              type="text"
              id={label.toLowerCase().replace(/\s/g, '-')}
              placeholder={placeholder}
              className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
            />
          )}
        </div>
        {isDropdown && (
          <img loading="lazy" src={icon} className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
        )}
      </div>
    </div>
  );
};

export default InputField;