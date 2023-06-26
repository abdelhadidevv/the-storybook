import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "flex justify-center items-center gap-[4px] font-poppins font-medium text-sm disabled:cursor-not-allowed",
  {
    variants: {
      theme: {
        filled:
          "bg-primary-100 text-white hover:bg-primary-200 disabled:text-gray disabled:bg-ghost-300",
        outlined:
          "bg-none border border-primary-100 text-primary-100 enabled:hover:bg-primary-300 enabled:active:bg-primary-400 disabled:text-gray disabled:border-ghost-300",
        ghost:
          "bg-ghost-100 text-primary-100 enabled:hover:bg-ghost-200 enabled:active:bg-ghost-300 disabled:text-gray disabled:bg-ghost-300",
        text: "bg-transparent text-primary-100 enabled:hover:bg-primary-300 enabled:active:bg-primary-400 disabled:text-gray",
      },
      size: {
        large: "h-14 px-12 py-4", //w-[171px]
        medium: "h-12 px-10 py-4", //w-[155px]
        small: "h-10 px-8 py-4", //w-[139px]
        xsmall: "h-8 px-4 py-4", //w-[107px]
      },
      round: {
        sm: "rounded",
        lg: "rounded-lg",
        xl: "rounded-2xl",
        full: "rounded-[32px]",
      },
    },
    defaultVariants: {
      theme: "filled",
      size: "large",
      round: "sm",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  theme,
  size,
  round,
  loading,
  ...rest
}) => {
  return (
    <button
      className={cn(buttonVariants({ theme, size, round, className }))}
      {...rest}
    >
      {!loading ? (
        children
      ) : (
        <>
          <span className="loading-dots"></span>
          <span className="loading-dots"></span>
          <span className="loading-dots"></span>
        </>
      )}
    </button>
  );
};

export default Button;
