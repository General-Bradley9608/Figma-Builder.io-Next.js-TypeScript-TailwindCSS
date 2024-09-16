import React from 'react';

export default function VideoSection() {
  return (
    <section className="flex flex-col items-center max-w-full text-center w-[716px]">
      <h2 className="text-3xl font-semibold leading-none text-zinc-900">
        Hey there! 👋
      </h2>
      <p className="mt-2 text-base leading-5 text-slate-700 max-md:max-w-full">
        To help you get started, we've prepared a quick video with the 5 essential steps for onboarding. Let's make sure you're set up for success!
      </p>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e004d8cab7c7fa666ac226dbce2737c908251302e2d95df623366c5f9207239?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b" 
        alt="Onboarding video thumbnail" 
        className="object-contain mt-8 w-full rounded-3xl aspect-[1.78]" 
      />
    </section>
  );
};
