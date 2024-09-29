"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { AuthTemplate } from "./AuthTemplate";
import { useForm, FieldValues } from "react-hook-form";
import { Button, LinkButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import Link from "next/link";

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
  const [formData, setFormData] = useState({
    fullname: userName,
    email: userEmail,
    password: "",
    terms: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InviteSignUpFormData>({
    defaultValues: {
      userEmail: "",
      userName: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Submitted data: ", data.email, data.password);
  };

  return (
    <AuthTemplate
      title={
        <h1 className="self-start text-3xl font-semibold leading-10 text-accent-foreground">
          <p>Welcome to Play.CV, </p>
          <p>{`${userName}!👋`}</p>
        </h1>
      }
      description={
        <p className="gap-1 mt-3 w-full text-sm text-center text-secondary-foreground">
          You've been invited by your institution to join our platform. Let's
          finish setting up your account.
        </p>
      }
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
