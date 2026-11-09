import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, SITE_DOMAIN, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Tarkov Cheat',
    domain: SITE_DOMAIN,
    title: 'Escape from Tarkov Cheats — Aimbot, ESP & Loot | Tarkov Cheat',
    description:
      'Explore Escape from Tarkov cheats for PC featuring customizable aimbot, player ESP, loot ESP, extraction tracking, radar, no recoil, thermal vision, and Cloud DMA support.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Escape from Tarkov — raid build online',
    eyebrow: '#1 Undetected Provider',
    titleLine1: 'Tarkov',
    titleLine2: 'Cheats for PC',
    subtitle:
      'Aimbot, player ESP, loot ESP, radar, no recoil, and thermal vision for main Tarkov raids—configs you can save, import, and export with live support.',
    ctaPrimary: 'View products',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Raid modes',
    modes: ['PMC', 'Scav', 'Co-op', 'Night raids'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Combat, visuals, loot, and movement tools for Escape from Tarkov raids.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Precision under pressure.',
        desc: 'Configurable aim with FOV drawing, smart bone lists, prediction, and visible-only targeting for CQB and long-range fights.',
        bullets: [
          'Enable aim, aim key, and crosshair drawing',
          'Dynamic FOV with color and distance caps',
          'Smart bone, target lock, and prediction',
          'Teammate filters and bullet tracers',
        ],
        tags: ['tarkov aimbot', 'fov aimbot', 'smart bone'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See threats early.',
        desc: 'PMC, Scav, boss, and bot ESP with skeleton, chams, health, weapons, and quest markers—readable during heavy fights.',
        bullets: [
          'Box, skeleton, nickname, and distance',
          'Health gradient and type flags',
          'Quest marks and exfil transitions',
          'Visible check and max distance',
        ],
        tags: ['tarkov esp', 'player esp', 'tarkov wallhack'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Loot ESP',
        subtitle: 'Filter what matters.',
        desc: 'Highlight valuables, containers, and corpses with minimum price, category presets, and custom coloring.',
        bullets: [
          'Military, medical, technical, and stash filters',
          'Draw price and draw distance controls',
          'Loot through walls when enabled',
          'Search and preset slots',
        ],
        tags: ['tarkov loot esp', 'item price esp', 'loot filter'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Radar & exfils',
        subtitle: 'Map awareness.',
        desc: '2D radar, OOF arrows, hitmarks, and extraction markers so you rotate with timing—not guesses.',
        bullets: ['Radar overlay with player types', 'Exfil and transition markers', 'OOF arrows for off-screen threats', 'Ammo counter and hitmark options'],
        tags: ['tarkov radar', 'exfil esp', 'off-screen arrows'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Weapon & movement misc',
        subtitle: 'Control recoil and stamina.',
        desc: 'No recoil, no sway, instant ADS, reload tuning, stamina, high jump, and inertia tweaks for aggressive pushes.',
        bullets: [
          'No recoil, no sway, instant reload',
          'Infinite stamina and height multiplier',
          'No visor and thermal vision',
          'Third person with bind and length',
        ],
        tags: ['tarkov no recoil', 'infinite stamina', 'thermal vision'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'World visuals',
        subtitle: 'Tune the environment.',
        desc: 'Weather, wind, cloud density, rain, and fog controls for clearer sightlines when you need them.',
        bullets: ['Weather and fog sliders', 'Wind speed and cloud density', 'Rain intensity controls', 'Pairs with thermal for night raids'],
        tags: ['world esp', 'fog control', 'night raids'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream proof',
        subtitle: 'Creators stay safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['stream proof', 'obs safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Config system',
        subtitle: 'Profiles that travel.',
        desc: 'Save, load, import, and export full configs so you can swap between conservative and aggressive raid setups.',
        bullets: ['Named presets per map or role', 'Import and export for backup', 'Cloud-friendly workflow', 'Quick reset to defaults'],
        tags: ['config export', 'cheat presets', 'profile backup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud DMA ready',
        subtitle: 'External rigs supported.',
        desc: 'Pair standard loader access with Cloud DMA utilities when your hardware qualifies—staff verify compatibility first.',
        bullets: ['Separate Cloud DMA utility page', 'Firmware checks via Discord', 'Remote config guidance', 'Not required for standard access'],
        tags: ['tarkov cloud dma', 'dma cheats', 'external setup'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Raid tooling backed by patches—not promises',
    subtitle:
      'Most cheat shops ship stale loaders and vague support. We built tarkov-cheat.com around patch-day delivery, organized modules, and live operators.',
    usLabel: 'Tarkov Cheat',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Builds pushed within hours of major Tarkov updates—check Discord #status before you queue raids.',
      },
      {
        title: 'Readable ESP defaults',
        desc: 'Distance caps, type filters, and health gradients that stay legible in firefights—not cluttered rainbow walls.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Engineers for loader setup, loot filters, and HWID resets—24/7 shift coverage, not copy-paste tickets.',
      },
      {
        title: 'External loader architecture',
        desc: 'Overlay suite designed to run outside the game process with stream-proof modes for creators.',
      },
      {
        title: 'Config import and export',
        desc: 'Backup aggressive and conservative presets—move the same profile to a new PC without rebuilding sliders.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—limits depend on your license.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Escape from Tarkov changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs, and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'PC players running aimbot, ESP, and loot tools through tarkov-cheat.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first raid in just',
    titleHighlight: 'three simple steps',
    intro:
      'Follow the operator portal flow to download the loader, import a conservative preset, and enter Escape from Tarkov—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest Windows loader build.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Enable player ESP first, tune loot price filters, then add aimbot and misc options gradually.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & enter raids',
        desc: 'Check the live status banner, launch Tarkov, and save configs after a successful offline test.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Tarkov after updates.',
    items: [
      'Windows 10 & 11',
      'Escape from Tarkov client',
      'Auto updater',
      'Config import/export',
      'Discord support',
      'HWID reset',
      'Cloud DMA (compatible rigs)',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Full access',
    title: 'Escape from Tarkov cheats',
    subtitle: 'Aimbot, ESP, loot filters, radar, misc movement, and config system for main raids.',
    viewAll: 'View feature details',
    explore: 'Explore',
    items: [
      {
        badge: 'Full build',
        tier: 'Raids',
        name: 'Elite',
        title: 'Escape from Tarkov Cheats',
        desc: 'Complete raid suite with aimbot, player ESP, loot ESP, radar, no recoil, thermal vision, and config import/export.',
        features: ['Player & boss ESP', 'Loot ESP & radar', 'Aimbot & prediction', 'No recoil & stamina', 'Thermal & third person', 'Config import/export'],
        more: 80,
        href: `${productBase}elite/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Escape from Tarkov products',
    subtitle: 'Main raid cheats plus HWID spoofer and Cloud DMA utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials and MAC addresses—follow the portal setup guide before your next raid.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Cloud DMA',
        title: 'Cloud DMA',
        subtitle: 'External DMA workflows',
        desc: 'Remote DMA-style setup for compatible hardware—confirm rig compatibility with support before checkout.',
        features: ['Cloud session setup', 'Firmware guidance', 'Remote config sync', 'Operator Discord support'],
        more: 6,
        href: `${productBase}cloud-dma/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Aimbot tuning, loot ESP filters, radar setup, and patch-day checks for Escape from Tarkov.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Features',
        title: 'Escape from Tarkov cheats features: aimbot, ESP, loot and radar',
        slug: 'tarkov-cheats-features-guide',
        image: '/images/blog/tarkov-cheats-features-guide.png',
        desc: 'Complete overview of aimbot, player ESP, loot ESP, radar, misc options, and config import/export.',
        date: 'Nov 8, 2026',
        readTime: '11 min read',
      },
      {
        tag: 'Setup',
        title: 'Tarkov aimbot settings: FOV, bones, and visible check',
        slug: 'tarkov-aimbot-settings-guide',
        image: '/images/blog/tarkov-aimbot-settings-guide.png',
        desc: 'Tune dynamic FOV, smart bone lists, prediction, and teammate filters for raid combat.',
        date: 'Nov 7, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Tarkov player ESP and wallhack setup',
        slug: 'tarkov-player-esp-guide',
        image: '/images/blog/tarkov-player-esp-guide.png',
        desc: 'PMC, Scav, and boss ESP with skeleton, health, and quest mark tuning.',
        date: 'Nov 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Loot ESP filters and minimum price presets',
        slug: 'tarkov-loot-esp-filters',
        image: '/images/blog/tarkov-loot-esp-filters.png',
        desc: 'Category presets, container filters, and corpse highlights for efficient looting.',
        date: 'Nov 5, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Radar, OOF arrows, and extraction tracking',
        slug: 'tarkov-radar-exfil-tracking',
        image: '/images/blog/tarkov-radar-exfil-tracking.png',
        desc: '2D radar layout, off-screen indicators, and exfil markers for safer extracts.',
        date: 'Nov 4, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Config save, load, import, and export',
        slug: 'tarkov-config-import-export',
        image: '/images/blog/tarkov-config-import-export.png',
        desc: 'Backup conservative and aggressive presets and move them between PCs.',
        date: 'Nov 3, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'HWID spoofer workflow after hardware flags',
        slug: 'tarkov-hwid-spoofer-guide',
        image: '/images/blog/tarkov-cheats-features-guide.png',
        desc: 'When to spoof, restore-point checklist, and verification before launching Tarkov.',
        date: 'Nov 2, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Cloud DMA setup and compatibility checks',
        slug: 'tarkov-cloud-dma-setup',
        image: '/images/blog/tarkov-radar-exfil-tracking.png',
        desc: 'Hardware expectations, firmware notes, and remote config for Cloud DMA rigs.',
        date: 'Nov 1, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Updates',
        title: 'Patch day checklist for Escape from Tarkov cheats',
        slug: 'escape-from-tarkov-patch-checklist',
        image: '/images/blog/tarkov-player-esp-guide.png',
        desc: 'Status banner, loader reload, and conservative configs after every Tarkov update.',
        date: 'Oct 31, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy Escape from Tarkov cheats',
        slug: 'how-to-buy-tarkov-cheats',
        image: '/images/blog/tarkov-loot-esp-filters.png',
        desc: 'Checkout flow, portal access, and first-raid testing without enabling every module at once.',
        date: 'Oct 30, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning between raids without tabbing through chaos.',
    items: [
      { num: '01', label: 'Combat', title: 'Aimbot that respects FOV', desc: 'FOV, bones, prediction, and visible check in one combat tab.' },
      { num: '02', label: 'Visuals', title: 'ESP that stays readable', desc: 'Filter by distance, type, health gradient, and quest marks.' },
      { num: '03', label: 'Loot', title: 'Value-first looting', desc: 'Minimum price, categories, and container presets on one overlay.' },
      { num: '04', label: 'Radar', title: 'Extractions on lock', desc: 'Radar, OOF arrows, and exfil markers on a compact panel.' },
      { num: '05', label: 'Misc', title: 'Movement & weapons', desc: 'No recoil, stamina, thermal vision, and third person toggles.' },
      { num: '06', label: 'Profiles', title: 'Configs for every map', desc: 'Save, import, and export presets with cloud-friendly backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Tarkov config you can reuse every raid.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: `Read the live banner on ${SITE_DOMAIN} before you buy or launch.`,
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Complete checkout',
        desc: 'Unlock raid access and utilities through our secure checkout flow.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable ESP first, and test in an offline raid.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, export configs for backup and future raids.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Tarkov plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal after major updates—check before you queue.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with ESP and radar, then add aimbot and misc—not every slider on day one.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or loot filters? Discord staff walk you through live.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Tarkov Cheat support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about access and utilities.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID, and Cloud DMA issues.",
        linkLabel: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans, and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Live operators',
        desc: 'Discord engineers on shift 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: `The address used at checkout on ${SITE_DOMAIN} or via our secure checkout.` },
      { title: 'Platform', desc: 'Escape from Tarkov on Windows 10 or 11—and your client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or launcher.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans, and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Escape from Tarkov cheats are online?',
        a: `The live status banner is on ${SITE_DOMAIN} and in the Discord #status channel. Always check after a Tarkov update.`,
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide, and config library via our secure checkout. Follow the guide before launching Tarkov.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party software?',
        a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Escape from Tarkov on Windows 10/11 64-bit. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your license.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: `Raid cheats, HWID Spoofer, and Cloud DMA live at ${SITE_DOMAIN}/products/escape-from-tarkov-cheats/ with feature lists and checkout via our partner.`,
      },
    ],
  },
  footer: {
    tagline: 'Escape from Tarkov cheats — aimbot, ESP, and tools for PC. tarkov-cheat.com',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/escape-from-tarkov-cheats/elite/', label: 'Full raid cheats', ariaLabel: 'Raid cheats' },
      { href: '/products/escape-from-tarkov-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read raid guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Tarkov Cheat',
      description: `Tarkov Cheat provides Escape from Tarkov cheat features, utility tools, and PC support resources at ${SITE_DOMAIN}.`,
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Tarkov Cheat is a PC-focused resource for Escape from Tarkov players exploring aimbot, player ESP, loot ESP, and movement misc workflows. We publish setup guides, feature explainers, and status notes so you can evaluate tools before checkout.',
            'Battlestate Games and Escape from Tarkov are trademarks of their respective owners. This site is not affiliated with them.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers the full raid cheat build, HWID utilities, Cloud DMA workflows, and configuration guides. Blog articles explain conservative presets, patch-day checks, and loot filter tuning.',
            'Content updates when patches land or loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, client version, and Windows build when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description: `How Tarkov Cheat handles analytics, cookies, and contact data when you use ${SITE_DOMAIN}.`,
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on this site.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description: `Purchase, license, refund, and use terms for Tarkov Cheat products and ${SITE_DOMAIN}.`,
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: November 2026. By using this site or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Escape from Tarkov cheat software and utility tools (HWID Spoofer, Cloud DMA) delivered through an operator portal and loader for Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Escape from Tarkov or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. This site does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Tarkov.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your license and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Escape from Tarkov on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page with order email, Windows version, and loader screenshots.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Escape from Tarkov can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue raids while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Tarkov Cheat Support',
      description: `Get support for loader, HWID, Cloud DMA, and checkout questions at ${SITE_DOMAIN}.`,
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Buy Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Tarkov Cheat home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Tarkov Cheat on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
