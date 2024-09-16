import React from 'react';

export default function Testimonial() {
  return (
    <div className="flex relative flex-col max-md:max-w-full">
      <blockquote className="text-3xl font-medium tracking-tighter text-white max-md:max-w-full">
        "I've been using Play.cv to improve my interview skills and got my first job in just 2 weeks of using it."
      </blockquote>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <h2 className="text-3xl font-semibold leading-none text-white max-md:max-w-full">Amélie Laurent</h2>
        <div className="flex flex-wrap gap-3 items-start mt-3 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink text-white basis-0 min-w-[240px] max-md:max-w-full">
            <p className="text-lg font-semibold leading-loose max-md:max-w-full">Graduate Student,</p>
            <p className="text-base font-medium max-md:max-w-full">Harvard University</p>
          </div>
        </div>
      </div>
    </div>
  );
};
