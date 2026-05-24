"use client";

import { ReactNode } from "react";
import { useSection } from "@/hooks/useSection";

export function SectionVisible({
  section,
  children,
}: {
  section: string;
  children: ReactNode;
}) {
  const { section: active } = useSection();
  if (active !== section) return null;
  return <>{children}</>;
}
