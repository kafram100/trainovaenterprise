"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "none";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "span";
}

const variants: Record<AnimationVariant, string> = {
  "fade-up": "translate-y-8",
  "fade-down": "-translate-y-8",
  "fade-left": "translate-x-8",
  "fade-right": "-translate-x-8",
  "scale-in": "scale-95",
  none: "",
};

export function AnimateIn({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 500,
  as: Tag = "div",
}: AnimateInProps) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all ease-out",
        inView ? "translate-y-0 translate-x-0 scale-100 opacity-100" : "opacity-0",
        !inView && variants[variant],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
