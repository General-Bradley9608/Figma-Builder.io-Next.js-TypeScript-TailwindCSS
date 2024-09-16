import React from 'react';
import InputField from './InputField';
import Button from './Button';

interface WelcomeScreenProps {
  userName: string;
  userEmail: string;
}

export default function EntityWelcome({ userName, userEmail }: WelcomeScreenProps) {
  return (
    <main className="flex self-stretch bg-white">
      <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
        <section className="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col p-4 max-w-full bg-neutral-100 rounded-[32px] w-[448px]">
            <div className="flex flex-col w-full text-center">
              <h1 className="flex flex-col w-full text-3xl font-semibold leading-10 text-zinc-900">
                Welcome aboard, {userName}! 🎉
              </h1>
              <div className="flex gap-2 items-center self-center mt-4 text-base font-medium leading-none whitespace-nowrap text-zinc-900">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d9c3fabc6f34b4673244f30a59d62b0385c701e9c8ee4c41ad6a4ee6546e110?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
                <span>{userEmail}</span>
              </div>
            </div>
            <form className="flex flex-col self-center mt-8 w-full">
              <InputField
                label="Institution Name"
                placeholder="Select or write the name of your institution"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc242ab7ea455a55c112491f9db17d175868bbfcf2fddfe3c0b673f166a69df?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b"
              />
              <InputField
                label="Institution type"
                placeholder="Select your institution type"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9f288935232c2b601ff5bd7f94908d897dfaab83742491521bc37030849a2b7c?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b"
                isDropdown
              />
              <div className="flex flex-col mt-8 w-full text-base font-semibold">
                <Button primary>Continue</Button>
                <Button secondary>Go back</Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};