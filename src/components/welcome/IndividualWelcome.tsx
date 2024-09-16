'use client';

import React from "react";
import ShareLink from "./ShareLink";
import GoodNews from "./GoodNews";

interface IndividualWelcomeProps {
  userName: string,
  userEmail: string,
  entity: string,
}

export default function IndividualWelcome({userName, userEmail, entity}: IndividualWelcomeProps) {
  return (
    <main className="flex flex-col items-center w-full max-md:max-w-full">
      <section className="flex flex-col max-w-full w-[535px]">
        <h1 className="text-3xl font-semibold leading-none text-center text-zinc-900 max-md:max-w-full">
          Welcome aboard, {userName}! 🎉
        </h1>
        <div className="flex flex-col justify-center self-center p-4 mt-6 w-full bg-neutral-100 rounded-[32px]">
          <div className="flex flex-col items-center self-center w-full text-2xl font-semibold leading-10 text-center text-zinc-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a0fa9afd04295aeff30eb10b5c1d48450200cc32335dada50f6a4ec1753f3ed?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f"
              alt=""
              className="object-contain max-w-full aspect-[0.92] w-[110px]"
            />
            <div className="mt-4 bg-clip-text bg-[linear-gradient(45deg,#465FF1_14.64%,#ADB6E9_85.36%)] max-md:max-w-full">
              <span className="text-zinc-900">
                It looks like you're affiliated with{" "}
              </span>
              <br />
              <span className="text-3xl font-bold">{entity}</span>
            </div>
          </div>
          <p className="mt-6 text-base leading-none text-center text-slate-700 max-md:max-w-full">
            <span className="italic">Affiliated email:</span>{" "}
            <span className="font-bold">{userEmail}</span>
          </p>
          <div className="flex flex-col mt-6 w-full max-md:max-w-full">
            <GoodNews />
            <hr className="mt-4 w-full border border-solid border-neutral-200 min-h-[1px] max-md:max-w-full" />
            <div className="flex flex-col mt-4 w-full max-md:max-w-full">
              <div className="flex flex-col w-full text-base max-md:max-w-full">
                <h2 className="font-bold leading-none text-indigo-600 max-md:max-w-full">
                  💡 Want more discounts?
                </h2>
                <p className="mt-2 leading-5 text-slate-700 max-md:max-w-full">
                  Share the link below with a friend, and when they sign up,
                  you'll get an extra 10% discount on your next subscription!
                </p>
              </div>
              <ShareLink />
            </div>
          </div>
        </div>
        <button onClick={() => window.location.href = "/"} className="flex flex-col mt-6 w-full text-base font-semibold text-white max-md:max-w-full">
          <div className="flex items-start w-full rounded-lg max-md:max-w-full">
            <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-indigo-600 rounded-lg border border-indigo-600 border-solid shadow-sm min-w-[240px] max-md:max-w-full">
              Redeem & Continue
            </div>
          </div>
        </button>
      </section>
    </main>
  );
}