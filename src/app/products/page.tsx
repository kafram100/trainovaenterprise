import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the Trainova Enterprise product ecosystem - School OS, Novagrade.ai, Smart Timetable, EdTech, and Campus.",
};

export default function ProductsPage() {
  return (
    <Section>
      <AnimateIn variant="fade-up" duration={600}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-[var(--color-on-surface)]">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Five integrated platforms powering modern education.
          </p>
        </div>
      </AnimateIn>
    </Section>
  );
}
