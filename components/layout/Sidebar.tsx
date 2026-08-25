import { Download } from "lucide-react";
import Link from "next/link";

import { SidebarNav } from "@/components/layout/SidebarNav";
import { getButtonClassName } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { LAYOUT } from "@/constants/layout";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <aside
      className={cn(
        "hidden h-dvh flex-col border-r border-sidebar-border bg-sidebar lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex",
        className,
      )}
      style={{ width: LAYOUT.sidebarWidth }}
      aria-label="Primary"
    >
      <div className="flex h-full flex-col px-3 py-5">
        <Link
          href="/"
          className="mb-5 flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-caption font-semibold text-primary-foreground shadow-[0_0_20px_color-mix(in_srgb,var(--primary)_35%,transparent)]"
            aria-hidden
          >
            {initials}
          </span>
          <span className="min-w-0 truncate text-nav font-semibold tracking-tight text-sidebar-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="min-h-0 flex-1 overflow-y-auto px-0.5" aria-label="Main">
          <SidebarNav />
        </nav>

        <div className="mt-4 border-t border-sidebar-border pt-4">
          <a
            href={siteConfig.resumeUrl}
            download
            className={getButtonClassName({
              variant: "outline",
              className:
                "w-full border-primary/50 text-foreground shadow-[0_0_16px_color-mix(in_srgb,var(--primary)_18%,transparent)] hover:border-primary hover:bg-primary/10",
            })}
          >
            <Download className="size-4" aria-hidden />
            Download Resume
          </a>
        </div>
      </div>
    </aside>
  );
}
