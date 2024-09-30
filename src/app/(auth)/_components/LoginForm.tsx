"use client";

import { useState, useRef, useCallback } from "react";
import { AuthTemplate } from "./AuthTemplate";
import { useForm, FieldValues } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { useAuth } from "@/providers/Auth";
import { Button, LinkButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";

import Link from "next/link";

type loginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const searchParams = useSearchParams();
  const allParams = searchParams.toString()
    ? `?${searchParams.toString()}`
    : "";
  const redirect = useRef(searchParams.get("redirect"));
  const router = useRouter();

  const { login } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [accountType, setAccountType] = useState("individual");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit = useCallback(
    async (data: loginFormData) => {
      try {
        await login(data);
        if (redirect?.current) router.push(redirect.current as string);
        else router.push("/onboarding");
      }
      catch(_) {
        setError("There was an error with the credentials provided. Please try again.");
      }
    },
    [login, router]
  );

  return (
    <AuthTemplate
      title="Welcome Back👋"
      description="Ready to continue where you left off? Let's get you logged in."
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
                placeholder="Enter your password"
                register={register}
                required={true}
                error={errors.password}
              />
            </div>
            <div className="flex text-sm justify-between w-full mt-6">
              <Checkbox size="default" text="Remember me" />
              <Link href="/forgotpassword" className="text-primary">
                Forgot Password
              </Link>
            </div>
            <div className="flex flex-col gap-2 mt-6 w-full font-semibold">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      }
    />
  );
}
