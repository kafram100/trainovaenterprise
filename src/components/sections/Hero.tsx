"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ImageSlideshow } from "@/components/sections/ImageSlideshow";
import { useSection } from "@/hooks/useSection";

export function Hero() {
  const { setSection } = useSection();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--neutral-98)] to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <AnimateIn variant="fade-up" duration={600}>
              <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
                <Badge variant="primary">EdTech Ecosystem</Badge>
                <Badge variant="secondary">AI-Powered</Badge>
              </div>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={150} duration={600}>
              <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[var(--color-on-surface)] sm:text-5xl lg:text-6xl">
                Building Smarter Education Systems for{" "}
                <span className="text-[var(--color-primary)]">Africa</span>.
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={300} duration={600}>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--color-on-surface-variant)] max-w-xl">
                Trainova Enterprise develops innovative educational software,
                intelligent assessment systems, digital school infrastructure, and
                practical technology learning solutions for modern institutions.
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={450} duration={600}>
              <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Button variant="primary" size="md" onClick={() => setSection("solutions")} className="w-full sm:w-auto">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="md" onClick={() => setSection("edtech")} className="w-full sm:w-auto">
                  <Play className="h-4 w-4" />
                  Start Learning
                </Button>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn variant="scale-in" delay={200} duration={700}>
            <div className="relative hidden lg:block">
              <div className="relative animate-[float_6s_ease-in-out_infinite]">
                <ImageSlideshow />
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-[var(--color-primary)]/10 blur-2xl animate-[pulse-glow_4s_ease-in-out_infinite]" />
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-xl bg-[var(--color-secondary)]/10 blur-2xl animate-[pulse-glow_4s_ease-in-out_infinite_1s]" />
            </div>
          </AnimateIn>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-primary)]/5 blur-3xl animate-[pulse-glow_6s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[var(--color-tertiary)]/5 blur-3xl animate-[pulse-glow_6s_ease-in-out_infinite_2s]" />
      </div>
    </section>
  );
}
