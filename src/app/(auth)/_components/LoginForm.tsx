"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { AuthTemplate } from "./AuthTemplate";
import { useForm, FieldValues } from "react-hook-form";
import { Button, LinkButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";

import Link from "next/link";

type loginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [accountType, setAccountType] = useState("individual");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Submitted data: ", data.email, data.password);
  };

  return (
    <AuthTemplate
      title="Welcome Back👋"
      description={
        <p className="gap-1 mt-3 w-full text-sm text-center text-secondary-foreground">
          Ready to continue where you left off? Let's get you logged in.
        </p>
      }
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
            <div className="flex justify-between w-full mt-6">
              <Checkbox />
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
