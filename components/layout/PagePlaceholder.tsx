import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/site";

interface PagePlaceholderProps {
  title: string;
  description?: string;
}

/**
 * Minimal route stub for verifying shell, theme, and routing.
 * Replace with real section content in later tasks.
 */
export function PagePlaceholder({
  title,
  description = "This section will be implemented in a later task.",
}: PagePlaceholderProps) {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <Badge variant="success" className="gap-1.5">
          <span className="size-1.5 rounded-full bg-success" aria-hidden />
          Foundation ready
        </Badge>
        <h1 className="text-display font-bold text-foreground">
          {title === "Home" ? (
            <>
              {siteConfig.name.split(" ")[0]}{" "}
              <span className="text-gradient-brand">
                {siteConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="max-w-xl text-body text-muted-foreground">{description}</p>
        {title === "Home" ? (
          <div className="flex flex-wrap gap-3 pt-1">
            <Button>Explore My Work</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        ) : null}
      </div>

      <Card variant="glass" className="max-w-xl space-y-3">
        <Badge variant="primary">Theme preview</Badge>
        <p className="text-small text-muted-foreground">
          Deep charcoal background, Inter typography, blue→purple accents, and
          glass cards are active. Real{" "}
          <span className="font-medium text-foreground">{title}</span> content
          comes next.
        </p>
      </Card>
    </div>
  );
}
