import React from "react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import VideoPlay from "@/components/VideoPlay/";
import { Button, LinkButton } from "@/components/Button";

const PlayCV: React.FC = () => {
  return (
    <div className="flex self-stretch bg-primary-foreground">
      <div className="flex w-full bg-primary-foreground min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <main className="flex flex-col items-center self-center max-w-full w-[968px]">
            <section className="flex flex-col items-center self-center max-w-full w-[968px]">
              <div className="flex flex-col items-center max-w-full text-center w-[716px]">
                <h2 className="text-3xl font-semibold leading-none text-accent-foreground">
                  Hey there! 👋
                </h2>
                <p className="mt-2 text-base leading-5 text-secondary-foreground max-md:max-w-full">
                  To help you get started, we've prepared a quick video with the
                  5 essential steps for onboarding. Let's make sure you're set
                  up for success!
                </p>
              </div>
              <VideoPlay />
            </section>
            <div className="flex flex-col mt-8 max-w-full text-base font-semibold w-[416px]">
              <Button type="button">Continue</Button>
              <LinkButton>Go back</LinkButton>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PlayCV;
