"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

interface InviteSignUpFormProps {
  userName: string;
  userEmail: string;
}

export default function InviteSignUpForm({
  userName,
  userEmail,
}: InviteSignUpFormProps) {
  const [formData, setFormData] = useState({
    fullname: userName,
    email: userEmail,
    password: "",
    terms: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Account Validation process, must be integrated with backend using API
  const isAccountValid = () => {
    if (formData.terms === true) {
      window.location.href = '/welcome';
    }
    else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-full w-[416px]"
    >
      <div className="flex flex-col self-center w-full text-center">
        <div className="flex flex-col w-full max-w-[399px]">
          <h1 className="self-start text-3xl font-semibold leading-10 text-zinc-900">
            Welcome to Play.CV, [Student Name]!👋
          </h1>
          <p className="flex-1 shrink gap-1 mt-3 w-full text-sm leading-5 text-slate-600">
            You've been invited by your institution to join our platform. Let's
            finish setting up your account.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full rounded-xl">
        <label
          htmlFor="fullname"
          className="text-sm font-medium leading-none text-zinc-900"
        >
          Full Name*
        </label>
        <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            disabled
            onChange={handleChange}
            placeholder={userName}
            className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] bg-transparent border-none focus:outline-none"
            required
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full rounded-xl">
        <label
          htmlFor="fullname"
          className="text-sm font-medium leading-none text-zinc-900"
        >
          Email*
        </label>
        <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            disabled
            onChange={handleChange}
            placeholder={userEmail}
            className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] bg-transparent border-none focus:outline-none"
            required
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full rounded-xl">
        <label
          htmlFor="fullname"
          className="text-sm font-medium leading-none text-zinc-900"
        >
          Password*
        </label>
        <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Create a password"
            className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] bg-transparent border-none focus:outline-none"
            required
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-3 items-start mt-6 w-full">
        <input
          type="checkbox"
          checked={formData.terms}
          onChange={(e) =>
            setFormData({ ...formData, terms: e.target.checked })
          }
          id="terms"
          name="terms"
          className="w-5 h-5 bg-white rounded-md border border-gray-300 border-solid"
        />
        <label
          htmlFor="terms"
          className="flex-1 shrink text-sm leading-5 text-gray-900"
        >
          I agree to Play.CV's{" "}
          <a href="#" className="underline">
            Terms & Conditions
          </a>{" "}
          and acknowledge the{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </label>
      </div>
      <button
        type="submit"
        onClick={isAccountValid}
        className="flex justify-center items-center mt-6 w-full px-5 py-2.5 text-base font-semibold text-white bg-indigo-600 rounded-lg border border-indigo-600 border-solid shadow-sm"
      >
        Create account
      </button>
      <div className="flex gap-1 justify-center items-start mt-6 w-full text-sm leading-none">
        <span className="text-slate-600">Already have an account?</span>
        <Link href="/login" className="font-semibold text-indigo-600">
          Log in
        </Link>
      </div>
    </form>
  );
}
