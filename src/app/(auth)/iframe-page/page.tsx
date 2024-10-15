import React from "react";
import Link from "next/link";

const IframePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl">External Content</h1>
      <iframe
        src="https://example.com"
        className="w-full h-full border-0"
        title="External Content"
      ></iframe>
    </div>
  );
};

export default IframePage;
