import { AnimateIn } from "@/components/ui/AnimateIn";

const categories = [
  "Universities",
  "Colleges of Education",
  "Nursing Training Colleges",
  "Senior High Schools",
  "Junior High Schools",
];

export function TrustedInstitutions() {
  return (
    <section className="border-y border-[var(--color-outline-variant)] bg-[var(--neutral-98)] py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fade-up" duration={500}>
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-[var(--color-on-surface-variant)]">
            Trusted by institutions across Africa
          </p>
        </AnimateIn>
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
          {categories.map((name, i) => (
            <AnimateIn key={name} variant="fade-up" delay={100 + i * 80} duration={500}>
              <div className="text-base font-semibold text-[var(--neutral-50)] transition-all duration-300 hover:text-[var(--color-primary)] hover:scale-105 cursor-default">
                {name}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
