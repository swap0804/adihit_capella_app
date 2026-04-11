import type { Metadata, Viewport } from "next";

import "@/app/globals.css";
import { FloatingActions } from "@/components/floating-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { createOrganizationSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  DEFAULT_THEME_PALETTE,
  DEFAULT_THEME,
  getThemeInitScript,
  THEME_COLORS,
} from "@/lib/theme";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Legal, Tax & Finance Consultancy`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      data-palette={DEFAULT_THEME_PALETTE}
      suppressHydrationWarning
      style={{ colorScheme: DEFAULT_THEME }}
    >
      <head>
        <meta
          name="theme-color"
          content={THEME_COLORS[DEFAULT_THEME_PALETTE][DEFAULT_THEME]}
        />
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript() }} />
      </head>
      <body suppressHydrationWarning>
        <StructuredData data={createOrganizationSchema()} />
        <ThemeProvider>
          <div className="page-shell">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <FloatingActions />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
