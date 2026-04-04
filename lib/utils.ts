import { siteConfig } from "@/lib/site-config";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.adihitcapella.com";
}

function normalizePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function withBasePath(path = "/") {
  const normalizedPath = normalizePath(path);
  const basePath = siteConfig.basePath;

  if (!basePath || basePath === "/") {
    return normalizedPath;
  }

  if (
    normalizedPath === basePath ||
    normalizedPath.startsWith(`${basePath}/`)
  ) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? basePath : `${basePath}${normalizedPath}`;
}

export function absoluteUrl(path = "/") {
  return new URL(withBasePath(path), getBaseUrl()).toString();
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
