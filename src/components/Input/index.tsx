import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Size = 'default' | 'sm' | 'lg' | 'icon'

type Props = {
  name: string
  label: string
  register: UseFormRegister<FieldValues & any>
  required?: boolean
  size?: Size
  type?: 'text' | 'number' | 'password' | 'email'
  validate?: (value: string) => boolean | string
  className?: string
  placeholder?: string
  error?: any
}


const inputVariants = cva(
  cn(
    "whitespace-nowrap ring-offset-background transition-colors overflow-hidden mt-1.5 text-base text-accent-foreground rounded-lg shadow-sm",
    "disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2",
    "border border-slate-300 border-solid focus-visible:border-primary bg-white text-accent-foreground placeholder:text-slate-500 autofill:!bg-white",
  ),
  {
    variants: {
      size: {
        default: "h-11 px-3.5 py-2.5",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export const Input: React.FC<Props> = ({
  name,
  label,
  required,
  register,
  type = 'text',
  validate,
  size = 'default',
  className = '',
  placeholder='',
  error = null,
}) => {
  return (
    <div className="flex flex-col w-full gap-1.5">
      <label htmlFor="name" className="text-sm font-medium leading-none text-accent-foreground">
        {`${label}${required ? '*' : ''}`}
      </label>
      <input
        className={inputVariants({size, className})}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required,
          validate,
          ...(type === 'email'
            ? {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email',
                },
              }
            : {}),
        })}
      />
      {error && (
        <div className="mt-1 text-rose-500 text-sm">
          {!error?.message && error?.type === 'required'
            ? 'This field is required'
            : error?.message}
        </div>
      )}
    </div>
  )
}
