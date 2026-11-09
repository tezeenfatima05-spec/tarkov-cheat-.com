/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Tarkov Cheats For Pc – Escape from Tarkov | Tarkov Cheat',
    description:
      'Explore Escape from Tarkov cheats for PC featuring customizable aimbot, player ESP, loot ESP, extraction tracking, radar, no recoil, thermal vision, and.',
  },
  '/products/escape-from-tarkov-cheats/': {
    title: 'Escape from Tarkov Cheats & Utility Products',
    description:
      'Full Tarkov cheat access plus HWID spoofer and Cloud DMA utilities for PC raids at tarkov-cheat.com.',
  },
  '/products/escape-from-tarkov-cheats/elite/': {
    title: 'Escape from Tarkov Cheats | Aimbot, ESP & Loot',
    description:
      'Player ESP, loot filters, aimbot, radar, no recoil, thermal vision, and config import/export for main Tarkov raids.',
  },
  '/products/escape-from-tarkov-cheats/utilities/': {
    title: 'Tarkov Utilities | HWID Spoofer & Cloud DMA',
    description:
      'Choose HWID Spoofer or Cloud DMA—when each utility fits and links to full product pages.',
  },
  '/blog/': {
    title: 'Guides – and patch-day checks for Escape from Tarkov',
    description:
      'Setup guides, aimbot tuning, loot ESP filters, extraction tracking, and patch-day checks for Escape from Tarkov.',
  },
  '/forum/': {
    title: 'Tarkov Community Forum – Discuss raid setups | Cheat',
    description:
      'Tarkov Community Forum: Discuss raid setups, loot routes, feature configs, and troubleshooting for Escape from Tarkov.',
  },
  '/faq/': {
    title: 'Cheats – All topics Browse by category Filter | Tarkov Cheat',
    description:
      'Answers on Tarkov cheats, ESP, aimbot, HWID tools, checkout, and guides at tarkov-cheat.com. Help center FAQ for cheats, products & guides Everything.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Tarkov Cheat',
    description:
      'Purchase terms, license use, and refund policy for products sold through tarkov-cheat.com.',
  },
  '/privacy/': {
    title: 'Privacy – and contact data when you browse or | Tarkov Cheat',
    description:
      'Privacy: How tarkov-cheat.com uses analytics, cookies, and contact data when you browse or request support. Privacy Policy How Tarkov Cheat handles.',
  },
  '/about/': {
    title: 'About Tarkov Cheat — Guides, Products & Raid Tools',
    description:
      'About Tarkov Cheat: What we publish on Escape from Tarkov cheat features, utilities, setup guides, patch status, and support resources at tarkov-cheat.com.',
  },
  '/support/': {
    title: 'Support | Tarkov Cheat',
    description:
      'Get help with loader setup, HWID, Cloud DMA, and checkout for Escape from Tarkov cheats.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
