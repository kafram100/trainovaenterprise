import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Blog",
  description: "Educational technology insights, campus news, and updates from Trainova Enterprise.",
};

export default function BlogPage() {
  return (
    <Section>
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
    </Section>
  );
}
