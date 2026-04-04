import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const crawlPath =
    siteConfig.basePath === "/" ? "/" : `${siteConfig.basePath}/`;

  return {
    rules: siteConfig.searchIndex
      ? [{ userAgent: "*", allow: crawlPath }]
      : [{ userAgent: "*", disallow: crawlPath }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(siteConfig.siteUrl).origin,
  };
}
