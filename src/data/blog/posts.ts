import type { BlogPostFull } from './types';

const productHub = '/products/escape-from-tarkov-cheats/';

export const blogPosts: BlogPostFull[] = [
  {
    tag: 'Features',
    title: 'Escape from Tarkov cheats features: aimbot, ESP, loot and radar',
    slug: 'tarkov-cheats-features-guide',
    image: '/images/blog/tarkov-cheats-features-guide.png',
    desc: 'Features: Complete overview of aimbot, player ESP, loot ESP, radar, misc options, and config import/export. All articles Features 11 min read Nov 8, 2026.',
    date: 'Nov 8, 2026',
    readTime: '11 min read',
    featured: true,
    body: [
      {
        type: 'p',
        text: `The full raid build on [tarkov-cheat.com](${productHub}) groups combat, visuals, loot, and movement modules so you can enable features in a sensible order. This guide explains what each category does and how presets map to real raid workflows—not Arena content.`,
      },
      { type: 'h2', text: 'Combat and aimbot' },
      {
        type: 'p',
        text: 'Aimbot options include enable aim, aim key, crosshair drawing, dynamic FOV, smart bone lists, prediction, target lock, and visible-only checks. Start with a small FOV and visible check before adding prediction or bone trembling tweaks.',
      },
      { type: 'h2', text: 'ESP, loot, and radar' },
      {
        type: 'p',
        text: 'Player ESP covers PMC, Scav, boss, and bot types with health, weapons, skeleton, and quest marks. Loot ESP adds minimum price, category presets, and container filters. Radar, OOF arrows, and exfil markers close the awareness loop.',
      },
      { type: 'h2', text: 'Misc and configs' },
      {
        type: 'p',
        text: 'No recoil, no sway, stamina, thermal vision, and third person live under misc tabs. Use config save, load, import, and export to back up conservative and aggressive profiles between wipes.',
      },
      {
        type: 'cta',
        title: 'View full feature list',
        text: 'Compare modules and checkout via our secure path.',
        href: '/go/escape-from-tarkov/',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Tarkov aimbot settings: FOV, bones, and visible check',
    slug: 'tarkov-aimbot-settings-guide',
    image: '/images/blog/tarkov-aimbot-settings-guide.png',
    desc: 'Aimbot: Tune dynamic FOV, smart bone lists, prediction, and teammate filters for raid combat. All articles Setup 7 min read Nov 7, 2026 Tarkov aimbot.',
    date: 'Nov 7, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Aimbot feels best when it mirrors how you already aim—FOV should match your reflex range, not cover the whole screen. Enable draw aim FOV so you can see the active bubble during offline tests.',
      },
      { type: 'h2', text: 'Bone and target selection' },
      {
        type: 'p',
        text: 'Smart bone lists let you prioritize head or thorax per weapon class. Pair target lock with a sane max distance so long-range fights do not snap unnaturally.',
      },
      { type: 'h2', text: 'Teammates and visibility' },
      {
        type: 'p',
        text: 'In squad raids, configure teammate binds early. Visible-only targeting reduces shooting through smoke and thin cover you have not confirmed with ESP.',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Tarkov player ESP and wallhack setup',
    slug: 'tarkov-player-esp-guide',
    image: '/images/blog/tarkov-player-esp-guide.png',
    desc: 'PMC, Scav, and boss ESP with skeleton, health, and quest mark tuning. All articles Setup 6 min read Nov 6, 2026 Tarkov player ESP and wallhack setup PMC.',
    date: 'Nov 6, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Player ESP is the foundation for every other module. Enable type filters first—PMC, Scav, boss, and bot—then add skeleton or chams only if your frame rate stays stable.',
      },
      { type: 'h2', text: 'Distance and health' },
      {
        type: 'p',
        text: 'Cap max distance around 150–250 meters on large maps. Health gradients help you pick fights; weapon readouts tell you when to disengage.',
      },
      { type: 'h2', text: 'Quest and exfil overlays' },
      {
        type: 'p',
        text: 'Quest marks and exfil transitions reduce tabbing to the map. Keep exfil ESP subtle so loot highlights remain readable.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Loot ESP filters and minimum price presets',
    slug: 'tarkov-loot-esp-filters',
    image: '/images/blog/tarkov-loot-esp-filters.png',
    desc: 'Category presets, container filters, and corpse highlights for efficient looting.',
    date: 'Nov 5, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Loot ESP is about signal, not noise. Set a minimum price floor for the current wipe, then toggle military, medical, technical, and valuable categories instead of enabling every container.',
      },
      { type: 'h2', text: 'Containers and corpses' },
      {
        type: 'p',
        text: 'Stash, woodcrate, dead body, and computer filters help on maps like Shoreline and Streets. Draw distance should stay lower than player ESP so the screen does not flood.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'Radar, OOF arrows, and extraction tracking',
    slug: 'tarkov-radar-exfil-tracking',
    image: '/images/blog/tarkov-radar-exfil-tracking.png',
    desc: '2D radar layout, off-screen indicators, and exfil markers for safer extracts.',
    date: 'Nov 4, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Radar shines when you rotate between loot and fights. Keep the widget small and pair it with OOF arrows for off-screen threats during extracts.',
      },
      { type: 'h2', text: 'Exfil timing' },
      {
        type: 'p',
        text: 'Exfil markers show open extracts and transitions—critical on Woods and Lighthouse when your spawn is far from the usual exit.',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Config save, load, import, and export',
    slug: 'tarkov-config-import-export',
    image: '/images/blog/tarkov-config-import-export.png',
    desc: 'Backup conservative and aggressive presets and move them between PCs.',
    date: 'Nov 3, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Export a config after every stable offline test. Name presets by map and role—Interchange loot, Streets PvP, Labs conservative—so you are not guessing which file to load.',
      },
      { type: 'h2', text: 'Import safety' },
      {
        type: 'p',
        text: 'When importing shared configs, reset misc sliders you do not recognize. Unknown no-recoil or stamina values cause more bans reports than visible ESP tuning.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'HWID spoofer workflow after hardware flags',
    slug: 'tarkov-hwid-spoofer-guide',
    image: '/images/blog/tarkov-cheats-features-guide.png',
    desc: 'When to spoof, restore-point checklist, and verification before launching Tarkov.',
    date: 'Nov 2, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Use the HWID Spoofer when fresh accounts fail instantly on one PC but work elsewhere. It is not a fix for account-only bans.',
      },
      { type: 'h2', text: 'Checklist' },
      {
        type: 'ul',
        items: [
          'Create a Windows restore point',
          'Run the portal compatibility scan',
          'Apply spoof steps and cold reboot',
          'Verify identifiers changed before launching Tarkov',
        ],
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'Cloud DMA setup and compatibility checks',
    slug: 'tarkov-cloud-dma-setup',
    image: '/images/blog/tarkov-radar-exfil-tracking.png',
    desc: 'Hardware expectations, firmware notes, and remote config for Cloud DMA rigs.',
    date: 'Nov 1, 2026',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: 'Cloud DMA targets operators with compatible external hardware. Confirm firmware and motherboard details in Discord before checkout—standard loader access does not require DMA.',
      },
      { type: 'h2', text: 'Session flow' },
      {
        type: 'p',
        text: 'Follow the Cloud DMA portal checklist, complete remote config sync, and test overlays offline before connecting to live raids.',
      },
    ],
  },
  {
    tag: 'Updates',
    title: 'Patch day checklist for Escape from Tarkov cheats',
    slug: 'escape-from-tarkov-patch-checklist',
    image: '/images/blog/tarkov-player-esp-guide.png',
    desc: 'Status banner, loader reload, and conservative configs after every Tarkov update.',
    date: 'Oct 31, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'After every Tarkov update: read Discord #status, download the current loader, import a conservative preset, and test offline. Do not copy yesterday’s misc sliders into a new build.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'How to buy Escape from Tarkov cheats',
    slug: 'how-to-buy-tarkov-cheats',
    image: '/images/blog/tarkov-loot-esp-filters.png',
    desc: 'Checkout flow, portal access, and first-raid testing without enabling every module at once.',
    date: 'Oct 30, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Checkout unlocks portal access. Download the loader, join Discord with your order email, enable player ESP first, test offline, then export a backup before live PMC raids.',
      },
      {
        type: 'cta',
        title: 'Start checkout',
        text: 'Secure checkout for Escape from Tarkov raid access.',
        href: '/go/escape-from-tarkov/',
      },
    ],
  },
];
