import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-10 justify-between items-end p-8 mt-16 w-full text-sm leading-none text-slate-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <p>© Play.CV 2024</p>
      <div className="flex gap-2 items-center whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d7d00467b521aa5570dcb0038011f5bb439fd1acd4538ca917842e0c512754?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        <a href="mailto:support@playcv.com" className="self-stretch my-auto">support@playcv.com</a>
      </div>
    </footer>
  );
};

export default Footer;