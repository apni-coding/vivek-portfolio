import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const headingClassName = {
  h1: "text-h1 tracking-tight text-foreground",
  h2: "text-h2 tracking-tight text-foreground",
  h3: "text-h3 tracking-tight text-foreground",
} as const;

export function SectionHeader({
  title,
  description,
  action,
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="min-w-0 space-y-1">
        <Heading className={headingClassName[Heading]}>{title}</Heading>
        {description ? (
          <p className="max-w-2xl text-small text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
