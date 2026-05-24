export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Samuel Mensah",
    role: "Principal",
    institution: "Accra Technical Institute",
    content:
      "Trainova's School OS has completely transformed how we manage student records and attendance. What used to take days now takes minutes.",
  },
  {
    id: "2",
    name: "Elizabeth Osei",
    role: "ICT Coordinator",
    institution: "Kumasi High School",
    content:
      "The Smart Timetable feature alone saved us weeks of planning. The clash detection is incredibly accurate and the workload balancing is fair to all teachers.",
  },
  {
    id: "3",
    name: "Prof. Kwame Asante",
    role: "Dean of Academics",
    institution: "University of Ghana",
    content:
      "Novagrade.ai has streamlined our assessment process. The AI grading assistance has significantly reduced the time lecturers spend on marking objective questions.",
  },
  {
    id: "4",
    name: "Ama Serwaa",
    role: "Student",
    institution: "Trainova EdTech",
    content:
      "The practical approach to learning web development with AI tools gave me real skills I could use immediately. I built my first website in two weeks.",
  },
];
