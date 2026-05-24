"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";
import { products } from "@/data/products";
import { useSection } from "@/hooks/useSection";

const productImages: Record<string, string> = {
  "school-os": "/images/teacher-students.jpg",
  novagrade: "/images/computer-lab.jpg",
  "smart-timetable": "/images/it-class-coding.jpg",
  edtech: "/images/youths-laptop-classroom.jpg",
  campus: "/images/teacher-whiteboard.jpg",
};

const sectionIds: Record<string, "school-os" | "novagrade" | "smart-timetable" | "edtech" | "campus"> = {
  "school-os": "school-os",
  novagrade: "novagrade",
  "smart-timetable": "smart-timetable",
  edtech: "edtech",
  campus: "campus",
};

export function ProductShowcase() {
  const { setSection } = useSection();

  return (
    <Section id="products">
      <AnimateIn variant="fade-up" duration={500}>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl">
            Our Product Ecosystem
          </h2>
          <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
            Five integrated platforms designed to work together as the digital
            infrastructure for modern education.
          </p>
        </div>
      </AnimateIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => {
          const Icon = product.icon;
          const sectionId = sectionIds[product.id];
          return (
            <StaggerItem key={product.id} index={i} baseDelay={200} stepDelay={100}>
              <Card className="flex flex-col overflow-hidden p-0 group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <button
                  onClick={() => setSection(sectionId)}
                  className="relative h-40 w-full overflow-hidden text-left"
                >
                  <Image
                    src={productImages[product.id]}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 transition-all duration-300 group-hover:scale-110">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-[var(--color-primary)] shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3">
                    <h3 className="font-semibold text-[var(--color-on-surface)] text-sm transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[var(--color-on-surface-variant)]">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.features.slice(0, 2).map((f) => (
                      <Badge key={f} variant="tertiary">
                        {f}
                      </Badge>
                    ))}
                  </div>
                  <button
                    onClick={() => setSection(sectionId)}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 hover:gap-2.5 hover:underline text-left"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </div>
    </Section>
  );
}
