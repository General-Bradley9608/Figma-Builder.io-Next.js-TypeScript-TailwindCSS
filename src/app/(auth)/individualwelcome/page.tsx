import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AuthTemplate } from "../_components/AuthTemplate";
import { Button } from "@/components/Button";
import GoodNews from "../_components/WelcomeComponents/NewsComponent";
import ShareLink from "../_components/WelcomeComponents/ShareLinkComponent";

const entity = "Harvard Univeristy";
const userEmail = "hello@example.com";

export default function Welcome() {
  return (
    <div className="flex self-stretch bg-white">
      <div className="flex w-full bg-white min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <AuthTemplate
            title="Welcome abroad, Constantin! 🎉"
            description=""
            body={
              <main className="flex flex-col items-center w-full max-md:max-w-full">
                <section className="flex flex-col max-w-full w-[535px]">
                  <div className="flex flex-col justify-center p-4 mt-6 w-full bg-accent rounded-[32px]">
                    <div className="flex flex-col items-center w-full text-2xl font-semibold leading-10 text-center text-accent-foreground">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a0fa9afd04295aeff30eb10b5c1d48450200cc32335dada50f6a4ec1753f3ed?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f"
                        alt=""
                        className="object-contain max-w-full aspect-[0.92] w-[110px]"
                      />
                      <div className="mt-4 max-md:max-w-full">
                        <span className="text-accent-foreground">
                          It looks like you're affiliated with{" "}
                        </span>
                        <br />
                        <span className="text-3xl font-bold text-primary">
                          {entity}
                        </span>
                      </div>
                    </div>
                    <p className="mt-6 text-base text-center text-link max-md:max-w-full">
                      <span className="italic">Affiliated email:</span>{" "}
                      <span className="font-bold">{userEmail}</span>
                    </p>
                    <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                      <GoodNews />
                      <hr className="mt-4 w-full border border-solid border-neutral-200 min-h-[1px] max-md:max-w-full" />
                      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
                        <div className="flex flex-col w-full text-base max-md:max-w-full">
                          <h2 className="font-bold text-primary max-md:max-w-full">
                            💡 Want more discounts?
                          </h2>
                          <p className="mt-2 text-link max-md:max-w-full">
                            Share the link below with a friend, and when they
                            sign up, you'll get an extra 10% discount on your
                            next subscription!
                          </p>
                        </div>
                        <ShareLink />
                      </div>
                    </div>
                  </div>
                  <Button
                    type="button"
                    className="flex flex-col mt-6 w-full items-center text-base font-semibold text-primary-foreground"
                  >
                    Redeem & Continue
                  </Button>
                </section>
              </main>
            }
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}
