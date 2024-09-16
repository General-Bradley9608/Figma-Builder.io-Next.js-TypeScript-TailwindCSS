import Link from "next/link";
import React from "react";

const EmailVerificationForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full text-6xl font-semibold text-center whitespace-nowrap text-zinc-900 w-[106px] max-md:text-4xl">
        <div
          className="flex items-center justify-center px-5 w-full rounded-full bg-neutral-100 h-[106px] max-md:px-5 max-md:text-4xl"
          aria-label="Email icon"
        >
          📧
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch px-8 mt-6 w-full text-center max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[416px]">
          <div className="flex flex-col w-full">
            <h2 className="text-3xl font-semibold leading-none text-zinc-900">
              Check Your Inbox!
            </h2>
            <p className="mt-3 w-full text-sm leading-5 text-slate-600">
              Open your inbox and click the link to reset your password. 
              <br />
              (If you don't see it, check your spam or junk folder.)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 max-w-full w-[416px]">
        <p className="text-sm leading-none text-center text-slate-600">
          Didn't get the email? Click below to resend the link.
        </p>
        <div className="flex flex-col items-end mt-2 w-full text-base font-semibold max-w-[416px]">
          <button className="flex items-center justify-center w-full rounded-lg text-white overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 bg-indigo-600 border border-indigo-600 border-solid shadow-sm min-w-[240px]">
            Resend Email
          </button>
          <Link href="/forgotpassword" className="flex items-center justify-center mt-2 w-full rounded-lg text-zinc-900 overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 min-w-[240px]">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationForm;
