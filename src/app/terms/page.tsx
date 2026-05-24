import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Trainova Enterprise Terms of Service - rules and guidelines for using our platform and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>

      <article className="pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-on-surface)]">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
            Last updated: January 2026
          </p>

          <div className="mt-8 space-y-6 text-[var(--color-on-surface-variant)] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Trainova Enterprise (&quot;the Platform,&quot;
                &quot;we,&quot; &quot;our&quot;), you agree to be bound by these Terms of
                Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                2. Description of Services
              </h2>
              <p>
                Trainova Enterprise provides educational technology solutions
                including school management systems, AI-powered assessment
                platforms, smart timetable tools, digital skills training, and
                educational media services. We reserve the right to modify,
                suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                3. User Responsibilities
              </h2>
              <p>You agree to:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  Provide accurate and complete information when using our
                  services or contact forms
                </li>
                <li>
                  Use the Platform in compliance with all applicable laws and
                  regulations
                </li>
                <li>
                  Not engage in any activity that disrupts or interferes with
                  the proper functioning of the Platform
                </li>
                <li>
                  Not attempt to gain unauthorized access to any part of the
                  Platform or its systems
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All content, trademarks, logos, and intellectual property on the
                Platform are owned by Trainova Enterprise unless otherwise
                stated. You may not reproduce, distribute, modify, or create
                derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                Trainova Enterprise shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                from your use of or inability to use the Platform. Our total
                liability shall not exceed the amount paid by you, if any, for
                accessing the Platform.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                6. Privacy
              </h2>
              <p>
                Your use of the Platform is also governed by our{" "}
                <Link
                  href="/privacy"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Privacy Policy
                </Link>
                , which explains how we collect, use, and protect your personal
                information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                7. Third-Party Links
              </h2>
              <p>
                The Platform may contain links to third-party websites or
                services. We are not responsible for the content, privacy
                policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                8. Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend access to our
                services immediately, without prior notice, for any violation of
                these Terms or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                9. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Republic of Ghana. Any disputes arising
                from these Terms shall be resolved in the courts of Ghana.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                10. Contact Information
              </h2>
              <p>
                For questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:trainovaenterprise@gmail.com"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  trainovaenterprise@gmail.com
                </a>{" "}
                or call 0554024046 / 0558119187.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                11. Changes to Terms
              </h2>
              <p>
                We may revise these Terms at any time. Continued use of the
                Platform after changes constitutes acceptance of the updated
                Terms. We encourage you to review this page periodically.
              </p>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
