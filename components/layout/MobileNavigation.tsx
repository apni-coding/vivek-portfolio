"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { SidebarNav } from "@/components/layout/SidebarNav";
import { getButtonClassName } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <IconButton
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="size-5" aria-hidden />
        ) : (
          <Menu className="size-5" aria-hidden />
        )}
      </IconButton>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-[visibility] duration-200",
          open ? "visible" : "invisible",
        )}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-overlay transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close navigation menu"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        />

        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={cn(
            "absolute inset-y-0 left-0 flex w-[min(20rem,88vw)] flex-col border-r border-sidebar-border bg-sidebar shadow-2xl transition-transform duration-200",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-sidebar-border px-4 py-4">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <span
                className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-caption font-semibold text-primary-foreground"
                aria-hidden
              >
                {initials}
              </span>
              <span className="truncate text-nav font-semibold tracking-tight text-sidebar-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" aria-hidden />
            </IconButton>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
            <SidebarNav onNavigate={() => setOpen(false)} />
          </nav>

          <div className="border-t border-sidebar-border p-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className={getButtonClassName({
                variant: "outline",
                className: "w-full border-primary/50",
              })}
              onClick={() => setOpen(false)}
            >
              <Download className="size-4" aria-hidden />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
