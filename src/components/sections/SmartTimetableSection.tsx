import Image from "next/image";
import { CalendarClock, AlertTriangle, Users, FileText, Split, CheckCircle } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

const features = [
  { icon: CalendarClock, title: "Automatic Scheduling", desc: "Intelligent timetable generation with smart allocation and time optimization." },
  { icon: AlertTriangle, title: "Clash Prevention", desc: "Detect and prevent teacher, venue, and subject overlaps automatically." },
  { icon: Users, title: "Teacher Allocation", desc: "Subject assignment, workload balancing, and multi-class support." },
  { icon: Split, title: "Venue Optimization", desc: "Optimal room allocation based on class size, equipment needs, and availability." },
  { icon: FileText, title: "Export System", desc: "PDF export, printable schedules, and digital sharing across the institution." },
  { icon: CheckCircle, title: "Conflict Resolution", desc: "Smart suggestions for resolving scheduling conflicts with minimal disruption." },
];

export function SmartTimetableSection() {
  return (
    <section id="smart-timetable" className="scroll-mt-16 sm:scroll-mt-20 py-16 sm:py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 mb-12 sm:mb-20">
          <AnimateIn variant="fade-right" duration={600}>
            <div>
              <span className="inline-flex rounded-full bg-[var(--color-tertiary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-tertiary)] mb-4">
                Product 03
              </span>
              <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl lg:text-5xl">
                Smart Timetable
              </h2>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                An intelligent timetable automation platform that generates optimal
                schedules in minutes instead of weeks. Eliminate clashes and balance
                workloads automatically.
              </p>
              <ul className="mt-6 space-y-3">
                {["Generate timetables in minutes", "Zero scheduling conflicts", "Fair workload distribution", "Export to PDF instantly"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <CalendarClock className="h-4 w-4 text-[var(--color-tertiary)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-left" delay={200} duration={600}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/men-laptops.jpg" alt="Smart Timetable" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw" />
            </div>
          </AnimateIn>
        </div>

        <AnimateIn variant="fade-up" duration={500}>
          <h3 className="text-center font-heading text-2xl font-bold text-[var(--color-on-surface)] mb-12">
            Smarter Scheduling for Modern Institutions
          </h3>
        </AnimateIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <StaggerItem key={f.title} index={i} baseDelay={200} stepDelay={100}>
              <div className="group rounded-2xl border border-[var(--color-outline-variant)] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] transition-all duration-300 group-hover:bg-[var(--color-tertiary)] group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-[var(--color-on-surface)]">{f.title}</h4>
                <p className="mt-1.5 text-sm text-[var(--color-on-surface-variant)]">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  );
}
