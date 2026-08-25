import type { SiteSocial } from "@/types/common";

export const siteConfig = {
  name: "Vivek Kumar",
  title: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern web applications, scalable architectures, and polished developer experiences.",
  url: "https://vivekkumar.dev",
  email: "hello@vivekkumar.dev",
  locale: "en_US",
  keywords: [
    "Vivek Kumar",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:hello@vivekkumar.dev",
  } satisfies SiteSocial,
  resumeUrl: "/resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
