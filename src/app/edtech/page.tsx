import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

export const metadata: Metadata = {
  title: "Trainova EdTech",
  description: "Practical digital skills training. Learn Graphic Design, Frontend Development, WordPress, and UI/UX with AI.",
};

const courses = [
  {
    title: "Graphic Design + AI",
    desc: "Master modern design tools and AI-powered creative workflows.",
  },
  {
    title: "Frontend Development + AI",
    desc: "Build modern web applications using AI-assisted development.",
  },
  {
    title: "WordPress Development",
    desc: "Create professional websites and CMS solutions with WordPress.",
  },
  {
    title: "UI/UX Design + AI",
    desc: "Design user-centered interfaces enhanced by AI tools.",
  },
];

export default function EdTechPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn variant="fade-right" duration={600}>
            <div>
              <Badge variant="secondary">Practical Training</Badge>
              <h1 className="mt-4 font-heading text-4xl font-bold text-[var(--color-on-surface)] sm:text-5xl">
                Trainova EdTech
              </h1>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                A practical digital skills training platform for JHS students, SHS
                students, university undergraduates, and professionals who want to
                learn relevant soft skills to support their careers and livelihoods.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-left" delay={200} duration={600}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
<Image
              src="/images/youths-laptop-classroom.jpg"
              alt="African youths learning practical digital skills at Trainova EdTech"
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
              Available Courses
            </h2>
          </div>
        </AnimateIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {courses.map((c, i) => (
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
