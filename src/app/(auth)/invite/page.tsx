import React from "react";
import Header from "@/components/Header/Header";
import InviteSignUpForm from "../_components/InviteSignUpForm";
import Footer from "@/components/Footer/Footer";

const WelcomePage: React.FC = () => {
  return (
    <div className="flex self-stretch bg-white">
      <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
        <Header />
        <section className="flex flex-col items-center px-8 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[416px]">
            <InviteSignUpForm
              userName="Oliver Anderson"
              userEmail="oliveranderson9608@gmail.com"
              password=""
            />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default WelcomePage;
