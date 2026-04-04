import type { NextConfig } from "next";

import { BASE_PATH } from "./lib/routing";

const nextConfig: NextConfig = {
  basePath: BASE_PATH,
  poweredByHeader: false,
  reactStrictMode: true,
  output: "export",
};

export default nextConfig;
