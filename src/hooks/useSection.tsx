"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

export type Section =
  | "home"
  | "about"
  | "products"
  | "school-os"
  | "novagrade"
  | "smart-timetable"
  | "edtech"
  | "campus"
  | "why-trainova"
  | "testimonials"
  | "contact"
  | "blog"
  | "solutions";

const sectionMap: Record<string, Section> = {
  "": "home",
  "#home": "home",
  "#about": "about",
  "#products": "products",
  "#solutions": "solutions",
  "#school-os": "school-os",
  "#novagrade": "novagrade",
  "#smart-timetable": "smart-timetable",
  "#edtech": "edtech",
  "#campus": "campus",
  "#why-trainova": "why-trainova",
  "#testimonials": "testimonials",
  "#contact": "contact",
  "#blog": "blog",
};

interface SectionContextValue {
  section: Section;
  setSection: (s: Section) => void;
}

const SectionContext = createContext<SectionContextValue | null>(null);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [section, setSectionState] = useState<Section>("home");

  useEffect(() => {
    const h = window.location.hash.toLowerCase();
    setSectionState(sectionMap[h] || "home");

    const handleHashChange = () => {
      const h = window.location.hash.toLowerCase();
      setSectionState(sectionMap[h] || "home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setSection = useCallback((s: Section) => {
    const entry = Object.entries(sectionMap).find(([, v]) => v === s);
    if (entry) {
      const hash = entry[0];
      window.history.pushState(null, "", hash || "/");
      setSectionState(s);
    }
  }, []);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error("useSection must be used within SectionProvider");
  return ctx;
}
