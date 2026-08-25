import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_10px_28px_color-mix(in_srgb,var(--primary)_30%,transparent)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-secondary text-secondary-foreground shadow-sm shadow-secondary/20 hover:brightness-110 active:brightness-95",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-white/5 active:bg-white/10 dark:hover:bg-white/5",
  ghost:
    "bg-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground active:bg-white/10",
} as const;

export const buttonSizes = {
  sm: "h-8 gap-1.5 rounded-lg px-3 text-small",
  md: "h-10 gap-2 rounded-xl px-4 text-nav",
  lg: "h-11 gap-2.5 rounded-xl px-5 text-body",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export function getButtonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={getButtonClassName({ variant, size, className })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
