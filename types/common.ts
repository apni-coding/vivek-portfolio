import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "system";

export interface SocialLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SiteSocial {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
}

export interface WithChildren {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}
