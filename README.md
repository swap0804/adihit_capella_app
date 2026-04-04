# adihit_capella_app

## Environment

Set these before running the app locally or building the static export:

```bash
NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL=
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=
```

## Static export

This project is exported to run directly from `/`.

1. Run `npm run build:static`
2. Serve the `dist` folder with any static server
3. Open `/`

For the office map embed, `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` must be present at build time because the site is exported statically.
