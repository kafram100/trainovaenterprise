import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export function Badge({
  children,
  className,
  variant = "primary",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    secondary:
      "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
    tertiary:
      "bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
