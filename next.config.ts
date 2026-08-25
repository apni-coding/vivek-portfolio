import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Keep Turbopack rooted at this app (avoids picking up a parent lockfile).
    root: projectRoot,
  },
};

export default nextConfig;
