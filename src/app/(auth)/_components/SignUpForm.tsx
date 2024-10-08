"use client";

import { useState, useRef, useCallback } from "react";
import { AuthTemplate } from "./AuthTemplate";
import { useForm, FieldValues } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { useAuth } from "@/providers/Auth";
import { Button, LinkButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";

type singupFormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const searchParams = useSearchParams();
  const allParams = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const redirect = useRef(searchParams.get("redirect"));
  const router = useRouter();

  const { create } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [accountType, setAccountType] = useState("individual");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<singupFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (data: singupFormData) => {
      try {
        await create(data);
        if (redirect?.current) router.push(redirect.current as string);
        else router.push("/login");
      }
      catch(_) {
        setError("There was an error with the credentials provided. Please try again.");
      }
    },
    [create, router]
  );

  return (
    <AuthTemplate
      title="Create your Play.CV account"
      description="Start your journey to mastering interviews."
      body={
        <div>
          <div className="flex gap-2 items-center p-1.5 mt-6 w-full text-base font-semibold bg-gray-50 rounded-lg border border-gray-100 border-solid">
            <Button
              onClick={() => setAccountType("individual")}
              className={`flex-1 py-2.5 my-auto rounded-lg bg-transparent shadow-none ${
                accountType === "individual"
                  ? "bg-primary text-primary-foreground"
                  : "text-accent-foreground"
              }`}
            >
              I'm an Individual
            </Button>
            <Button
              onClick={() => setAccountType("entity")}
              className={`flex-1 py-2.5 my-auto rounded-lg bg-transparent shadow-none ${
                accountType === "entity"
                  ? "bg-primary text-primary-foreground"
                  : "text-accent-foreground"
              }`}
            >
              I'm an Entity
            </Button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full mt-6">
              <Input
                name="name"
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                register={register}
                required={true}
                error={errors.email}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <Input
                name="email"
                label={`${
                  accountType === "individual" ? "Email" : "Work Email"
                }`}
                type="email"
                placeholder={`${
                  accountType === "individual"
                    ? "Enter your email"
                    : "Enter your work email"
                }`}
                register={register}
                required={true}
                error={errors.email}
              />
            </div>
            <div className="flex flex-col w-full mt-6">
              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Create a password"
                register={register}
                required={true}
                error={errors.password}
              />
            </div>
            <div className="flex flex-col w-full mt-2">
              Must be at least 8 characters.
            </div>
            <div className="flex justify-between w-full mt-6">
              <Checkbox
                size="lg"
                text={
                  <label
                    htmlFor="terms"
                    className="flex-1 text-sm text-accent-foreground"
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
                }
              />
            </div>
            <div className="flex flex-col gap-2 mt-6 w-full font-semibold">
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </div>
          </form>
        </div>
      }
    />
  );
}
