import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/config/site";
import { LAYOUT } from "@/constants/layout";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
  leading?: ReactNode;
}

const socialLinkClassName =
  "inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function Header({ className, leading }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex items-center justify-between gap-3 bg-transparent px-4 sm:px-6 lg:px-8",
        className,
      )}
      style={{ height: LAYOUT.headerHeight }}
    >
      <div className="flex min-w-0 items-center gap-2">{leading}</div>

      <nav className="flex items-center gap-0.5" aria-label="Social and theme">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className={socialLinkClassName}
          aria-label="GitHub profile"
        >
          <Github className="size-4 stroke-[1.75]" aria-hidden />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={socialLinkClassName}
          aria-label="LinkedIn profile"
        >
          <Linkedin className="size-4 stroke-[1.75]" aria-hidden />
        </a>
        <a
          href={siteConfig.social.email}
          className={socialLinkClassName}
          aria-label="Send email"
        >
          <Mail className="size-4 stroke-[1.75]" aria-hidden />
        </a>
        <div className="mx-1.5 h-4 w-px bg-border/80" aria-hidden />
        <ThemeToggle />
      </nav>
    </header>
  );
}
