import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Trainova Enterprise and our mission to build the digital infrastructure for education in Africa.",
};

const values = [
  {
    title: "Innovation",
    desc: "We build modern solutions that transform how institutions operate and students learn.",
  },
  {
    title: "Simplicity",
    desc: "Complex problems deserve simple, elegant solutions that anyone can use.",
  },
  {
    title: "Accessibility",
    desc: "Quality educational technology should be accessible to every institution in Africa.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="fade-right" duration={600}>
            <div>
              <h1 className="font-heading text-4xl font-bold text-[var(--color-on-surface)] sm:text-5xl">
                About Trainova Enterprise
              </h1>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                Trainova Enterprise is a modern educational technology company
                building intelligent digital systems, practical technology
                training, and educational infrastructure for schools, institutions,
                educators, and students across Africa.
              </p>
              <p className="mt-4 text-[var(--color-on-surface-variant)] leading-relaxed">
                We combine education and technology to create scalable systems
                that simplify learning, administration, assessments, and
                innovation. Our name - Trainova - comes from{" "}
                <strong>Training + Innovation</strong>.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-left" delay={200} duration={600}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
              <Image
                src="/images/it-class-coding.jpg"
                alt="African students learning coding in a modern IT class"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
          </AnimateIn>
        </div>
      </Section>

      <Section background="muted">
        <AnimateIn variant="fade-up" duration={500}>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)]">
              Our Core Values
            </h2>
          </div>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <StaggerItem key={v.title} index={i} baseDelay={200} stepDelay={150}>
              <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-[var(--color-on-surface)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
                  {v.desc}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </div>
      </Section>
    </>
  );
}
