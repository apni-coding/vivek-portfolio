import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

const sizes = {
  sm: "size-8 rounded-lg",
  md: "size-9 rounded-xl",
  lg: "size-10 rounded-xl",
} as const;

export type IconButtonSize = keyof typeof sizes;

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  size?: IconButtonSize;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = "md", type = "button", disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center text-muted-foreground transition-colors duration-200",
          "hover:bg-white/5 hover:text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);

IconButton.displayName = "IconButton";
