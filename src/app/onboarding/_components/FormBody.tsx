import { cn } from "@/lib/utils";
import React from "react";

const FormBody: React.FC<{
  title: string;
  body: React.ReactNode;
  titleClassName?: string;
}> = ({ title = "", body = "", titleClassName = "" }) => {
  return (
    <section className="flex flex-col items-center justify-center mt-28 max-w-full w-[908px] max-md:mt-10">
      <h1 className={cn("text-center text-black dark:text-white max-md:max-w-full", titleClassName)} >
        {title}
      </h1>
      {body}
    </section>
  );
};
FormBody.displayName = "FormBody";

export { FormBody };
