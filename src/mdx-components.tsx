import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { Callout } from "@/components/callout";
import { ProjectEmbed } from "@/components/project-embed";

/**
 * Elements and components available inside .mdx files. Required by @next/mdx
 * (must live in src/ when the project uses a src directory).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", children, ...props }) => {
      if (href.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      if (href.startsWith("#")) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
    img: ({ src, alt = "", ...props }) => (
      <img
        src={
          typeof src === "string" && src.startsWith("/")
            ? withBasePath(src)
            : src
        }
        alt={alt}
        loading="lazy"
        className="rounded-lg border"
        {...props}
      />
    ),
    Callout,
    ProjectEmbed,
    ...components,
  };
}
