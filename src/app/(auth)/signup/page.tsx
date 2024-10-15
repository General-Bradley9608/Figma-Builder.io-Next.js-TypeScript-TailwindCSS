"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
import Testimonial from "../_components/Testimonial";
import SignUpForm from "../_components/SignUpForm";
import Header from "@/components/Header/Header";

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/176dd0fc1a13f39016d53e31ebd79fa0e434a184f9bb2e85ee7d6aa60c71166b?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1",
    "/image1.jpg",
    "/image2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="flex flex-wrap w-full bg-white min-h-[960px] max-md:max-w-full">
        <section className="flex flex-col flex-1 shrink justify-between basis-28 min-w-[480px] max-md:max-w-full">
          <Header />
          <main className="flex flex-col items-center px-8 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[416px]">
              <SignUpForm />
            </div>
          </main>
          <Footer />
        </section>
        {/* <section className="flex relative flex-col flex-1 shrink px-14 pb-14 basis-0 min-h-[960px] min-w-[240px] pt-[657px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <img
            loading="lazy"
            src={images[currentImageIndex]}
            alt="Background testimonial image"
            className="object-cover absolute inset-0 size-full rounded-[80px_0px_0px_80px]"
          />
          <Testimonial />
          <div className="flex gap-8 items-start absolute bottom-28 right-20">
            <button
              onClick={handlePrevImage}
              className="flex gap-3 justify-center items-center w-14 rounded-3xl border border-solid border-white border-opacity-50 min-h-[56px]"
              aria-label="Previous image"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ff5f97beb29c92c8ef08d84174660992937532ed2f66df263d8e6eb3f7206d5?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1"
                alt=""
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </button>
            <button
              onClick={handleNextImage}
              className="flex gap-3 justify-center items-center w-14 rounded-3xl border border-solid border-white border-opacity-50 min-h-[56px]"
              aria-label="Next image"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc969320eb822628d51d559110ceeb7987aea8e5877e5db88226d2208ef42301?placeholderIfAbsent=true&apiKey=56fac90a92e74e049125400e70477bf1"
                alt=""
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </div>
        </section> */}
      </div>
    </main>
  );
};

export default SignUpPage;
