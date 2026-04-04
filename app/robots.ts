import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteConfig.searchIndex
      ? [{ userAgent: "*", allow: "/" }]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(siteConfig.siteUrl).origin,
  };
}
