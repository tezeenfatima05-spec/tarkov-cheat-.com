import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE, SITE_DOMAIN } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  elite: [
    'tarkov-cheats-features-guide',
    'tarkov-aimbot-settings-guide',
    'tarkov-player-esp-guide',
    'tarkov-loot-esp-filters',
    'tarkov-radar-exfil-tracking',
  ],
  'hwid-spoofer': ['tarkov-hwid-spoofer-guide', 'escape-from-tarkov-patch-checklist'],
  'cloud-dma': ['tarkov-cloud-dma-setup', 'how-to-buy-tarkov-cheats'],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: `Check the live banner on ${SITE_DOMAIN} and Discord #status before purchase—especially after a Tarkov or anti-cheat update.`,
  },
  {
    num: '02',
    title: 'Complete checkout',
    desc: 'Use our secure checkout for Escape from Tarkov raid access. Review the full feature list before you buy.',
  },
  {
    num: '03',
    title: 'Join Discord support',
    desc: 'Open Discord with your order email ready. Staff confirm loader version, platform, and setup steps.',
  },
  {
    num: '04',
    title: 'Load configs and test',
    desc: 'Import a conservative preset, verify ESP and aimbot in an offline raid, then scale settings gradually.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow = `Escape from Tarkov updates frequently. Confirm module availability on the status panel at ${SITE_DOMAIN} before you purchase or launch. Overlay behavior may differ in menus, hideout, and spectator modes after patches.`;

const sharedLimitations =
  'Third-party software in Escape from Tarkov can violate Battlestate Games Terms of Use and lead to account bans. You use this software at your own risk. Compatibility can change after game, anti-cheat, or Windows updates without notice.';

const tarkovSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Escape from Tarkov client with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Escape from Tarkov published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  aimbot: {
    src: `${gameplay}/screenshot-1.png`,
    alt: 'Escape from Tarkov aimbot menu with FOV, bone selection and prediction options',
    caption: 'Aimbot configuration',
    captionDesc: 'Dynamic FOV, smart bone targeting, and visible-only filters for raid combat.',
  },
  world: {
    src: `${gameplay}/screenshot-2.png`,
    alt: 'Tarkov world visual options including weather, fog and loot ESP distance',
    caption: 'World & loot visuals',
    captionDesc: 'Weather controls, loot price filters, and container categories on customs or interchange.',
  },
  misc: {
    src: `${gameplay}/screenshot-3.png`,
    alt: 'Tarkov misc options: no recoil, infinite stamina, thermal vision and third person',
    caption: 'Movement & weapon misc',
    captionDesc: 'No recoil, instant ADS, stamina tuning, and thermal vision for night raids.',
  },
  esp: {
    src: `${gameplay}/screenshot-4.png`,
    alt: 'Tarkov player ESP with PMC, Scav and boss labels on raid map',
    caption: 'Player ESP overlay',
    captionDesc: 'PMC, Scav, and boss tracking with health, weapon, and distance readouts.',
  },
  loot: {
    src: `${gameplay}/screenshot-5.png`,
    alt: 'Tarkov loot ESP with item price and container filters',
    caption: 'Loot ESP filters',
    captionDesc: 'Minimum price, category presets, and corpse or stash highlighting.',
  },
  radar: {
    src: `${gameplay}/screenshot-6.png`,
    alt: 'Tarkov 2D radar with exfil markers and off-screen arrows',
    caption: 'Radar & extractions',
    captionDesc: '2D radar, OOF arrows, and extraction point markers for safer extracts.',
  },
  config: {
    src: `${gameplay}/screenshot-7.png`,
    alt: 'Tarkov cheat config save, load, import and export panel',
    caption: 'Config system',
    captionDesc: 'Save, load, import, and export presets across PCs.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'escape-from-tarkov-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  elite: [
    {
      type: 'p',
      text: 'Escape from Tarkov cheats on this build combine aimbot, player ESP, loot ESP, radar, and misc movement options in one loader. Raid-focused presets help you tune visibility, loot value filters, and combat assistance without stacking every slider on day one.',
    },
    { type: 'h2', text: 'Built for main raids' },
    {
      type: 'p',
      text: 'This product page covers main Escape from Tarkov raid content—not Arena. Use conservative configs, test extractions with radar enabled, and keep configs backed up through the import/export system.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  elite: [
    { type: 'h2', text: 'Aimbot & combat' },
    {
      type: 'p',
      text: 'Enable aim with custom keys, draw FOV and crosshair, tune smart bone lists, prediction, target lock, and max distance. Teammate filters and visible-only checks help reduce friendly fire in squad raids.',
    },
    { type: 'h2', text: 'ESP, loot & world' },
    {
      type: 'p',
      text: 'Player, boss, bot, and Scav ESP with skeleton, chams, health gradients, quest marks, and exfil markers. Loot ESP supports category presets, minimum price, custom colors, and loot-through-walls when enabled.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh accounts fail on one PC but work elsewhere—hardware enforcement on Escape from Tarkov or related platform flags.',
    },
    { type: 'h2', text: 'Workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then load a conservative cheat config before your next raid.',
    },
  ],
  'cloud-dma': [
    { type: 'h2', text: 'What Cloud DMA covers' },
    {
      type: 'p',
      text: 'Cloud DMA is for operators who need external DMA-style workflows with remote configuration support. Confirm hardware compatibility in Discord before checkout.',
    },
    { type: 'h2', text: 'Setup expectations' },
    {
      type: 'p',
      text: 'DMA setups take longer than standard loader installs. Follow the portal checklist and keep firmware notes from support before connecting to live raids.',
    },
  ],
};

const eliteFullFeatures = [
  'Enable Aim & Aim Key',
  'Draw Crosshair & Aim FOV',
  'Dynamic FOV & Smart Bone',
  'Target Lock & Prediction',
  'Player, Boss, Bot & Scav ESP',
  'Quest ESP & Exfil markers',
  'Loot ESP with price filters',
  'Radar & OOF arrows',
  'No recoil & no sway',
  'Infinite stamina & high jump',
  'Thermal vision & third person',
  'Loot through walls & extend reach',
  'Config save, load, import, export',
  'World weather & fog controls',
];

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  elite: {
    images: slide('esp', 'aimbot', 'loot', 'radar', 'misc', 'config'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: tarkovSystemRequirements,
    fullFeatures: eliteFullFeatures,
    overview: {
      title: 'Built around a clear Escape from Tarkov raid workflow',
      paragraphs: [
        'The full build groups aimbot, ESP, loot filters, radar, movement misc options, and config import/export in one operator panel. Modules stay organized by category so you can enable visibility first, then combat, then loot and world tools.',
        'Presets ship for conservative raid play. Test in offline or low-risk raids before turning on every misc option. Status and patch notes post to Discord and the portal after Tarkov updates.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('esp', 'config', 'misc'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Tarkov.',
    limitations:
      'Spoofing does not fix account-only bans. Never stack two spoof tools. Shared PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Tarkov after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Cold reboot guide',
      'Discord recovery support',
    ],
    overview: {
      title: 'Hardware recovery before your next raid',
      paragraphs: [
        'The HWID Spoofer helps when Escape from Tarkov or platform enforcement flags your PC hardware. Step-by-step portal workflows cover cleanup, spoof application, and verification.',
        'Use when fresh accounts fail on one machine but work elsewhere—not for account-only bans. After spoofing, load conservative cheat settings from tarkov-cheat.com before queuing raids.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('radar', 'config', 'world'),
    goodToKnow:
      'Confirm DMA hardware compatibility with support before purchase. Firmware and cloud session steps vary by rig.',
    limitations:
      'Cloud DMA requires compatible hardware and stable networking. Not a substitute for standard loader access if your PC is not DMA-ready.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqWifi', text: 'Stable low-latency connection for cloud DMA sessions.' },
      { icon: 'reqShieldGuide', text: 'Follow the Cloud DMA portal checklist before live raids.' },
    ],
    fullFeatures: [
      'Cloud DMA session setup',
      'Remote configuration sync',
      'Compatibility verification',
      'Firmware guidance',
      'Operator Discord support',
      'Preset import and export',
    ],
    overview: {
      title: 'External DMA-style workflows for compatible rigs',
      paragraphs: [
        'Cloud DMA connects operators who need external DMA architectures with guided setup and remote config support—not a drop-in replacement for every standard loader install.',
        'Staff verify hardware and firmware expectations in Discord before you run live raids. Pair with the main Escape from Tarkov cheat guide for feature parity planning.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = 'Escape from Tarkov Cheats';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide(
  'esp',
  'aimbot',
  'loot',
  'radar',
  'world',
  'misc',
  'config',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Escape from Tarkov cheats, HWID spoofer, and Cloud DMA utilities for PC raids.',
  buyUrl: checkoutPath('tarkov'),
};
