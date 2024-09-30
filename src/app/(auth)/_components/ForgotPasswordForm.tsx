'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { Input } from '@/components/Input';
import { Button, LinkButton } from '@/components/Button';
import { AuthTemplate } from './AuthTemplate';

type forgotPasswordFormData = {
  email: string;
};

export default function ForgotPasswordForm() {
  const [sent, setSent] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<forgotPasswordFormData>({
    defaultValues: {
      email: '',
    },
  });
  
  const onSubmit = (data: FieldValues) => {
    console.log('Submitted data: ', data.email);
    isEmailValid(data.email);
  };

  // Email validation, must be integrated with backend using API
  const isEmailValid = (email: string) => {
    if (email === "hello@example.com") {
      // window.location.href = '/forgotpassword/emailverification';
      setSent(true);
    } else {
      alert("Email is not valid");
    }
  };

  return (
    sent ?
    <AuthTemplate
      emoji={{symbol: '📧', label: "Email icon"}}
      title='Check Your Inbox!'
      description={
        <>Open your inbox and click the link to reset your password.<br/>(If you don’t see it, check your spam or junk folder.)</>
      }
      body={
        <div className="flex flex-col items-center mt-6 max-w-full w-[416px]">
          <p className="text-sm leading-none text-center text-secondary-foreground">
            Didn't get the email? Click below to resend the link.
          </p>
          <div className="flex flex-col items-end mt-2 w-full text-base font-semibold max-w-[416px]">
            <Button type='submit' className='w-full'>Resend Email</Button>
            <Button variant='link' className='w-full' onClick={()=>setSent(false)}>Go back</Button>
          </div>
        </div>
        }
    /> :
    <AuthTemplate
      emoji={{symbol: '🤷', label: "Confused emoji"}}
      title="Forgot Your Password?"
      description='Enter your email and we’ll send you a link to reset your password.'
      body={
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6 w-full rounded-xl">
          <div className="flex flex-col w-full">
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register}
              required={true}
              error={errors.email}
            />
          </div>
          <div className="flex flex-col gap-2 mt-7 w-full font-semibold">
            <Button type='submit' className='w-full'>Continue</Button>
            <LinkButton href="/login" className='w-full'>Go back</LinkButton>
          </div>
        </form>
      }
    />
  );
}
