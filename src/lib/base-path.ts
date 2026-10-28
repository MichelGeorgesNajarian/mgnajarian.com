/**
 * Sub-path the site is served from. Empty in production; "/preview" for the
 * preview build (see next.config.ts).
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a /public asset path with the base path. next/image and plain
 * <img> tags don't do this themselves when images are unoptimized.
 */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
