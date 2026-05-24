import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FinalCTA() {
  return (
    <Section id="contact" background="primary">
      <AnimateIn variant="scale-in" duration={600}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold">
            Ready to Transform Your Institution?
          </h2>
          <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto">
            Join hundreds of institutions across Africa using Trainova Enterprise
            to modernize education.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 rounded-xl bg-white text-[var(--color-primary)] font-medium text-base transition-all duration-200 hover:brightness-95"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#solutions"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 rounded-xl text-white font-medium text-base transition-all duration-200 hover:bg-white/10"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
