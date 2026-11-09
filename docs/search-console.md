# Search Console workflow (tarkov-cheat.com)

## Initial setup

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `tarkov-cheat.com` if it is not already there.
2. Under **Sitemaps**, submit: `https://tarkov-cheat.com/sitemap.xml`

## After content updates

1. Deploy the site.
2. Use **URL inspection** on changed pages if you need faster re-crawl.
3. Optionally submit IndexNow by setting `INDEXNOW_KEY` during build.

## Primary landing targets

| Intent | Path |
| --- | --- |
| Escape from Tarkov cheats (broad) | `/` |
| Product hub | `/products/escape-from-tarkov-cheats/` |
| Full raid build | `/products/escape-from-tarkov-cheats/elite/` |
| HWID & Cloud DMA | `/products/escape-from-tarkov-cheats/utilities/` |
