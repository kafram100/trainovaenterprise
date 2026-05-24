import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" background="muted">
      <AnimateIn variant="fade-up" duration={500}>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl">
            Trusted by Educators
          </h2>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
            Hear from the institutions and learners already using Trainova
            Enterprise.
          </p>
        </div>
      </AnimateIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <StaggerItem key={t.id} index={i} baseDelay={200} stepDelay={150}>
            <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <span className="absolute -top-1 -left-1 text-4xl leading-none text-[var(--color-primary)]/20 font-serif transition-all duration-300 group-hover:text-[var(--color-primary)]/40">
                  &ldquo;
                </span>
                <blockquote className="text-[var(--color-on-surface-variant)] leading-relaxed relative z-10">
                  {t.content}
                </blockquote>
              </div>
              <div className="mt-5 border-t border-[var(--color-outline-variant)] pt-4 transition-colors duration-300 group-hover:border-[var(--color-primary)]/20">
                <div className="font-semibold text-[var(--color-on-surface)] text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-[var(--color-on-surface-variant)]">
                  {t.role}, {t.institution}
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </div>
    </Section>
  );
}
