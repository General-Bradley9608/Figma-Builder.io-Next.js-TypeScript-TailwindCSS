import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import EmailVerificationForm from "../../_components/EmailVerification";

const EmailVerification: React.FC = () => {
  return (
    <main className="flex self-stretch bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <EmailVerificationForm />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default EmailVerification;
