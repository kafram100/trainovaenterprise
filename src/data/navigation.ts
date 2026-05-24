export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  {
    label: "Products",
    href: "/#products",
    children: [
      { label: "School OS", href: "/#school-os" },
      { label: "Novagrade.ai", href: "/#novagrade" },
      { label: "Smart Timetable", href: "/#smart-timetable" },
      { label: "Trainova EdTech", href: "/#edtech" },
      { label: "Trainova Campus", href: "/#campus" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];
