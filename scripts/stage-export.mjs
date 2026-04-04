import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "out");
const distDir = path.join(rootDir, "dist");

if (!existsSync(outDir)) {
  throw new Error(
    "The out directory was not found. Run `npm run build` before staging the static export.",
  );
}

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

for (const entry of readdirSync(outDir)) {
  cpSync(path.join(outDir, entry), path.join(distDir, entry), {
    recursive: true,
  });
}

console.log("Staged static export in dist");
