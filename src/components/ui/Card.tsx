import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className, children, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-[var(--color-outline-variant)] p-6",
        hover && "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:shadow-lg active:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}
