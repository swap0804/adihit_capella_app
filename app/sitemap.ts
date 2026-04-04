import type { MetadataRoute } from "next";

import { industryEntries, resourcePosts, serviceCategories } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/resources",
  "/careers",
  "/careers/articleship",
  "/careers/openings",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/sitemap-page",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: new Date(),
    })),
    ...serviceCategories.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified: new Date(),
    })),
    ...industryEntries.map((industry) => ({
      url: absoluteUrl(`/industries/${industry.slug}`),
      lastModified: new Date(),
    })),
    ...resourcePosts.map((post) => ({
      url: absoluteUrl(`/resources/${post.slug}`),
      lastModified: new Date(post.date),
    })),
  ];
}
