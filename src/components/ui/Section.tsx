import { cn } from "@/lib/utils";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
  background?: "white" | "muted" | "primary";
}

export function Section({
  className,
  children,
  id,
  background = "white",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    muted: "bg-[var(--color-surface-variant)]",
    primary: "bg-[var(--color-primary)] text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgrounds[background], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
