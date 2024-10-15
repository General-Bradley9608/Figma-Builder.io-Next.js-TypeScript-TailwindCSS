import React from "react";
import Header from "@/components/Header/Header";
import LoginForm from "../_components/LoginForm";
import Footer from "@/components/Footer/Footer";

const LoginPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <div className="flex w-full min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <section className="flex flex-col items-center px-8 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[416px]">
              <LoginForm />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
