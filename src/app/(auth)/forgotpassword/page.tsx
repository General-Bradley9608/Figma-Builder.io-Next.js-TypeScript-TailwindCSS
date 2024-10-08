import React from "react";
import Header from "@/components/Header/Header";
import ForgotPasswordForm from "../_components/ForgotPasswordForm";
import Footer from "@/components/Footer/Footer";

const ForgotPasswordPage: React.FC = () => {
  return (
    <main className="flex self-stretch bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <section className="flex flex-col items-center px-8 mt-8 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[416px]">
              <ForgotPasswordForm />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
