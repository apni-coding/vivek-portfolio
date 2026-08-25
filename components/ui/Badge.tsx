import { type HTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

const variants = {
  default: "border border-border bg-muted text-muted-foreground",
  primary:
    "border border-primary/25 bg-primary/10 text-primary dark:text-primary",
  success:
    "border border-success/25 bg-success/10 text-success dark:text-success",
  warning:
    "border border-warning/25 bg-warning/10 text-warning dark:text-warning",
} as const;

export type BadgeVariant = keyof typeof variants;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-medium tracking-wide",
          variants[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";
