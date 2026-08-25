import type { ThemeMode } from "@/types/common";

export const themeConfig = {
  /** Portfolio primary look is dark. */
  defaultTheme: "dark" as ThemeMode,
  enableSystem: true,
  storageKey: "portfolio-theme",
  attribute: "class" as const,
} as const;
