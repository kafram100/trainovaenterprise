import {
  GraduationCap,
  Brain,
  CalendarClock,
  Code2,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "school-os",
    name: "School Operating System",
    tagline: "Complete smart school infrastructure",
    description:
      "A modern digital administration system for managing students, attendance, fees, results, and communication across your institution.",
    icon: GraduationCap,
    href: "/solutions/school-os",
    features: [
      "Student management",
      "Attendance tracking",
      "Report cards & results",
      "Fees management",
      "Parent communication",
    ],
  },
  {
    id: "novagrade",
    name: "Novagrade.ai",
    tagline: "AI-powered assessment platform",
    description:
      "An intelligent lecturer assessment and grading ecosystem designed for tertiary institutions with CBT exams and AI-assisted grading.",
    icon: Brain,
    href: "/solutions/novagrade",
    features: [
      "CBT examinations",
      "AI grading",
      "Question banks",
      "Assignment management",
      "Performance analytics",
    ],
  },
  {
    id: "smart-timetable",
    name: "Smart Timetable",
    tagline: "Intelligent timetable automation",
    description:
      "Automate timetable generation with smart scheduling, clash prevention, and workload balancing for teachers and venues.",
    icon: CalendarClock,
    href: "/solutions/smart-timetable",
    features: [
      "Auto scheduling",
      "Clash prevention",
      "Teacher allocation",
      "Workload balancing",
      "PDF export",
    ],
  },
  {
    id: "edtech",
    name: "Trainova EdTech",
    tagline: "Practical digital skills training",
    description:
      "A hands-on learning ecosystem preparing students for the future of work through practical technology courses and mentorship.",
    icon: Code2,
    href: "/edtech",
    features: [
      "Online courses",
      "Video lessons",
      "Certificates",
      "Mentorship",
      "Progress tracking",
    ],
  },
  {
    id: "campus",
    name: "Trainova Campus",
    tagline: "Educational media & resources",
    description:
      "A student-focused platform delivering educational news, scholarships, opportunities, and academic resources to learners across Africa.",
    icon: Newspaper,
    href: "/campus",
    features: [
      "Campus news",
      "Scholarships",
      "Academic resources",
      "Opportunities",
      "Articles",
    ],
  },
];
