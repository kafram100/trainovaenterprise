"use client";

import { ArrowLeft } from "lucide-react";
import { useSection } from "@/hooks/useSection";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function BlogSection() {
  const { setSection } = useSection();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setSection("home")}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up" duration={600}>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-[var(--color-on-surface)]">
                Blog
              </h1>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
                Insights and updates from the Trainova team.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
