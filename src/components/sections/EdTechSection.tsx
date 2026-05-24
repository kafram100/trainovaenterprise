import Image from "next/image";
import { Code2, Monitor, Palette, Layout, Award, MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

const courses = [
  { icon: Palette, title: "Graphic Design + AI", desc: "Master modern design tools and AI-powered creative workflows for professional visual content." },
  { icon: Code2, title: "Frontend Development + AI", desc: "Build modern web applications using AI-assisted development tools and frameworks." },
  { icon: Monitor, title: "WordPress Development", desc: "Create professional websites and CMS solutions with WordPress from scratch." },
  { icon: Layout, title: "UI/UX Design + AI", desc: "Design user-centered interfaces enhanced by AI prototyping and usability testing." },
  { icon: Award, title: "Certificates", desc: "Earn verified certificates upon completion to showcase your skills to employers." },
  { icon: MessageCircle, title: "Mentorship", desc: "Get guidance from industry experts through one-on-one mentoring sessions." },
];

export function EdTechSection() {
  return (
    <section id="edtech" className="scroll-mt-16 sm:scroll-mt-20 py-16 sm:py-20 md:py-28 bg-[var(--color-surface-variant)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 mb-12 sm:mb-20">
          <AnimateIn variant="fade-right" duration={600}>
            <div>
              <span className="inline-flex rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)] mb-4">
                Product 04
              </span>
              <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl lg:text-5xl">
                Trainova EdTech
              </h2>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                A practical digital skills training platform for JHS students, SHS
                students, university undergraduates, and professionals who want to
                learn relevant soft skills to support their careers and livelihoods.
              </p>
              <ul className="mt-6 space-y-3">
                {["Designed for youths and young professionals", "Hands-on project-based learning", "Industry-recognized certificates", "Learn at your own pace"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <Code2 className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-left" delay={200} duration={600}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/young-professionals-collaborating.jpg" alt="Youths learning digital skills at Trainova EdTech" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw" />
            </div>
          </AnimateIn>
        </div>

        <AnimateIn variant="fade-up" duration={500}>
          <h3 className="text-center font-heading text-2xl font-bold text-[var(--color-on-surface)] mb-12">
            Learn Skills That Matter
          </h3>
        </AnimateIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <StaggerItem key={c.title} index={i} baseDelay={200} stepDelay={100}>
              <div className="group rounded-2xl border border-[var(--color-outline-variant)] bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-[var(--color-on-surface)]">{c.title}</h4>
                <p className="mt-1.5 text-sm text-[var(--color-on-surface-variant)]">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
