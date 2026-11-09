import type { IconName } from '../components/icons/types';

export interface ForumPost {
  slug: string;
  title: string;
  excerpt: string;
  upvotes: number;
  commentsCount: number;
  category: string;
  categoryTone: 'blue' | 'purple' | 'orange' | 'green';
  flair?: string;
  sourceTitle: string;
  sourcePath: string;
  author: string;
  body: string[];
  comments: { body: string }[];
}

export const forumCategories: { name: string; icon: IconName; desc: string }[] = [
  { name: 'Guides & Builds', icon: 'navBlog', desc: 'ESP, loot, and aimbot tuning from published guides.' },
  { name: 'General', icon: 'messageCircle', desc: 'Raid strategy, extracts, and feature questions.' },
  { name: 'Patch Talk', icon: 'faqVacUpdate', desc: 'Updates, loader status, and patch-day workflows.' },
  { name: 'Community', icon: 'users', desc: 'Checkout, configs, and first-raid checklists.' },
];

function makePost(input: {
  slug: string;
  title: string;
  upvotes: number;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  answer: string;
  detail?: string;
  tip?: string;
}): ForumPost {
  const body = [input.answer, input.detail, input.tip].filter(Boolean) as string[];
  const excerpt = input.answer.length > 160 ? `${input.answer.slice(0, 157)}…` : input.answer;
  const comments: { body: string }[] = [];
  if (input.detail) comments.push({ body: input.detail });
  if (input.tip) comments.push({ body: input.tip });
  return {
    slug: input.slug,
    title: input.title,
    excerpt,
    upvotes: input.upvotes,
    commentsCount: Math.max(comments.length, 2),
    category: input.category,
    categoryTone: input.categoryTone,
    flair: 'Guide Q&A',
    sourceTitle: input.sourceTitle,
    sourcePath: input.sourcePath,
    author: 'Tarkov Cheat guide team',
    body,
    comments:
      comments.length > 0
        ? comments
        : [
            { body: 'Test settings offline before live PMC raids.' },
            { body: 'Export a conservative preset after every stable session.' },
          ],
  };
}

const rawTopics = [
  {
    slug: 'conservative-esp-distance-for-interchange',
    title: 'What ESP distance works on Interchange without clutter?',
    upvotes: 84,
    category: 'Guides & Builds',
    categoryTone: 'blue' as const,
    sourceTitle: 'Tarkov player ESP and wallhack setup',
    sourcePath: '/blog/tarkov-player-esp-guide/',
    answer:
      'Start around 150–200 meters for PMC ESP with skeleton off until you trust type filters. Raise distance only after you confirm performance stays stable.',
    detail: 'Enable Scav and boss types separately so factory-style maps stay readable.',
    tip: 'Export a conservative preset before trying aggressive chams.',
  },
  {
    slug: 'loot-price-filter-starting-point',
    title: 'Minimum loot price filter for a new wipe?',
    upvotes: 71,
    category: 'Guides & Builds',
    categoryTone: 'blue' as const,
    sourceTitle: 'Loot ESP filters and minimum price presets',
    sourcePath: '/blog/tarkov-loot-esp-filters/',
    answer:
      'Many operators start near 15k–25k rubles early wipe and raise the floor as the economy settles. Pair with medical and tech category toggles instead of showing everything.',
    tip: 'Use separate presets for loot runs versus PvP-focused raids.',
  },
  {
    slug: 'aimbot-visible-check-first',
    title: 'Should visible-only aimbot be on from day one?',
    upvotes: 66,
    category: 'Guides & Builds',
    categoryTone: 'blue' as const,
    sourceTitle: 'Tarkov aimbot settings guide',
    sourcePath: '/blog/tarkov-aimbot-settings-guide/',
    answer:
      'Yes—combine visible check with a modest FOV and smart bone list before adding prediction or target lock.',
    detail: 'Teammate filters matter in squad raids; bind add-teammate early.',
  },
  {
    slug: 'radar-vs-oof-arrows',
    title: 'Radar or OOF arrows for solo PMC?',
    upvotes: 58,
    category: 'General',
    categoryTone: 'purple' as const,
    sourceTitle: 'Radar and extraction tracking guide',
    sourcePath: '/blog/tarkov-radar-exfil-tracking/',
    answer:
      'Solo players often run a small radar plus OOF arrows. Full radar with every player type on can distract during looting.',
  },
  {
    slug: 'exfil-timing-with-markers',
    title: 'How do exfil markers help on Woods?',
    upvotes: 52,
    category: 'General',
    categoryTone: 'purple' as const,
    sourceTitle: 'Radar and extraction tracking guide',
    sourcePath: '/blog/tarkov-radar-exfil-tracking/',
    answer:
      'Exfil ESP highlights open extracts and transitions so you rotate before the timer surprises you—especially when spawn is far from your usual extract.',
  },
  {
    slug: 'no-recoil-vs-weapon-mastery',
    title: 'No recoil slider vs learning full-auto control?',
    upvotes: 47,
    category: 'Patch Talk',
    categoryTone: 'orange' as const,
    sourceTitle: 'Escape from Tarkov cheats features guide',
    sourcePath: '/blog/tarkov-cheats-features-guide/',
    answer:
      'Light no-recoil and no-sway tuning can stabilize long fights, but max sliders look unnatural. Test in offline mode and record gameplay to spot over-tuning.',
  },
  {
    slug: 'thermal-vision-night-raids',
    title: 'Thermal vision settings for night raids?',
    upvotes: 44,
    category: 'Guides & Builds',
    categoryTone: 'blue' as const,
    sourceTitle: 'Escape from Tarkov cheats features guide',
    sourcePath: '/blog/tarkov-cheats-features-guide/',
    answer:
      'Pair thermal with conservative ESP distance. Disable redundant player chams if thermal already highlights threats.',
  },
  {
    slug: 'config-export-after-wipe',
    title: 'Should I export configs after every wipe?',
    upvotes: 39,
    category: 'Community',
    categoryTone: 'green' as const,
    sourceTitle: 'Config import and export guide',
    sourcePath: '/blog/tarkov-config-import-export/',
    answer:
      'Export after you settle loot filters and FOV. Wipe changes economy values—revisit minimum price even if combat settings stay the same.',
  },
  {
    slug: 'cloud-dma-compatibility-question',
    title: 'Who should consider Cloud DMA?',
    upvotes: 36,
    category: 'Community',
    categoryTone: 'green' as const,
    sourceTitle: 'Cloud DMA setup guide',
    sourcePath: '/blog/tarkov-cloud-dma-setup/',
    answer:
      'Operators with verified DMA-compatible hardware who want external architectures. Standard loader access covers most players without DMA.',
    tip: 'Open Discord with your motherboard and firmware details before buying Cloud DMA.',
  },
  {
    slug: 'hwid-before-new-account',
    title: 'HWID spoofer before or after a new account?',
    upvotes: 33,
    category: 'General',
    categoryTone: 'purple' as const,
    sourceTitle: 'HWID spoofer workflow guide',
    sourcePath: '/blog/tarkov-hwid-spoofer-guide/',
    answer:
      'Spoof and verify hardware IDs before logging into a new account on a flagged PC. Skipping verification often wastes a fresh login.',
  },
  {
    slug: 'patch-day-loader-reload',
    title: 'What to do on patch day before raiding?',
    upvotes: 61,
    category: 'Patch Talk',
    categoryTone: 'orange' as const,
    sourceTitle: 'Patch day checklist',
    sourcePath: '/blog/escape-from-tarkov-patch-checklist/',
    answer:
      'Read #status, download the current loader, import a conservative preset, and run offline tests. Do not carry old misc sliders into a new build.',
  },
  {
    slug: 'how-to-buy-first-time',
    title: 'First purchase checklist for Tarkov cheats?',
    upvotes: 55,
    category: 'Community',
    categoryTone: 'green' as const,
    sourceTitle: 'How to buy Escape from Tarkov cheats',
    sourcePath: '/blog/how-to-buy-tarkov-cheats/',
    answer:
      'Checkout, portal download, Discord intro with order email, ESP-first config, offline test, then live PMC with exported backup.',
  },
];

export const forumPosts: ForumPost[] = rawTopics.map(makePost);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
