import Image from "next/image";
import { Newspaper, GraduationCap, BookOpen, Briefcase, Share2, MessageSquare } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

const features = [
  { icon: Newspaper, title: "Educational News", desc: "Campus updates, education trends, and academic announcements from across Africa." },
  { icon: GraduationCap, title: "Scholarships", desc: "Curated scholarship opportunities and financial aid options for African students." },
  { icon: BookOpen, title: "Academic Resources", desc: "Learning materials, study guides, and educational articles to support your journey." },
  { icon: Briefcase, title: "Opportunities", desc: "Internships, graduate programs, and career opportunities for students and graduates." },
  { icon: Share2, title: "Social Sharing", desc: "Share articles and opportunities across social platforms to reach more learners." },
  { icon: MessageSquare, title: "Community", desc: "Engage with fellow students through comments, discussions, and knowledge sharing." },
];

export function CampusSection() {
  return (
    <section id="campus" className="scroll-mt-16 sm:scroll-mt-20 py-16 sm:py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 mb-12 sm:mb-20">
          <AnimateIn variant="fade-right" duration={600}>
            <div>
              <span className="inline-flex rounded-full bg-[var(--color-secondary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-secondary)] mb-4">
                Product 05
              </span>
              <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl lg:text-5xl">
                Trainova Campus
              </h2>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                An educational media and student-focused platform delivering
                updates, opportunities, campus news, and academic resources to
                learners across Africa.
              </p>
              <ul className="mt-6 space-y-3">
                {["Latest campus news and trends", "Verified scholarship listings", "Free academic resources", "Career opportunity board"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <Newspaper className="h-4 w-4 text-[var(--color-secondary)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-left" delay={200} duration={600}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/teacher-whiteboard.jpg" alt="Trainova Campus" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw" />
            </div>
          </AnimateIn>
        </div>

        <AnimateIn variant="fade-up" duration={500}>
          <h3 className="text-center font-heading text-2xl font-bold text-[var(--color-on-surface)] mb-12">
            Your Student Resource Hub
          </h3>
        </AnimateIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <StaggerItem key={f.title} index={i} baseDelay={200} stepDelay={100}>
              <div className="group rounded-2xl border border-[var(--color-outline-variant)] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] transition-all duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-[var(--color-on-surface)]">{f.title}</h4>
                <p className="mt-1.5 text-sm text-[var(--color-on-surface-variant)]">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
