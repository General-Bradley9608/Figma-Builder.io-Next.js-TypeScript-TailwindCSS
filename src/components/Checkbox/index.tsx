import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type Size = "default" | "lg";

type Props = {
  size: Size;
  text: React.ReactNode;
  className?: string;
};

const inputVariants = cva(cn("rounded border border-gray-300 border-solid"), {
  variants: {
    size: {
      default: "size-4 rounded-sm",
      lg: "size-5 rounded-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Checkbox: React.FC<Props> = ({
  size = "default",
  text,
  className = "",
}) => {
  return (
    <label className="flex gap-2 items-center">
      <input type="checkbox" className={inputVariants({ size, className })} />
      <span className="text-sm font-medium text-accent-foreground">{text}</span>
    </label>
  );
};

export { Checkbox };
