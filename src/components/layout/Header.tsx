"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, NavItem } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { useSection, type Section } from "@/hooks/useSection";

function sectionFromHref(href: string): Section {
  const map: Record<string, Section> = {
    "/": "home",
    "/#home": "home",
    "/#about": "about",
    "/#products": "products",
    "/#solutions": "solutions",
    "/#school-os": "school-os",
    "/#novagrade": "novagrade",
    "/#smart-timetable": "smart-timetable",
    "/#edtech": "edtech",
    "/#campus": "campus",
    "/#why-trainova": "why-trainova",
    "/#testimonials": "testimonials",
    "/#contact": "contact",
    "/#blog": "blog",
  };
  return map[href] || "home";
}

function NavLink({
  item,
  onClick,
}: {
  item: NavItem;
  onClick?: () => void;
}) {
  const { section, setSection } = useSection();
  const isActive = section === sectionFromHref(item.href);

  if (item.children) {
    return (
      <span
        className={cn(
          "block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
          isActive
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-variant)] hover:text-[var(--color-primary)] active:bg-[var(--color-surface-variant)] active:text-[var(--color-primary)]"
        )}
      >
        {item.label}
      </span>
    );
  }

  return (
    <button
      onClick={() => {
        setSection(sectionFromHref(item.href));
        onClick?.();
      }}
      className={cn(
        "block w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
        isActive
          ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
          : "text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-variant)] hover:text-[var(--color-primary)] active:bg-[var(--color-surface-variant)] active:text-[var(--color-primary)]"
      )}
    >
      {item.label}
    </button>
  );
}

function ChildLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const { section, setSection } = useSection();
  const isActive = section === sectionFromHref(href);

  return (
    <button
      onClick={() => {
        setSection(sectionFromHref(href));
        onClick?.();
      }}
      className={cn(
        "block w-full text-left rounded-lg px-3 py-2 text-sm transition-all duration-200",
        isActive
          ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5 font-medium"
          : "text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-variant)] hover:text-[var(--color-primary)] active:bg-[var(--color-surface-variant)] active:text-[var(--color-primary)]"
      )}
    >
      {label}
    </button>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { section, setSection } = useSection();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-outline-variant)] bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setSection("home")}
          className="flex items-center gap-2 group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white text-sm font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
            T
          </div>
          <span className="text-lg font-bold text-[var(--color-on-surface)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
            Trainova Ent.
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item, i) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    section === sectionFromHref(item.href)
                      ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                      : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-variant)]"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full mt-1 min-w-56 rounded-xl border border-[var(--color-outline-variant)] bg-white p-2 shadow-lg transition-all duration-200",
                    activeDropdown === item.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  )}
                >
                  {item.children.map((child) => (
                    <ChildLink
                      key={child.label}
                      href={child.href}
                      label={child.label}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.label} item={item} />
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            className="transition-all duration-200 hover:scale-105 active:scale-105"
            onClick={() => setSection("edtech")}
          >
            Take a Course
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-[var(--color-on-surface)] transition-transform duration-200 hover:scale-110"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="transition-transform duration-300" style={{ transform: mobileOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </div>
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden border-t border-[var(--color-outline-variant)] bg-white overflow-y-auto transition-all duration-300",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {mainNav.map((item) => (
            <div key={item.label}>
              <NavLink
                item={item}
                onClick={() => setMobileOpen(false)}
              />
              {item.children?.map((child) => (
                <ChildLink
                  key={child.label}
                  href={child.href}
                  label={child.label}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <Button
              variant="primary"
              className="w-full transition-all duration-200 active:scale-[1.02]"
              onClick={() => { setSection("edtech"); setMobileOpen(false); }}
            >
              Take a Course
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
