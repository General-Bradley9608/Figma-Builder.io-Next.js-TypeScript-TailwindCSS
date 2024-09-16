'use client';

import {useState, ChangeEvent, FormEvent} from 'react';

interface FormField {
  label: string;
  type: string;
  placeholder: string;
  hint?: string;
}

const individualFormFields: FormField[] = [
  { label: "Full Name*", type: "text", placeholder: "Enter your full name" },
  { label: "Email*", type: "email", placeholder: "Enter your email" },
  { label: "Password*", type: "password", placeholder: "Create a password", hint: "Must be at least 8 characters." }
];

const entityFormFields: FormField[] = [
  { label: "Full Name*", type: "text", placeholder: "Enter your full name" },
  { label: "Work Email*", type: "email", placeholder: "Enter your work email" },
  { label: "Password*", type: "password", placeholder: "Create a password", hint: "Must be at least 8 characters." }
];

export default function SignUpForm() {
  const [accountType, setAccountType] = useState('individual');

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    terms: false
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
      if (accountType === 'individual') window.location.href = '/welcome';
      else window.location.href = '/welcome/entitywelcome';
    }
    else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <section className="flex flex-col self-center w-full max-w-[416px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold leading-none text-zinc-900">
          Create your Play.CV account
        </h1>
        <p className="mt-2 text-sm leading-none text-slate-600">
          Start your journey to mastering interviews.
        </p>
      </div>
      <div className="flex gap-2 items-center p-1.5 mt-6 w-full text-base font-semibold bg-gray-50 rounded-lg border border-gray-100 border-solid">
        <button onClick={() => setAccountType('individual')} className={`overflow-hidden flex-1 shrink gap-2 self-stretch px-3.5 py-2.5 my-auto rounded-lg ${accountType === 'individual' ? 'text-white bg-indigo-600 shadow' : 'text-zinc-900'}`}>
          I'm an Individual
        </button>
        <button onClick={() => setAccountType('entity')} className={`overflow-hidden flex-1 shrink gap-2 self-stretch px-3.5 py-2.5 my-auto rounded-lg ${accountType === 'entity' ? 'text-white bg-indigo-600 shadow' : 'text-zinc-900'}`}>
          I'm an Entity
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-6 w-full rounded-xl">
        {accountType === 'individual' ? (
          individualFormFields.map((field, index) => (
            <div key={index} className="flex flex-col mt-5 w-full">
              <label htmlFor={`field-${index}`} className="text-sm font-medium leading-none text-zinc-900">
                {field.label}
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                <input
                  type={field.type}
                  id={`field-${index}`}
                  name={field.label.toLowerCase().replace(/\s/g, '').slice(0, -1)}
                  // value={formData[field.label.trim().toLowerCase() as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] bg-transparent border-none focus:outline-none"
                  required
                />
                {field.type === 'password' && (
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
                )}
              </div>
              {field.hint && <p className="mt-1.5 text-sm leading-none text-slate-600">{field.hint}</p>}
            </div>
          ))) : (
          entityFormFields.map((field, index) => (
            <div key={index} className="flex flex-col mt-5 w-full">
              <label htmlFor={`field-${index}`} className="text-sm font-medium leading-none text-zinc-900">
                {field.label}
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
                <input
                  type={field.type}
                  id={`field-${index}`}
                  name={field.label.toLowerCase().replace(/\s/g, '').slice(0, -1)}
                  // value={formData[field.label.trim().toLowerCase() as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] bg-transparent border-none focus:outline-none"
                  required
                />
                {field.type === 'password' && (
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4115ecb26c7f841f917bedbe43671a09cc572ca73c215d984e2e16b5eeefa78a?placeholderIfAbsent=true&apiKey=03171c0a35c24f47becb1e98f7ef506f" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" alt="" />
                )}
              </div>
              {field.hint && <p className="mt-1.5 text-sm leading-none text-slate-600">{field.hint}</p>}
            </div>
          ))
        )}
        <div className="flex gap-3 items-start mt-6 w-full">
          <input type="checkbox" checked={formData.terms} onChange={(e) => setFormData({ ...formData, terms: e.target.checked })} id="terms" name="terms" className="w-5 h-5 bg-white rounded-md border border-gray-300 border-solid" />
          <label htmlFor="terms" className="flex-1 shrink text-sm leading-5 text-gray-900">
            I agree to Play.CV's <a href="#" className="underline">Terms & Conditions</a> and acknowledge the <a href="#" className="underline">Privacy Policy</a>
          </label>
        </div>
        <button type="submit" onClick={isAccountValid} className="flex items-start mt-6 w-full text-base font-semibold text-white rounded-lg">
          <span className="overflow-hidden flex-1 shrink gap-2 self-stretch px-5 py-2.5 w-full bg-indigo-600 rounded-lg border border-indigo-600 border-solid shadow-sm min-w-[240px]">
            Create account
          </span>
        </button>
      </form>
    </section>
  );
};