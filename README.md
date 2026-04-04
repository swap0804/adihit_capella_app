# adihit_capella_app

## Google Sheets enquiries

1. Create a Google Apps Script web app from [google-sheets-webhook.gs](scripts/google-sheets-webhook.gs)
2. Deploy it as a web app with access set to `Anyone`
3. Copy `.env.example` to `.env` or `.env.local`
4. Set `NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL` to the deployed `/exec` URL
5. Rebuild after env changes because the site is statically exported

## Static export

This project is exported to run directly from `/`.

1. Run `npm run build:static`
2. Serve the `dist` folder with any static server
3. Open `/`
