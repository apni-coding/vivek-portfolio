import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns true after the component mounts on the client.
 * Useful for theme-aware UI that must avoid hydration mismatches.
 */
export function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}
