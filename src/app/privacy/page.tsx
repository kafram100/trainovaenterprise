import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Trainova Enterprise Privacy Policy - how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--color-on-surface-variant)]">
            Last updated: January 2026
          </p>

          <div className="mt-8 space-y-6 text-[var(--color-on-surface-variant)] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                1. Introduction
              </h2>
              <p>
                Trainova Enterprise (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                2. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, institution name, and other information you provide
                  through our contact form or during registration.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you access
                  and use our website, including pages visited, time spent, and
                  referral sources.
                </li>
                <li>
                  <strong>Device Data:</strong> Browser type, operating system,
                  IP address, and device identifiers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                3. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send administrative information and service updates</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                4. Data Sharing and Disclosure
              </h2>
              <p>
                We do not sell your personal information. We may share your data
                with trusted third-party service providers who assist us in
                operating our website and services, subject to confidentiality
                agreements.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                5. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of electronic
                storage or transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                7. Cookies
              </h2>
              <p>
                We use essential cookies to ensure the proper functioning of our
                website. Analytics cookies may be used to understand how visitors
                interact with our site. You can control cookie preferences
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--color-on-surface)] mb-3">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
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
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes are
                effective immediately upon posting. We encourage you to review
                this page periodically.
              </p>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
