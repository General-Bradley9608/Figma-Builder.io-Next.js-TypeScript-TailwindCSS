import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center self-center max-w-full w-[968px]">
      <div className="flex flex-col items-center max-w-full text-center w-[716px]">
        <h2 className="text-3xl font-semibold leading-none text-zinc-900">
          Hey there! 👋
        </h2>
        <p className="mt-2 text-base leading-5 text-slate-700 max-md:max-w-full">
          To help you get started, we've prepared a quick video with the 5 essential steps for onboarding. Let's make sure you're set up for success!
        </p>
      </div>
      <div className="mt-8 w-full">
        <video
          className="w-full rounded-3xl aspect-[1.78]"
          controls
          poster="https://cdn.builder.io/api/v1/image/assets/TEMP/0e004d8cab7c7fa666ac226dbce2737c908251302e2d95df623366c5f9207239?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1"
          aria-label="Onboarding video with 5 essential steps"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;