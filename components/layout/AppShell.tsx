import type { CSSProperties, ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { LAYOUT } from "@/constants/layout";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div className={cn("app-ambient min-h-dvh", className)}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Sidebar />

      <div
        className="flex min-h-dvh flex-col lg:pl-[var(--sidebar-width)]"
        style={
          {
            "--sidebar-width": LAYOUT.sidebarWidth,
          } as CSSProperties
        }
      >
        <Header leading={<MobileNavigation />} />

        <main
          id="main-content"
          className="mx-auto w-full flex-1 px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-8"
          style={{ maxWidth: LAYOUT.contentMaxWidth }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
