import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <PagePlaceholder
      title="Home"
      description={`${siteConfig.title} (MERN) — premium dashboard foundation matched to the reference theme. Full homepage sections come next.`}
    />
  );
}
