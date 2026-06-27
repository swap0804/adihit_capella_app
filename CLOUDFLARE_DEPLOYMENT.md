# Cloudflare Workers deployment

This project is configured for SSR on Cloudflare Workers via OpenNext.

## Required environment variables

Set the backend API URL for the careers pages before deploying:

- `NEXT_PUBLIC_API_BASE_URL` - the public backend base URL used by the careers pages

If you have any secrets later, add them with Wrangler instead of hardcoding them:

```bash
npx wrangler secret put VARIABLE_NAME
```

## Install

```bash
npm install
```

## Login

```bash
npx wrangler login
```

## Local preview

```bash
npm run cf:build
npm run cf:preview
```

## Deploy

```bash
npm run cf:build
npm run cf:deploy
```

## Cloudflare dashboard build command

If your Cloudflare project is using a build command in the dashboard, set it to:

```bash
npm run cf:build
```

Do not use the old static-export staging script for this Worker deployment.

## Common issues

- If the careers page cannot load jobs, confirm `NEXT_PUBLIC_API_BASE_URL` points to the deployed backend.
- If Wrangler complains about compatibility settings, keep `nodejs_compat` enabled and use a current `compatibility_date`.
- If a feature depends on unsupported Node APIs, replace it with a Cloudflare-compatible approach instead of using `app.listen` or local filesystem writes.
