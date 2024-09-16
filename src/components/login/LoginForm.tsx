"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function LoginForm() {
  const [accountType, setAccountType] = useState("individual");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Email and Password validation, must be integrated with backend using API
  const isEmailPasswordValid = () => {
    if (
      formData.email === "hello@example.com" &&
      formData.password === "P@ssw0rd"
    ) {
      window.location.href = "/";
    }
    else {
      alert("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col self-center w-full max-w-[416px]"
    >
      <div className="flex flex-col w-full">
        <h2 className="text-3xl font-semibold leading-none text-center text-zinc-900">
          Welcome Back👋
        </h2>
        <p className="gap-1 mt-3 w-full text-sm leading-none text-slate-600">
          Ready to continue where you left off? Let's get you logged in.
        </p>
      </div>
      <div className="flex gap-2 items-center p-1.5 mt-6 w-full text-base font-semibold bg-gray-50 rounded-lg border border-gray-100 border-solid">
        <button
          onClick={() => setAccountType("individual")}
          className={`overflow-hidden flex-1 shrink gap-2 self-stretch px-3.5 py-2.5 my-auto rounded-lg ${
            accountType === "individual"
              ? "text-white bg-indigo-600 shadow"
              : "text-zinc-900"
          }`}
        >
          I'm an Individual
        </button>
        <button
          onClick={() => setAccountType("entity")}
          className={`overflow-hidden flex-1 shrink gap-2 self-stretch px-3.5 py-2.5 my-auto rounded-lg ${
            accountType === "entity"
              ? "text-white bg-indigo-600 shadow"
              : "text-zinc-900"
          }`}
        >
          I'm an Entity
        </button>
      </div>
      <div className="flex flex-col mt-6 w-full rounded-xl">
        {accountType === "individual" ? (
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none text-zinc-900"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <label
              htmlFor="work email"
              className="text-sm font-medium leading-none text-zinc-900"
            >
              Work Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
              placeholder="Enter your work email"
              required
            />
          </div>
        )}
        <div className="flex flex-col mt-5 w-full">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none text-zinc-900"
          >
            Password*
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
              placeholder="Create a password"
              required
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f"
              alt=""
              className="object-contain absolute right-3.5 top-1/2 transform -translate-y-1/2 w-4 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-between items-center mt-7 w-full">
        <label className="flex gap-2 items-center self-stretch my-auto">
          <input
            type="checkbox"
            className="w-4 h-4 bg-white rounded border border-gray-300 border-solid"
          />
          <span className="text-sm font-medium leading-none text-zinc-900">
            Remember me
          </span>
        </label>
        <a
          href="/forgotpassword"
          className="text-sm font-medium leading-none text-indigo-600"
        >
          Forgot password
        </a>
      </div>
      <button
        type="submit"
        onClick={isEmailPasswordValid}
        className="flex items-start w-full text-base font-semibold text-white rounded-lg mt-7"
      >
        <span className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-indigo-600 rounded-lg border border-indigo-600 border-solid shadow-sm min-w-[240px]">
          Sign In
        </span>
      </button>
    </form>
  );
}
