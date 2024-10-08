"use client";

import { useState, useCallback } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { AuthTemplate } from "./AuthTemplate";
import { Button, LinkButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";

interface InviteSignUpFormData {
  userName: string;
  userEmail: string;
  password: string;
}

export default function InviteSignUpForm({
  userName,
  userEmail,
  password,
}: InviteSignUpFormData) {
  const router =  useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InviteSignUpFormData>({
    defaultValues: {
      userName: "",
      userEmail: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (data: InviteSignUpFormData) => {
      console.log(data.password);
    },
    [password, router]
  );

  return (
    <AuthTemplate
      title={
        <div className="self-start text-3xl font-semibold leading-10 text-accent-foreground">
          <p>Welcome to Play.CV, </p>
          <p>{`${userName}!👋`}</p>
        </div>
      }
      description="You've been invited by your institution to join our platform. Let's finish setting up your account."
      body={
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full mt-6">
            <Input
              name="name"
              label="Full Name"
              type="text"
              placeholder={userName}
              register={register}
              required={true}
              error={errors.userName}
              disabled={true}
            />
          </div>
          <div className="flex flex-col w-full mt-6">
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder={userEmail}
              register={register}
              required={true}
              error={errors.userEmail}
              disabled={true}
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
          <div className="flex gap-1 justify-center mt-4 w-full text-sm">
            <p className="text-secondary-foreground">
              Already have an account?{" "}
            </p>
            <Link href="/login" className="text-primary">
              Log in
            </Link>
          </div>
        </form>
      }
    />
  );
}
