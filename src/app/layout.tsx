import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionProvider } from "@/hooks/useSection";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trainova Enterprise | Building Smarter Education Systems for Africa",
    template: "%s | Trainova Enterprise",
  },
  description:
    "Trainova Enterprise develops innovative educational software, intelligent assessment systems, digital school infrastructure, and practical technology learning solutions for modern institutions across Africa.",
  keywords: [
    "school management system Ghana",
    "educational software Ghana",
    "AI grading platform",
    "timetable software Ghana",
    "EdTech Ghana",
    "lecturer assessment system",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Trainova Enterprise | Building Smarter Education Systems for Africa",
    description:
      "Innovative educational software, AI assessment systems, and digital school infrastructure for Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <SectionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SectionProvider>
      </body>
    </html>
  );
}
