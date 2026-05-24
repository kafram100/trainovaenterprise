import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/blog", destination: "/#blog", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/products", destination: "/#products", permanent: true },
      { source: "/solutions", destination: "/#solutions", permanent: true },
      { source: "/edtech", destination: "/#edtech", permanent: true },
      { source: "/campus", destination: "/#campus", permanent: true },
      { source: "/solutions/school-os", destination: "/#school-os", permanent: true },
      { source: "/solutions/novagrade", destination: "/#novagrade", permanent: true },
      { source: "/solutions/smart-timetable", destination: "/#smart-timetable", permanent: true },
    ];
  },
};

export default nextConfig;
