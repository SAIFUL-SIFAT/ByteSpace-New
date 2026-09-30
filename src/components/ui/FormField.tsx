import * as React from "react";
import { cn } from "@/lib/cn";

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <label htmlFor={inputId} className="text-body-s font-medium text-neutral-950">
          {label}
        </label>
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full h-12 px-4 rounded-xl border bg-white text-body-m text-neutral-950 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-colors",
            error ? "border-red-500 focus:ring-red-500" : "border-neutral-200"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-label-xs text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";
