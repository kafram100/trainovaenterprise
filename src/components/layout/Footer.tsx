"use client";

import { useSection } from "@/hooks/useSection";

const navLinks = [
  { label: "Home", section: "home" as const },
  { label: "About", section: "about" as const },
  { label: "Products", section: "products" as const },
  { label: "Contact", section: "contact" as const },
];

const productLinks = [
  { label: "School OS", section: "school-os" as const },
  { label: "Novagrade.ai", section: "novagrade" as const },
  { label: "Smart Timetable", section: "smart-timetable" as const },
  { label: "Trainova EdTech", section: "edtech" as const },
  { label: "Trainova Campus", section: "campus" as const },
];

const companyLinks = [
  { label: "About", section: "about" as const },
  { label: "Contact", section: "contact" as const },
];

export function Footer() {
  const { setSection } = useSection();

  return (
    <footer className="bg-[var(--neutral-10)] text-[var(--neutral-90)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <button
              onClick={() => setSection("home")}
              className="flex items-center gap-2 group"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                T
              </div>
              <span className="text-lg font-bold transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                Trainova Ent.
              </span>
            </button>
            <p className="text-sm text-[var(--neutral-70)] leading-relaxed max-w-xs sm:max-w-sm">
              Building the digital infrastructure powering the future of
              education in Africa.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--neutral-95)]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setSection(link.section)}
                    className="text-sm text-[var(--neutral-70)] transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--neutral-95)]">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setSection(link.section)}
                    className="text-sm text-[var(--neutral-70)] transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--neutral-95)]">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setSection(link.section)}
                    className="text-sm text-[var(--neutral-70)] transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-[var(--neutral-70)] transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-[var(--neutral-70)] transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--neutral-20)] pt-8 text-center text-sm text-[var(--neutral-60)]">
          <p>&copy; {new Date().getFullYear()} Trainova Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
