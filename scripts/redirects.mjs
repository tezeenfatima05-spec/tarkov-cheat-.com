/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/escape-from-tarkov-cheats/'],
  ['/cheats/', '/products/escape-from-tarkov-cheats/'],
  ['/cheats/elite', '/products/escape-from-tarkov-cheats/elite/'],
  ['/cheats/elite/', '/products/escape-from-tarkov-cheats/elite/'],
  ['/cheats/compare', '/blog/tarkov-cheats-features-guide/'],
  ['/cheats/compare/', '/blog/tarkov-cheats-features-guide/'],
  ['/products/escape-from-tarkov-cheats/utilities', '/products/escape-from-tarkov-cheats/utilities/'],
  ['/products/escape-from-tarkov-cheats', '/products/escape-from-tarkov-cheats/'],
  ['/products/dota-2-cheats', '/products/escape-from-tarkov-cheats/'],
  ['/products/dota-2-cheats/', '/products/escape-from-tarkov-cheats/'],
  ['/products/dota-2-cheats/elite', '/products/escape-from-tarkov-cheats/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/escape-from-tarkov-cheats/elite/'],
  ['/products/dota-2-cheats/utilities', '/products/escape-from-tarkov-cheats/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/escape-from-tarkov-cheats/utilities/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
