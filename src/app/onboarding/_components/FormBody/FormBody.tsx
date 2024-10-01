import { cn } from "@/lib/utils";
import React from "react";
import DecorateButton from "../DecorateButton";

const FormBody: React.FC<{
  title: string;
  children?: React.ReactNode | undefined;
  titleClassName?: string;
}> = ({ title = "", titleClassName = "", children }) => {
  return (
    <section className="flex flex-col items-center justify-center mt-28 max-w-full w-[908px] max-md:mt-4">
      <div className="flex w-full justify-center">
        <h1
          className={cn(
            "text-center text-black dark:text-white max-md:max-w-full text-4xl font-semibold",
            titleClassName
          )}
        >
          {title}
        </h1>
        {/* <DecorateButton /> */}
      </div>
      {children}
    </section>
  );
};
FormBody.displayName = "FormBody";

export { FormBody };
