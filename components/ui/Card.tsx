import { type HTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

const variants = {
  default:
    "border border-border bg-card text-card-foreground shadow-[0_1px_0_rgb(255_255_255/0.03)_inset]",
  interactive:
    "border border-border bg-card text-card-foreground shadow-[0_1px_0_rgb(255_255_255/0.03)_inset] transition-all duration-200 hover:border-primary/35 hover:shadow-[0_12px_40px_color-mix(in_srgb,var(--primary)_12%,transparent)]",
  glass:
    "border border-border/80 bg-card/80 text-card-foreground shadow-[0_1px_0_rgb(255_255_255/0.04)_inset] backdrop-blur-xl",
} as const;

export type CardVariant = keyof typeof variants;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-2xl p-5 sm:p-6", variants[variant], className)}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";
