import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Trainova Enterprise. Book a demo, ask questions, or start your digital transformation.",
};

export default function ContactPage() {
  return (
    <Section>
      <AnimateIn variant="fade-up" duration={600}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-[var(--color-on-surface)]">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
            Ready to transform your institution? Get in touch with our team.
          </p>
        </div>
      </AnimateIn>
    </Section>
  );
}
