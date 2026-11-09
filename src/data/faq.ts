import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aimbot'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const elite = link('Escape from Tarkov Cheats', productPath('elite'));
const productsHub = link('Tarkov products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const cloudDma = link('Cloud DMA', productPath('cloud-dma'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Escape from Tarkov cheats are online?',
    a: a('The live status banner is on tarkov-cheat.com and in the Discord #status channel. Always check after a Tarkov update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide, and config library via our secure checkout. Follow the guide before launching Tarkov.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party software?',
    a: a('Yes—any modification carries risk. Anti-cheat systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Escape from Tarkov on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your license.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists ${elite}, ${hwid}, and ${cloudDma} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Tarkov player ESP?',
    a: `Player ESP shows PMCs, Scavs, bosses, health, weapons, and distance through cover. The ${elite} build includes skeleton, chams, and quest marks.`,
    scopes: ['elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: a('ESP is information overlay—it does not move your crosshair. Aimbot applies targeting assistance when enabled with your aim key.'),
  },
  {
    id: 'loot-esp',
    topic: 'esp',
    icon: 'faqWhichTierEsp',
    q: 'How do loot ESP filters work?',
    a: a('Set minimum price, pick category presets, and tune draw distance so only valuable items and containers highlight on raid maps.'),
    scopes: ['elite'],
  },
  {
    id: 'aimbot-visible',
    topic: 'aimbot',
    icon: 'faqWhichTierScripts',
    q: 'Should I use visible-only aimbot?',
    a: a('Start with visible check and conservative FOV. Add prediction and target lock after you trust your ESP distance caps.'),
    scopes: ['elite'],
  },
  {
    id: 'full-build',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'Is this for main raids or Arena?',
    a: a('This product page targets main Escape from Tarkov raids—not Arena. Arena requires a separate product key if offered by the provider.'),
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Does undetected mean zero risk?',
    a: a('No. Undetected is a point-in-time label. Stop if status shows updating or offline after a patch.'),
  },
  {
    id: 'tarkov-update',
    topic: 'setup',
    icon: 'faqVacUpdate',
    q: 'What should I do after a Tarkov patch?',
    a: a('Read Discord #status, reload the loader, import a conservative preset, and test offline before live raids.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `${hwid} is for hardware-level flags when fresh accounts fail on one PC but work elsewhere—not for account-only bans.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'cloud-dma',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Do I need Cloud DMA for standard cheats?',
    a: `${cloudDma} is optional for compatible external rigs. Most operators use the standard loader without DMA hardware.`,
    scopes: ['cloud-dma'],
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get live setup help?',
    a: a('Join Discord from the homepage or support page. Include your order email and loader error text—staff reference the same portal presets as our guides.'),
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'Are these public or private builds?',
    a: a('Access is delivered through portal keys and maintained builds—not public download mirrors.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product and blog answers—or read ${blog} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter ESP, aimbot, products, setup, safety, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aimbot',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'aimbot'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));

  const combined = kind === 'tier' ? [...scoped, ...general.slice(0, 8)] : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which product matches this guide?',
      a: `Feature guides map to the ${elite} build. HWID and DMA articles map to ${hwid} or ${cloudDma}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-offline',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test offline first?',
      a: a('Yes. Load conservative presets in an offline raid before PMC runs. Tune ESP distance and aimbot FOV over several sessions.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${elite} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Tarkov update. Reload configs instead of copying old sliders blindly.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('loot') || slug.includes('player')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which modules does this ESP article cover?',
      a: `Player and loot ESP settings live in the ${elite} build—enable visuals before combat misc options.`,
    });
  }
  if (slug.includes('aimbot')) {
    slugHints.push({
      id: 'blog-slug-aimbot',
      topic: 'aimbot',
      icon: 'faqBlogSlugScripts',
      q: 'Which build includes the aimbot options here?',
      a: `Aimbot, FOV, and bone settings are part of the ${elite} combat tab.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace HWID products?',
      a: `Recovery guides complement ${hwid}—read the product page for workflow scope.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player, boss & Scav ESP', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot ESP & filters', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Radar & exfil markers', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Aimbot & prediction', icon: 'compareAutoCombo' as const, lite: true, pro: true, elite: true },
  { feature: 'No recoil & no sway', icon: 'compareOrbwalker' as const, lite: true, pro: true, elite: true },
  { feature: 'Thermal & third person', icon: 'compareSkinChanger' as const, lite: true, pro: true, elite: true },
  { feature: 'Config import/export', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
