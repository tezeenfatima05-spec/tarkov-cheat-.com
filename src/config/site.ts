export const SITE_DOMAIN = 'tarkov-cheat.com';
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const PRODUCT_BASE = '/products/escape-from-tarkov-cheats/';
export const TITLE_PREFIX = 'Escape from Tarkov Cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;

export const PRIMARY_KEYWORD = 'Escape from Tarkov cheats';

export const DISCORD_URL = 'https://discord.com/invite/wmFY3xVtwm';

import { CHECKOUT_EXTERNAL_URLS } from './checkout-urls.mjs';

/** External commercial checkout (served via /go/ redirects). */
export const CTA_URL = CHECKOUT_EXTERNAL_URLS.tarkov;
export const SPOOFER_CTA_URL = CHECKOUT_EXTERNAL_URLS.hwidSpoofer;
export const CLOUD_DMA_CTA_URL = CHECKOUT_EXTERNAL_URLS.cloudDma;

export const LOGO_PATH = '/logo.svg';
export const HERO_POSTER_PATH = '/images/hero/hero-poster.webp';

export const SCREENSHOT_PATHS = [
  '/images/gameplay/screenshot-1.png',
  '/images/gameplay/screenshot-2.png',
  '/images/gameplay/screenshot-3.png',
  '/images/gameplay/screenshot-4.png',
  '/images/gameplay/screenshot-5.png',
  '/images/gameplay/screenshot-6.png',
  '/images/gameplay/screenshot-7.png',
] as const;
