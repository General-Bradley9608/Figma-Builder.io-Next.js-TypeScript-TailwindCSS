'use client';

import {useState, ChangeEvent, FormEvent} from 'react';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted data: ', email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Email validation, must be integrated with backend using API
  const isEmailValid = () => {
    if (email === "hello@example.com") {
      window.location.href = '/forgotpassword/emailverification';
    }
    else {
      alert("Email is not valid");
    }
  };

  return (
    <section className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-center max-w-full text-6xl font-semibold text-center whitespace-nowrap text-zinc-900 w-[106px] max-md:text-4xl">
        <div className="flex items-center justify-center px-5 w-full rounded-full bg-neutral-100 h-[106px] max-md:px-5 max-md:text-4xl" role="img" aria-label="Confused emoji">
          🤷
        </div>
      </div>
      <div className="flex flex-col items-center px-8 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[416px]">
          <div className="flex flex-col self-center w-full">
            <div className="flex flex-col w-full max-w-[416px]">
              <h1 className="text-3xl font-semibold leading-none text-center text-zinc-900">
                Forgot Your Password?
              </h1>
              <p className="gap-1 mt-3 w-full text-sm leading-none text-center text-slate-600">
                We'll email you a link to securely reset your password
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col mt-6 w-full rounded-xl">
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-sm font-medium leading-none text-zinc-900">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
                placeholder="Enter your email"
                required
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-end mt-7 w-full text-base font-semibold">
              <button type="submit" onClick={isEmailValid} className="flex items-center justify-center w-full rounded-lg overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 bg-indigo-600 text-white whitespace-nowrap border border-indigo-600 border-solid shadow-sm min-w-[240px]">
                Continue
              </button>
              <Link href="/login"  className="flex items-start justify-center mt-2 w-full rounded-lg overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 text-zinc-900 min-w-[240px]">
                Go back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
