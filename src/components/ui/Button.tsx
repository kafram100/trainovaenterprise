import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-[var(--color-primary)] text-white hover:brightness-110 shadow-sm",
      secondary:
        "bg-[var(--color-secondary)] text-white hover:brightness-110 shadow-sm",
      outline:
        "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
      ghost:
        "text-[var(--color-on-surface)] hover:bg-[var(--color-surface-variant)]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm gap-2",
      md: "h-11 px-6 text-base gap-2",
      lg: "h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg gap-2",
    };

    if (props.as === "a" && props.href) {
      return (
        <a
          href={props.href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
