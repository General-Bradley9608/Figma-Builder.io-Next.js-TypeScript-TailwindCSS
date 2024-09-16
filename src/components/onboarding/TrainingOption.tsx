'use client';

import React from 'react';

interface TrainingOptionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  defaultStyle: string;
  hoverStyle: string;
}

const TrainingOption: React.FC<TrainingOptionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  defaultStyle,
  hoverStyle
}) => {
  const handleClick = () => {
    window.location.href = "/onboarding/plantime";
  };

  return (
    <article onClick={handleClick} className={`flex flex-col px-6 pt-6 pb-2 my-auto rounded-3xl min-h-[290px] min-w-[240px] w-[427px] max-md:px-5 max-md:max-w-full cursor-pointer transition-colors duration-300 ${defaultStyle} ${hoverStyle}`}>
      <img loading="lazy" src={imageSrc} className="object-contain self-center max-w-full aspect-[1.24] w-[182px]" alt={imageAlt} />
      <div className="flex flex-col mt-6 w-full">
        <h3 className="self-center text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-base leading-6 text-center">{description}</p>
      </div>
    </article>
  );
};

export default TrainingOption;