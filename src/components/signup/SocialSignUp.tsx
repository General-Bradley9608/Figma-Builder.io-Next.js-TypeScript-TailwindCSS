import React from 'react';
import Link from 'next/link';

interface SocialButton {
  src: string;
  alt: string;
}

const socialButtons: SocialButton[] = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e0cc3e3e16bc44a6ba4b7a8785dbe738f07d508f133a9e06a4448494d1e8584?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f", alt: "Sign up with Google" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/07a80d207831bc82b0d3f107c9accf5b72a1ba160d491510a59974116de6870d?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f", alt: "Sign up with Facebook" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/32f6615af00745bba231e99f10e102c115c355491ac0d8c9356e0ffb1a1d8a4a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f", alt: "Sign up with Apple" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef51369e0bd6684f3d3b21f1b52fb862ce49565564c10eafafac3bc60fa68729?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f", alt: "Sign up with LinkedIn" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccc902fe8a7b0c618fe8fd4360ecd6a0881010357fbda2e961a0c808c2383a85?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f", alt: "Sign up with Twitter" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a50677598d5de7476bf4ff67fa8299b275814039a5a4ed8c10adcfbc65da0a1a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f", alt: "Sign up with GitHub" }
];

const SocialSignUp: React.FC = () => {
  return (
    <section className="flex flex-col mt-6 w-full">
      <div className="flex gap-4 items-center mt-4 w-full text-sm leading-none text-center text-gray-500 whitespace-nowrap">
        <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-100 border-solid basis-0 w-[184px]" />
        <div className="self-stretch my-auto">Or</div>
        <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-100 border-solid basis-0 w-[184px]" />
      </div>
      <div className="flex flex-wrap gap-3 justify-center items-center mt-4 w-full">
        {socialButtons.slice(0, 3).map((button, index) => (
          <button key={index} className="flex overflow-hidden flex-1 shrink gap-3 justify-center items-center self-stretch p-2.5 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm basis-0">
            <img loading="lazy" src={button.src} className="object-contain self-stretch my-auto w-6 aspect-square" alt={button.alt} />
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 justify-center items-center mt-3 w-full">
        {socialButtons.slice(3).map((button, index) => (
          <button key={index} className="flex overflow-hidden flex-1 shrink gap-3 justify-center items-center self-stretch p-2.5 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm basis-0">
            <img loading="lazy" src={button.src} className="object-contain self-stretch my-auto w-6 rounded aspect-square" alt={button.alt} />
          </button>
        ))}
      </div>
      <div className="flex gap-1 justify-center items-start mt-4 w-full text-sm leading-none">
        <p className="text-slate-600">Already have an account?</p>
        <Link href="/login" className="flex items-start font-semibold text-indigo-600">
          <span className="gap-2 self-stretch">Log in</span>
        </Link>
      </div>
    </section>
  );
};

export default SocialSignUp;