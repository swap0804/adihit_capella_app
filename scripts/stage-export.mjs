import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "out");
const distDir = path.join(rootDir, "dist");
const appDir = path.join(distDir, "app");

if (!existsSync(outDir)) {
  throw new Error(
    "The out directory was not found. Run `npm run build` before staging the static export.",
  );
}

rmSync(distDir, { recursive: true, force: true });
mkdirSync(appDir, { recursive: true });

for (const entry of readdirSync(outDir)) {
  cpSync(path.join(outDir, entry), path.join(appDir, entry), {
    recursive: true,
  });
}

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Adihit Capella Export</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #04111f;
        color: #e8f3ff;
        font-family: "Segoe UI", Arial, sans-serif;
      }
      main {
        max-width: 640px;
        padding: 32px;
        border: 1px solid rgba(151, 201, 255, 0.18);
        border-radius: 24px;
        background: rgba(8, 21, 40, 0.88);
        box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
      }
      a {
        color: #6ad6ff;
      }
      code {
        color: #79f0d1;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Static export staged successfully</h1>
      <p>This build is mounted under <code>/app</code>.</p>
      <p>Serve the <code>dist</code> folder and open <a href="/app/">/app/</a>.</p>
    </main>
  </body>
</html>
`;

writeFileSync(path.join(distDir, "index.html"), indexHtml, "utf8");

console.log("Staged static export in dist/app");
