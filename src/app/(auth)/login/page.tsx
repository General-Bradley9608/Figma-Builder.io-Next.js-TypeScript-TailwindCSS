import React from "react";
import Header from "@/components/Header/Header";
import LoginForm from "../_components/LoginForm";
import SocialButtons from "../_components/SocialButtons/SocialButtons";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <div className="flex w-full min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <section className="flex flex-col items-center px-8 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[416px]">
              <LoginForm />
              <div className="flex flex-col mt-4 w-full">
                <div className="flex gap-4 items-center mt-4 w-full text-sm leading-none text-center text-gray-500">
                  <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-100 border-solid basis-0 w-[150px]" />
                  <div className="self-stretch my-auto">Or login with</div>
                  <div className="flex-1 shrink self-stretch my-auto h-px border border-gray-100 border-solid basis-0 w-[150px]" />
                </div>
              </div>
              <SocialButtons />
              <div className="flex gap-1 justify-center mt-4 w-full text-sm">
                <p className="text-secondary-foreground">
                  Don't have an account?{" "}
                </p>
                <Link href="/signup" className="text-primary">
                  Register
                </Link>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
