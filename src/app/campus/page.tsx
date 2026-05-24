import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "Trainova Campus",
  description: "Educational media, campus news, scholarships, and academic resources for students across Africa.",
};

const categories = [
  {
    title: "Campus News",
    desc: "Stay updated with the latest campus events, announcements, and student activities.",
  },
  {
    title: "Scholarships",
    desc: "Discover scholarship opportunities and financial aid for students across Africa.",
  },
  {
    title: "Academic Resources",
    desc: "Access learning materials, study guides, and educational articles.",
  },
  {
    title: "Opportunities",
    desc: "Find internships, fellowships, and career opportunities for students.",
  },
];

export default function CampusPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="fade-right" duration={600}>
            <div>
              <Badge variant="primary">Student Platform</Badge>
              <h1 className="mt-4 font-heading text-4xl font-bold text-[var(--color-on-surface)] sm:text-5xl">
                Trainova Campus
              </h1>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                An educational media and student-focused platform delivering
                educational updates, opportunities, campus news, and academic
                resources to learners across Africa.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-left" delay={200} duration={600}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
              <Image
                src="/images/teacher-whiteboard.jpg"
                alt="African teacher explaining to students"
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
              Explore Resources
            </h2>
          </div>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((c, i) => (
            <StaggerItem key={c.title} index={i} baseDelay={200} stepDelay={120}>
              <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-[var(--color-on-surface)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
                  {c.desc}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </div>
      </Section>
    </>
  );
}
