import React from "react";
import Header from "../../../components/header/Header";
import SignUpForm from "../../../components/signup/SignUpForm";
import SocialSignUp from "../../../components/signup/SocialSignUp";
import Footer from "../../../components/footer/Footer";

export default function SignUpPage() {
  return (
    <div className="flex self-stretch bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <main className="flex flex-col items-center px-8 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[416px]">
              <SignUpForm />
              <SocialSignUp />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
