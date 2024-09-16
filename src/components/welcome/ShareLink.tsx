import React from 'react';

const ShareLink: React.FC = () => {
  return (
    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <label htmlFor="shareLink" className="text-sm font-medium leading-none text-zinc-900">
            Share link
          </label>
          <div className="flex flex-wrap gap-1.5 items-start mt-1.5 w-full text-base max-md:max-w-full">
            <div className="flex flex-1 shrink gap-1.5 items-start text-gray-900 whitespace-nowrap basis-0 min-w-[240px]">
              <div className="flex overflow-hidden flex-1 shrink gap-2 items-center px-3.5 py-2.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-sm basis-0 min-w-[240px]">
                <input
                  id="shareLink"
                  type="text"
                  readOnly
                  value="join.play.cv/interview"
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] bg-transparent border-none focus:outline-none"
                  aria-label="Share link"
                />
              </div>
            </div>
            <button className="flex items-start font-small rounded-lg text-zinc-900 w-[145px]">
              <div className="flex overflow-hidden flex-1 shrink gap-2 justify-center items-center px-5 py-2.5 w-full bg-white rounded-lg border border-gray-300 border-solid shadow-sm basis-0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f11e02189f17986795291bac95a0ed5d43c773adaebfd34d1ef5d123a2d229c?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                <span className="self-stretch my-auto">Copy Link</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareLink;