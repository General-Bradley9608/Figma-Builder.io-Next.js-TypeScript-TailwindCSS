import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PasswordForm from "../../_components/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  return (
    <div className="flex bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <main className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-center max-w-full text-6xl font-semibold text-center whitespace-nowrap text-accent-foreground w-[106px] max-md:text-4xl">
              <div className="flex items-center justify-center px-5 w-full rounded-full bg-neutral-100 h-[106px] max-md:px-5 max-md:text-4xl">
                🔒
              </div>
            </div>
            <PasswordForm />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
