import { cn } from "@/lib/utils";
import React from "react";

const AuthTemplate: React.FC<{
    title?: React.ReactNode,
    description?: React.ReactNode,
    body?: React.ReactNode,
    className?: string,
    emoji?: {
      symbol: string
      label: string,
    },
  }> = ({ className="", title="", description="", emoji={symbol: "", label: ""}, body="" }) => {
  return (
      <section className={cn("w-full flex justify-center", className)}>
        <div className="w-full max-w-[416px]">
          {emoji.symbol ? <div className="flex justify-center text-6xl font-semibold w-full">
          <div className="flex items-center justify-center px-5 w-[106px] h-[106px] rounded-full bg-neutral-100" role="emoji" aria-label={emoji.label}>
            {emoji.symbol}
          </div>
        </div> : <></>}
        <div className="mt-6 w-full">
          {(title || description) ? <div className="w-full">
            {title ? <h1 className="text-3xl font-semibold text-center text-accent-foreground">
              {title}
            </h1> : <></>}
            {description ? <p className="mt-3 w-full text-sm text-center text-secondary-foreground">
              {description}
            </p> : <></>}
          </div> : <></>}
          {body}
        </div>
      </div>
    </section>
  )
}
AuthTemplate.displayName = "AuthTemplate"

export { AuthTemplate }