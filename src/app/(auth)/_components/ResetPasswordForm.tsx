"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { AuthTemplate } from "./AuthTemplate";
import { useForm, FieldValues } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { LinkButton } from "@/components/Button";
import { useRouter } from "next/navigation";

interface PasswordFormData {
  password: string;
  confirmPassword: string;
}

export default function PasswordForm() {
  const [changed, setChanged] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormData>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log("Submitted data: ", data.password, data.confirmPassword);
    setChanged(true);
  };

  const onClick = () => {
    router.push("/login");
  };

  return changed ? (
    <AuthTemplate
      emoji={{ symbol: "🚀" }}
      title="Your password has been changed!"
      description={
        <p className="text-sm leading-none text-center text-secondary-foreground">
          You're all set with your new password. You can now use your new
          password to log into your account and continue where you left off.
        </p>
      }
      body={
        <div className="flex flex-col mt-6 w-full rounded-xl">
          <div className="flex flex-col w-full">
            <LinkButton href="/login" className="bg-primary text-primary-foreground" >Login</LinkButton>
          </div>
        </div>
      }
    />
  ) : (
    <AuthTemplate
      emoji={{ symbol: "🔒" }}
      title="Reset Your Password"
      description={
        <p className="text-sm leading-none text-center text-secondary-foreground">
          Choose a new password to secure your account.
        </p>
      }
      body={
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mt-6 w-full rounded-xl"
        >
          <div className="flex flex-col w-full">
            <Input
              name="password"
              label="New Password"
              type="password"
              placeholder="Create a new password"
              register={register}
              required={true}
              error={errors.password}
            />
          </div>
          <div className="flex flex-col w-full mt-7">
            <Input
              name="confirmPassword"
              label="Confirm New Password"
              type="password"
              placeholder="Confirm your new password"
              register={register}
              required={true}
              error={errors.confirmPassword}
            />
          </div>
          <div className="flex flex-col gap-2 mt-7 w-full font-semibold">
            <Button type="submit" className="w-full">
              Continue
            </Button>
            <LinkButton href="/login" className="w-full">
              Go back
            </LinkButton>
          </div>
        </form>
      }
    />
  );
}
