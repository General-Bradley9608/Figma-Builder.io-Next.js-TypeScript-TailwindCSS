import React from "react";

const VideoPlay: React.FC = () => {
  return (
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
  );
};

export default VideoPlay;
