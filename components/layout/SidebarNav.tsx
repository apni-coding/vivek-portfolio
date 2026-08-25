"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  onNavigate?: () => void;
  className?: string;
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SidebarNav({ onNavigate, className }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex flex-col gap-0.5", className)} role="list">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const active = isActivePath(pathname, item.href);
        const sharedClassName = cn(
          "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-nav tracking-tight transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          active
            ? "bg-gradient-to-r from-primary/90 to-secondary/90 font-medium text-primary-foreground shadow-[0_8px_24px_color-mix(in_srgb,var(--primary)_28%,transparent)]"
            : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
        );

        const content = (
          <>
            {Icon ? (
              <Icon
                className={cn(
                  "size-[1.05rem] shrink-0 stroke-[1.75]",
                  active
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-foreground",
                )}
                aria-hidden
              />
            ) : null}
            <span className="truncate">{item.label}</span>
          </>
        );

        return (
          <li key={item.href}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={sharedClassName}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
              >
                {content}
              </a>
            ) : (
              <Link
                href={item.href}
                className={sharedClassName}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
              >
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
