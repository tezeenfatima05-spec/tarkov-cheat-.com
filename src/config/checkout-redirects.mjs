import { CHECKOUT_EXTERNAL_URLS } from './checkout-urls.mjs';

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = CHECKOUT_EXTERNAL_URLS;

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/escape-from-tarkov', CHECKOUT_URLS.tarkov],
  ['/go/escape-from-tarkov/', CHECKOUT_URLS.tarkov],
  ['/go/tarkov', CHECKOUT_URLS.tarkov],
  ['/go/tarkov/', CHECKOUT_URLS.tarkov],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
