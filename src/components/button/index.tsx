import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

type Size = 'default' | 'sm' | 'lg' | 'icon'

const buttonVariants = cva(
  cn(
    "whitespace-nowrap transition-colors overflow-hidden mt-1.5 text-base rounded-lg shadow-sm",
    "disabled:pointer-events-none disabled:opacity-50 focus-visible:border-primary",
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "bg-white text-accent-foreground shadow-none hover:bg-accent",
      },
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

const linkButtonVariants = cva(
  cn(
    "whitespace-nowrap transition-colors overflow-hidden mt-1.5 text-base rounded-lg bg-white text-accent-foreground",
    "hover:bg-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer text-center",
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
    asChild?: boolean
    href?: string
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const LinkButton: React.FC<{
  children: React.ReactNode,
  className?: string,
  size?: Size,
  href?: string,
}> = ({ className, size, children, href="#" }) => {
  return (
    <Link
      className={cn(linkButtonVariants({ size, className }))}
      href={href}
    >
      {children}
    </Link>
  )
}
Button.displayName = "LinkButton"

export { LinkButton, linkButtonVariants, Button, buttonVariants }