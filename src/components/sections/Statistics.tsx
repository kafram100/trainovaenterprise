"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { statistics } from "@/data/statistics";
import { useInView } from "@/hooks/useInView";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  const num = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (!inView || !num) return;
    setCount(0);
    const duration = 2200;
    const steps = 40;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <div ref={ref} className="text-center transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)' }}>
      <div className="font-heading text-4xl font-bold text-[var(--color-primary)] sm:text-5xl transition-all duration-300 hover:scale-105">
        {num ? `${count}+` : value}
      </div>
      <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
        {label}
      </p>
    </div>
  );
}

export function Statistics() {
  return (
    <Section id="statistics">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((stat, i) => (
          <AnimateIn key={stat.label} variant="fade-up" delay={i * 150} duration={500}>
            <AnimatedCounter
              value={stat.value}
              label={stat.label}
            />
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
