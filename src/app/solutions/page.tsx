import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Trainova Enterprise solutions - School OS, Novagrade.ai, and Smart Timetable.",
};

export default function SolutionsPage() {
  return (
    <Section>
      <AnimateIn variant="fade-up" duration={600}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-[var(--color-on-surface)]">
            Our Solutions
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Comprehensive educational technology solutions for modern institutions.
          </p>
        </div>
      </AnimateIn>
    </Section>
  );
}
