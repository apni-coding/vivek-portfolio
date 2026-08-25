import {
  BookOpen,
  Briefcase,
  Code2,
  FolderKanban,
  Home,
  Layers,
  Mail,
  Network,
  Terminal,
  User,
  Wrench,
} from "lucide-react";

import type { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: User,
  },
  {
    label: "Experience",
    href: "/experience",
    icon: Briefcase,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Architecture",
    href: "/architecture",
    icon: Network,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: Wrench,
  },
  {
    label: "API Playground",
    href: "/api-playground",
    icon: Code2,
  },
  {
    label: "Terminal",
    href: "/terminal",
    icon: Terminal,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export const mainNavItems = navigationItems;

/** Brand mark used in the sidebar header. */
export const brandIcon = Layers;
