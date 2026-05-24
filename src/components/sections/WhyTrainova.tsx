import { Shield, Zap, Globe, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

const reasons = [
  {
    icon: Shield,
    title: "Built for Africa",
    description:
      "Designed specifically for African educational institutions, understanding local needs, infrastructure, and challenges.",
  },
  {
    icon: Zap,
    title: "AI-Powered Efficiency",
    description:
      "Reduce administrative workload by up to 70% with intelligent automation and AI-assisted workflows.",
  },
  {
    icon: Globe,
    title: "Scalable Infrastructure",
    description:
      "From small schools to large universities - our ecosystem scales with your institution's growth.",
  },
  {
    icon: Users,
    title: "Institution-First Approach",
    description:
      "Every feature is designed to solve real problems faced by educators, administrators, and students daily.",
  },
];

export function WhyTrainova() {
  return (
    <Section id="why-trainova" background="muted">
      <AnimateIn variant="fade-up" duration={500}>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl">
            Why Trainova?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
            We are not just building software - we are building the digital
            infrastructure for the future of education in Africa.
          </p>
        </div>
      </AnimateIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {reasons.map((reason, i) => (
          <StaggerItem key={reason.title} index={i} baseDelay={200} stepDelay={120}>
            <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110">
                <reason.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-on-surface)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                {reason.title}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                {reason.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </div>
    </Section>
  );
}
