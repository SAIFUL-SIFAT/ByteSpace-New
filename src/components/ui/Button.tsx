import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary (Lime)
            "bg-secondary-500 text-neutral-950 hover:bg-secondary-600": variant === "primary",
            // Secondary (White/Light for dark backgrounds)
            "bg-neutral-50 text-primary-600 hover:bg-neutral-100": variant === "secondary",
            // Ghost (Transparent)
            "bg-transparent text-neutral-50 hover:bg-white/10": variant === "ghost",
          },
          {
            "h-10 px-6 py-2 text-label-m": size === "default",
            "h-8 px-4 text-label-s": size === "sm",
            "h-12 px-8 py-3 text-label-l": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
