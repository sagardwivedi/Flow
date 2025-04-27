import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  /** Icon to display inside the input */
  icon?: React.ReactNode;
  /** Position of the icon: 'left' or 'right' */
  iconPosition?: "left" | "right";
}

export function Input({
  className,
  type = "text",
  icon,
  iconPosition = "left",
  ...props
}: InputProps) {
  // Adjust padding when icon is present
  const paddingClasses = icon
    ? iconPosition === "left"
      ? "pl-9"
      : "pr-9"
    : "";

  return (
    <div className="relative w-full">
      {icon && iconPosition === "left" && (
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          {icon}
        </div>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          paddingClasses,
          className
        )}
        {...props}
      />

      {icon && iconPosition === "right" && (
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          {icon}
        </div>
      )}
    </div>
  );
}
