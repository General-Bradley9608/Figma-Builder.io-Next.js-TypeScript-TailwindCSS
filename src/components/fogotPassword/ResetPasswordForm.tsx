"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  password: string;
  confirmPassword: string;
}

export default function PasswordForm() {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted data: ", formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Password validation and reset, must be integrated with backend using API
  const validPasswordReset = () => {
    if (formData.password != "") {
      if (formData.password === formData.confirmPassword) {
        // API operation here for password reset
        window.location.href = "/forgotpassword/passwordchanged";
      } else {
        alert("Passwords do not match");
      }
    }
    else {
      alert("Password cannot be empty");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center px-8 mt-6 w-full max-md:px-5 max-md:max-w-full"
    >
      <div className="flex flex-col max-w-full w-[416px]">
        <div className="flex flex-col self-center w-full">
          <div className="flex flex-col w-full max-w-[416px]">
            <h1 className="text-3xl font-semibold leading-none text-center text-zinc-900">
              Reset Your Password
            </h1>
            <p className="gap-1 mt-3 text-center w-full text-sm leading-none text-slate-600">
              Choose a new password to secure your account.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-6 w-full rounded-xl">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="newPassword"
                className="text-sm font-medium leading-none text-zinc-900"
              >
                New Password*
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                <input
                  type="password"
                  id="newPassword"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a new password"
                  className="flex-1 shrink gap-2 self-stretch my-auto min-w-[240px] bg-transparent border-none outline-none"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full">
            <div className="flex flex-col w-full">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium leading-none text-zinc-900"
              >
                Confirm New Password*
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your new password"
                  className="flex-1 shrink gap-2 self-stretch my-auto min-w-[240px] bg-transparent border-none outline-none"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=d9bf0d577dc74ba79e889f5b65cafa8b"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-7 w-full text-base font-semibold">
          <button
            type="submit"
            onClick={validPasswordReset}
            className="flex items-start w-full rounded-lg text-white"
          >
            <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-indigo-600 rounded-lg border border-indigo-600 border-solid shadow-sm min-w-[240px]">
              Reset Password
            </div>
          </button>
          <button
            type="button"
            className="flex items-start mt-2 w-full rounded-lg text-zinc-900"
          >
            <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full rounded-lg min-w-[240px]">
              Go back
            </div>
          </button>
        </div>
      </div>
    </form>
  );
}
