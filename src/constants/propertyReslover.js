import okuBg from "../assets/img/other/oku.png"
import askUtecBg from "../assets/img/other/askutec.jpg"

export const CV_URL =
  "https://drive.google.com/file/d/1xCxwj7C-KF1PIBAaEwhxz0f5RUCNyOhT/view?usp=sharing";

export const SOCIAL_MEDIA_LINKS = {
  YOUTUBE: "https://www.youtube.com/channel/UCeFHr8q8fDrgQt4d3EFEKIw",
  LINKEDIN: "https://www.linkedin.com/in/vivek-kumar-b48165258/",
  GITHUB: "https://github.com/apni-coding",
};

export const SERVICE_LIST = [
  {
    id: 1,
    heading: "Full-Stack Web Development",
    description:
      "Build responsive, scalable web apps using MongoDB, Express.js, React.js, and Node.js.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-layers"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    class: "color1",
  },
  {
    id: 2,
    heading: "Custom API Development",
    description:
      "Develop secure and efficient RESTful or GraphQL APIs for web and mobile platforms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-share-2"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    class: "color2",
  },
  {
    id: 3,
    heading: "Admin Dashboards & CMS",
    description:
      "Create custom dashboards and content systems tailored to your business workflow.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-monitor"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    class: "color3",
  },
  {
    id: 4,
    heading: "Authentication & Authorization",
    description:
      "Implement secure auth systems with JWT, OAuth, social login, and access control.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-lock"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    class: "color4",
  },
  {
    id: 5,
    heading: "Database Design & Integration",
    description:
      "Design efficient MongoDB schemas and integrate advanced CRUD operations and indexing.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-database"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    class: "color5",
  },
  {
    id: 6,
    heading: "Performance Optimization",
    description:
      "Optimize frontend and backend performance for faster load times and better UX.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-activity"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    class: "color6",
  },
];
export const EXPERIENCE = [
  {
    id: 1,
    role: "Software Engineer",
    shortDescription:
      "Building full-stack apps with Node.js, AWS Lambda, MongoDB, React, and Redux in Agile teams.",
    companyName: "iProgrammer Pvt. Ltd., Pune",
    date: "Aug 2023 – Present",
  },
  {
    id: 2,
    role: "Teaching Assistant",
    shortDescription:
      "Guided students in DSA, debugging code, and strengthening core CS concepts.",
    companyName: "Coding Ninjas, Gurgaon",
    date: "July 2023 – Feb 2024",
  },
];
export const EDUCATION = [
  {
    id: 1,
    degree: "M.Tech in CSE",
    shortDescription:
      "Focused on system design, research, and advanced CS concepts.",
    institution: "DCRUST, Sonipat",
    date: "2022 – 2024",
  },
  {
    id: 2,
    degree: "B.Tech in CSE",
    shortDescription:
      "Studied core CS subjects and built multiple web projects.",
    institution: "DCRUST, Sonipat",
    date: "2018 – 2022",
  },
];

export const SKILLS = [
  {
    name: "JavaScript",
    proficiency: 90,
  },
  {
    name: "Node.js & Express.js",
    proficiency: 90,
  },
  {
    name: "React.js",
    proficiency: 90,
  },
  {
    name: "TypeScript",
    proficiency: 70,
  },
  {
    name: "Next.js",
    proficiency: 60,
  },
  {
    name: "MySQL, PostgreSQL & MongoDB",
    proficiency: 70,
  },
  {
    name: "GraphQL & Apollo Server",
    proficiency: 60,
  },
  {
    name: "AWS (Lambda, S3, Cognito)",
    proficiency: 60,
  },
];

export const PROJECT_LIST = [
  {
    id: 1,
    name: "askUtec by UltraTech",
    bgImg: askUtecBg,
    shortDescription: "Social media & booking platform for UltraTech dealers and customers.",
    category: ["web", "development"],
  },
  {
    id: 2,
    name: "Coolant Management System",
    bgImg: null,
    shortDescription: "IoT dashboard for real-time coolant tracking and analysis.",
    category: ["web", "iot"],
  },
  {
    id: 3,
    name: "OKU Mobile App",
    bgImg:okuBg,
    shortDescription: "Personalized healthcare app with AI-driven recommendations.",
    category: ["mobile", "healthcare"],
  },
  {
    id: 4,
    name: "Smart Inventory Manager",
    bgImg: null,
    shortDescription: "Cloud inventory tool with barcode scanning and stock alerts.",
    category: ["web", "inventory"],
  },
  {
    id: 5,
    name: "TravelMate Booking App",
    bgImg: null,
    shortDescription: "Travel booking app with AI-generated itineraries.",
    category: ["mobile", "travel"],
  },
];

