import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

const solutions = [
  {
    title: "School Infrastructure",
    description:
      "Complete digital administration for student management, attendance, fees, and institutional operations.",
    image: "/images/classroom-nigeria.jpg",
  },
  {
    title: "AI Assessment",
    description:
      "Intelligent grading, CBT examinations, and analytics powered by artificial intelligence.",
    image: "/images/computer-lab.jpg",
  },
  {
    title: "Timetable Automation",
    description:
      "Smart scheduling with clash prevention and workload balancing for institutions of any size.",
    image: "/images/men-laptops.jpg",
  },
];

export function SolutionsOverview() {
  return (
    <Section id="solutions" background="muted">
      <AnimateIn variant="fade-up" duration={500}>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl">
            Comprehensive Education Solutions
          </h2>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
            Everything your institution needs to modernize operations, streamline
            assessments, and improve learning outcomes.
          </p>
        </div>
      </AnimateIn>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, i) => (
          <StaggerItem key={solution.title} index={i} baseDelay={200} stepDelay={150}>
            <Card key={solution.title} className="overflow-hidden p-0 group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute bottom-3 left-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 transition-colors duration-300 group-hover:bg-[var(--neutral-98)]">
                <h3 className="text-xl font-semibold text-[var(--color-on-surface)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                  {solution.title}
                </h3>
                <p className="mt-2 text-[var(--color-on-surface-variant)] leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </div>
    </Section>
  );
}
