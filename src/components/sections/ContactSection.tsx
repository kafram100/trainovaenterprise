"use client";

import { useState, FormEvent } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useSection } from "@/hooks/useSection";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "trainovaenterprise@gmail.com",
    href: "mailto:trainovaenterprise@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0554024046 / 0558119187",
    href: "tel:+233554024046",
  },
  {
    icon: MapPin,
      label: "Location",
    value: "Ghana",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export function ContactSection() {
  const { setSection } = useSection();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      institution: (form.elements.namedItem("institution") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setSection("home")}
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>
      </div>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up" duration={500}>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-heading text-4xl font-bold text-[var(--color-on-surface)] sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-[var(--color-on-surface-variant)]">
                Ready to transform your institution? Send us a message and
                we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            <AnimateIn variant="fade-right" duration={600} className="lg:col-span-3">
              <Card className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">

                  {status === "success" && (
                    <div className="flex items-center gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800">
                      <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" />
                      Message sent successfully! We&apos;ll get back to you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
                      <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                      Failed to send. Please try again or email us directly.
                    </div>
                  )}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--color-on-surface)] mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="block w-full h-12 rounded-xl border border-[var(--color-outline-variant)] bg-white px-4 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--color-on-surface)] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="you@institution.edu"
                        className="block w-full h-12 rounded-xl border border-[var(--color-outline-variant)] bg-white px-4 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[var(--color-on-surface)] mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+233 50 000 0000"
                      className="block w-full h-12 rounded-xl border border-[var(--color-outline-variant)] bg-white px-4 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="institution"
                      className="block text-sm font-medium text-[var(--color-on-surface)] mb-1.5"
                    >
                      Institution Name <span className="text-[var(--color-on-surface-variant)] font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="institution"
                      placeholder="Name of your school or organization"
                      className="block w-full h-12 rounded-xl border border-[var(--color-outline-variant)] bg-white px-4 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-on-surface)] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your needs..."
                      className="block w-full rounded-xl border border-[var(--color-outline-variant)] bg-white px-4 py-3 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </AnimateIn>

            <AnimateIn variant="fade-left" delay={200} duration={600} className="lg:col-span-2">
              <div className="space-y-4">
                {contactDetails.map((item) => (
                  <Card
                    key={item.label}
                    className="group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-on-surface-variant)]">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 block text-sm font-medium text-[var(--color-on-surface)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-[var(--color-on-surface)]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
