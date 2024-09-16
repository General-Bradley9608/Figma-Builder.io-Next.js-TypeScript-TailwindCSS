import React from 'react';

interface BackgroundImageProps {
  src: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className="object-cover absolute inset-0 size-full"
    />
  );
};

export default BackgroundImage;