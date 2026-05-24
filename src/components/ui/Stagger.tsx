"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  baseDelay?: number;
  stepDelay?: number;
}

export function StaggerGrid({
  children,
  className,
  baseDelay = 100,
  stepDelay = 100,
}: StaggerGridProps) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={cn("", className)}>
      {inView
        ? children
        : // Render hidden placeholders so layout doesn't jump
          children
      }
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
  baseDelay = 100,
  stepDelay = 100,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  baseDelay?: number;
  stepDelay?: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const delay = baseDelay + index * stepDelay;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out",
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
