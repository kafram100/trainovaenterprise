"use client";

import { useSection } from "@/hooks/useSection";
import { Hero } from "@/components/sections/Hero";
import { TrustedInstitutions } from "@/components/sections/TrustedInstitutions";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { SchoolOSSection } from "@/components/sections/SchoolOSSection";
import { NovagradeSection } from "@/components/sections/NovagradeSection";
import { SmartTimetableSection } from "@/components/sections/SmartTimetableSection";
import { EdTechSection } from "@/components/sections/EdTechSection";
import { CampusSection } from "@/components/sections/CampusSection";
import { WhyTrainova } from "@/components/sections/WhyTrainova";
import { Statistics } from "@/components/sections/Statistics";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const { section } = useSection();

  if (section === "about") return <AboutSection />;
  if (section === "blog") return <BlogSection />;
  if (section === "school-os") return <SchoolOSSection />;
  if (section === "novagrade") return <NovagradeSection />;
  if (section === "smart-timetable") return <SmartTimetableSection />;
  if (section === "edtech") return <EdTechSection />;
  if (section === "campus") return <CampusSection />;
  if (section === "solutions") return <SolutionsOverview />;
  if (section === "products") return <ProductShowcase />;
  if (section === "why-trainova") return <WhyTrainova />;
  if (section === "testimonials") return <Testimonials />;
  if (section === "contact") return <ContactSection />;

  return (
    <>
      <Hero />
      <TrustedInstitutions />
    </>
  );
}
