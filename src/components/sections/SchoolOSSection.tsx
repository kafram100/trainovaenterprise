import Image from "next/image";
import { CheckCircle, Users, ClipboardCheck, DollarSign, MessageSquare, BarChart3 } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StaggerItem } from "@/components/ui/Stagger";

const features = [
  { icon: Users, title: "Student Management", desc: "Registration, profiles, records, class assignments, and complete student history." },
  { icon: ClipboardCheck, title: "Attendance System", desc: "Daily attendance tracking, analytics, automated reports, and parent notifications." },
  { icon: BarChart3, title: "Results & Report Cards", desc: "Score entry, automated result computation, GPA calculations, and terminal reports." },
  { icon: DollarSign, title: "Fees Management", desc: "Fee setup, payment tracking, arrears management, receipts, and mobile money." },
  { icon: MessageSquare, title: "Parent Communication", desc: "SMS notifications, announcements, academic updates, and fee reminders." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Academic and financial analytics, attendance reports, and performance trends." },
];

export function SchoolOSSection() {
  return (
    <section id="school-os" className="scroll-mt-16 sm:scroll-mt-20 py-16 sm:py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 mb-12 sm:mb-20">
          <AnimateIn variant="fade-right" duration={600}>
            <div>
              <span className="inline-flex rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)] mb-4">
                Product 01
              </span>
              <h2 className="font-heading text-3xl font-bold text-[var(--color-on-surface)] sm:text-4xl lg:text-5xl">
                School Operating System
              </h2>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
                A complete smart school infrastructure system for managing educational
                institutions digitally. From student registration to fee collection,
                everything in one platform.
              </p>
              <ul className="mt-6 space-y-3">
                {["Centralized student database", "Automated report card generation", "Real-time attendance tracking", "Mobile money fee integration"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-on-surface-variant)]">
                    <CheckCircle className="h-4 w-4 text-[var(--color-primary)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-left" delay={200} duration={600}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/teacher-students.jpg" alt="School OS" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw" />
            </div>
          </AnimateIn>
        </div>

        <AnimateIn variant="fade-up" duration={500}>
          <h3 className="text-center font-heading text-2xl font-bold text-[var(--color-on-surface)] mb-12">
            Everything You Need to Run Your School
          </h3>
        </AnimateIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <StaggerItem key={f.title} index={i} baseDelay={200} stepDelay={100}>
              <div className="group rounded-2xl border border-[var(--color-outline-variant)] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
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
