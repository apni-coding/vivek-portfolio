/**
 * Layout tokens shared by AppShell, Sidebar, and Header.
 * Prefer these over magic numbers in components.
 */
export const LAYOUT = {
  /** ~260px — matches reference sidebar proportion */
  sidebarWidth: "16.25rem",
  sidebarWidthCollapsed: "4.5rem",
  headerHeight: "3.75rem",
  contentMaxWidth: "100rem",
} as const;

/**
 * Breakpoint intent (matches Tailwind defaults used in the shell).
 * - Mobile: < md (sidebar hidden, mobile nav)
 * - Tablet: md–lg (compact chrome)
 * - Desktop: lg+ (fixed sidebar)
 * - Large: xl+ (wider content rhythm)
 */
export const BREAKPOINTS = {
  mobile: "md",
  tablet: "lg",
  desktop: "lg",
  large: "xl",
} as const;
