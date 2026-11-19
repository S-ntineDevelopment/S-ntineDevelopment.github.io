export type UIStyleId =
  | 'all'
  | 'idle'
  | 'squishie'
  | 'bleach'
  | 'adn'
  | 'tooling';

export type UIStyleCategory = {
  id: UIStyleId;
  label: string;
  shortLabel: string;
  tagline: string;
  bestFor: string;
};

export type UIShowcaseItem = {
  id: string;
  title: string;
  styleId: Exclude<UIStyleId, 'all'>;
  styleLabel: string;
  project: string;
  screenType: string;
  summary: string;
  deliverables: string[];
  image: string;
  featured?: boolean;
};

export type ShowcaseVideo = {
  id: string;
  number: string;
  category: 'ANIMATED UI' | 'GAMEPLAY SYSTEM';
  title: string;
  description: string;
  src: string;
  poster: string;
  specs: string;
};

export type ProprietaryTool = {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
};

export type SngineSubsystem = {
  name: string;
  modules: number;
  summary: string;
  keyFiles: string[];
};

export type ShippedCodebase = {
  project: string;
  genre: string;
  scale: string;
  systemsCovered: string[];
};

export type ScriptingSystem = {
  number: string;
  title: string;
  category: string;
  scale: string;
  description: string;
  snippetFile: string;
  snippet: string[];
  stack: string[];
};

export type PricingTier = {
  id: string;
  name: string;
  badge: string;
  usd: string;
  robux: string;
  turnaround: string;
  revisions: string;
  theme: 'light' | 'slate' | 'dark' | 'deluxe';
  tagline: string;
  features: string[];
};

export type FaqItem = {
  q: string;
  a: string;
};

export const uiStyleCategories: UIStyleCategory[] = [
  {
    id: 'all',
    label: 'All Finished Work',
    shortLabel: 'ALL',
    tagline:
      '49 finished, Studio-compiled UI screens across Idle Cartel, Steal A Squishie, Requiem (Bleach RPG), AD&N Train System, and RoUI audits.',
    bestFor: 'Full-game UI suites, turnkey Luau integration, and cross-device scaling',
  },
  {
    id: 'idle',
    label: 'Idle Cartel',
    shortLabel: 'IDLE CARTEL',
    tagline:
      'Finished Black Market P2P marketplace, buy/confirm/receipt flows, Soldados gear & training, and desktop/console/tablet/phone responsive views.',
    bestFor: 'Tycoons, empire builders, player-to-player economies & strategy games',
  },
  {
    id: 'squishie',
    label: 'Steal A Squishie',
    shortLabel: 'SQUISHIE',
    tagline:
      'Finished front-page simulator UI compiled in RoUI: Inventory, Crates, Reveal, Daily Rewards, Trolls Shop, Catch Minigame, Events, Traps & Native HUD.',
    bestFor: 'Collectible simulators, gacha/unboxing, high-conversion Robux storefronts',
  },
  {
    id: 'bleach',
    label: 'Bleach / Requiem RPG',
    shortLabel: 'ANIME RPG',
    tagline:
      'Complete finished Requiem: Shattered Souls suite — Shop, Inventory, Skills, Stats, Quests, Map, Main Menu, Trade, Party, Profile, Combat HUD & Settings.',
    bestFor: 'Anime battlegrounds, Bleach/Shonen RPGs, action combat experiences',
  },
  {
    id: 'adn',
    label: 'AD&N Train System',
    shortLabel: 'AD&N TRAINS',
    tagline:
      'Finished industrial railway UIs compiled in RoUI: CTC Dispatcher board, Operations, Industry Overview, Consist Setup, Locomotive Store, Turntable & Settings.',
    bestFor: 'Train sims, logistics, industrial CAD interfaces & complex simulation',
  },
  {
    id: 'tooling',
    label: 'RoUI & Studio Builds',
    shortLabel: 'ROUI + STUDIO',
    tagline:
      'Live Roblox Studio captures (SCV2 Vehicle HUD, Mano Booking MDT, MDT Finder) plus RoUI dual-viewport TouchGui audits and 9-state spritesheet verification.',
    bestFor: 'Studio-ready responsive verification, whole-state buttons & RP systems',
  },
];

export const uiShowcaseItems: UIShowcaseItem[] = [
  // --- IDLE CARTEL (11 Finished Screens) ---
  {
    id: 'ic-black-market-real',
    title: 'Black Market — 209-Node Painted Commerce UI',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Finished RoUI Build',
    summary:
      'Full-bleed night-bazaar marketplace with unobstructed painted item cards, rarity pips, seller reputation, and right-hand purchase inspector.',
    deliverables: ['Studio-Ready ScreenGui', 'PC / Mobile / Console', '9-State CTA Button'],
    image: '/portfolio/ic-black-market-real.webp',
    featured: true,
  },
  {
    id: 'ic-marketplace-desktop',
    title: 'Black Market — Live P2P Listings (Desktop)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Finished In-Game UI',
    summary:
      'Live player-to-player marketplace running with real seller listings, stock counts, UTC timestamps, fee breakdown, and pagination.',
    deliverables: ['Live P2P Listings', 'Search & Sort', 'Pagination'],
    image: '/portfolio/ic-marketplace-desktop.webp',
    featured: true,
  },
  {
    id: 'ic-marketplace-buy-confirm',
    title: 'Marketplace — Purchase Confirmation Flow',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Transaction Modal',
    summary:
      'Server-authoritative purchase confirmation modal protecting against stale prices and race conditions.',
    deliverables: ['Atomic Purchase Flow', 'Price Lock Guard', 'Clean Modal'],
    image: '/portfolio/ic-marketplace-buy-confirm.webp',
  },
  {
    id: 'ic-marketplace-shop-active',
    title: 'Marketplace — My Shop Active Listings',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Seller Dashboard',
    summary:
      'Player storefront management view for tracking active listings, remaining stock, and delist actions.',
    deliverables: ['Seller Management', 'Live Stock', 'State Sync'],
    image: '/portfolio/ic-marketplace-shop-active.webp',
  },
  {
    id: 'ic-marketplace-receipts',
    title: 'Marketplace — Receipts & Ledger History',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Transaction Ledger UI',
    summary:
      'Persistent transaction history and proceeds recovery view ensuring zero lost funds across disconnects.',
    deliverables: ['Receipt Recovery', 'Audit Trail', 'ProfileStore Sync'],
    image: '/portfolio/ic-marketplace-receipts.webp',
  },
  {
    id: 'ic-marketplace-console',
    title: 'Marketplace — Console Focus Layout (1080p)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Console UI',
    summary:
      'Gamepad-navigable marketplace layout tuned for 10-foot TV legibility and clean GuiService focus routing.',
    deliverables: ['Console Safe Zone', 'Gamepad Navigation', '1080p Crisp'],
    image: '/portfolio/ic-marketplace-console.webp',
  },
  {
    id: 'ic-marketplace-phone',
    title: 'Marketplace — Mobile Phone Layout (844x390)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Mobile Landscape UI',
    summary:
      'Compact landscape phone layout preserving 44px+ tap targets and TouchGui safe zones.',
    deliverables: ['Mobile Landscape', 'TouchGui Safe', '44px+ Hitboxes'],
    image: '/portfolio/ic-marketplace-phone.webp',
  },
  {
    id: 'ic-marketplace-tablet',
    title: 'Marketplace — Tablet Responsive Layout',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Tablet UI',
    summary:
      'Balanced tablet aspect-ratio layout adapting grid density without clipping or text overflow.',
    deliverables: ['Tablet Aspect Ratio', 'Adaptive Grid', 'Scale Layout'],
    image: '/portfolio/ic-marketplace-tablet.webp',
  },
  {
    id: 'ic-soldados-gear',
    title: 'Soldados — Crew Gear Sets (Mobile)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Crew Equipment UI',
    summary:
      'Mobile-verified crew loadout and gear-set selector with clean stat comparison cards.',
    deliverables: ['Crew Loadout', 'Mobile Verified', 'Scrolling List'],
    image: '/portfolio/ic-soldados-gear.webp',
  },
  {
    id: 'ic-soldados-training',
    title: 'Soldados — Crew Training (Mobile)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Progression UI',
    summary:
      'Crew skill progression and training queue interface built for thumb-friendly mobile play.',
    deliverables: ['Training Queue', 'Mobile First', 'Progress Bars'],
    image: '/portfolio/ic-soldados-training.webp',
  },
  {
    id: 'ic-store-offer',
    title: 'Syndicate Store — Monetization Offer',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Robux Storefront',
    summary:
      'High-contrast promotional offer layout engineered for clean Robux bundle conversion.',
    deliverables: ['Monetization UI', 'Bundle Cards', 'Studio Ready'],
    image: '/portfolio/ic-store-offer.webp',
  },

  // --- STEAL A SQUISHIE (12 Finished Screens) ---
  {
    id: 'sas-inventory',
    title: 'Inventory — Rarity Grid, Routing & Bulk Sell',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Finished RoUI Build',
    summary:
      'Complete collectible inventory with rarity filters, search, Safe Shelf / Outside / Bag routing, and multi-quantity sell controls.',
    deliverables: ['RoUI Compiled', 'Rarity Cards', 'Bulk Sell Controls'],
    image: '/portfolio/sas-inventory.webp',
    featured: true,
  },
  {
    id: 'sas-hud-native',
    title: 'Gameplay HUD — Native Roblox Build (r127)',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Native Studio HUD',
    summary:
      'Full gameplay HUD with currency pills, event countdown, daily quest tracker, action sidebar, and shelf progress bar.',
    deliverables: ['Native Studio Build', 'Safe Area Scaled', 'Live HUD'],
    image: '/portfolio/sas-hud-native.webp',
    featured: true,
  },
  {
    id: 'sas-crates',
    title: 'Crate Store & Odds Inspector',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Finished RoUI Build',
    summary:
      'Vibrant gacha crate storefront displaying tier odds, featured rewards, and instant open/buy CTAs.',
    deliverables: ['Gacha Storefront', 'Odds Display', 'RoUI Compiled'],
    image: '/portfolio/sas-crates.webp',
    featured: true,
  },
  {
    id: 'sas-crate-reveal',
    title: 'Crate Opening — Rarity Reveal Screen',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Finished Reveal UI',
    summary:
      'High-energy unboxing reveal presentation with rarity glow treatment and instant equip/continue flow.',
    deliverables: ['Reveal Sequence', 'Rarity Framing', 'Zero-Lag UI'],
    image: '/portfolio/sas-crate-reveal.webp',
  },
  {
    id: 'sas-daily',
    title: 'Daily Rewards — 7-Day Streak Modal',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Finished RoUI Build',
    summary:
      'Playful retention streak modal with clear claimed, available, and locked day states.',
    deliverables: ['Retention Modal', 'State Badges', 'RoUI Compiled'],
    image: '/portfolio/sas-daily.webp',
  },
  {
    id: 'sas-menus',
    title: 'Pets, Store & System Menus Suite',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Finished RoUI Build',
    summary:
      'Cohesive menu suite sharing unified typography, chunky outlines, and whole-state button feedback.',
    deliverables: ['Unified Menu Kit', 'Consistent Chrome', 'Studio Ready'],
    image: '/portfolio/sas-menus.webp',
  },
  {
    id: 'sas-trolls-shop',
    title: 'Trolls Shop — Robux Chaos Store',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Finished RoUI Build',
    summary:
      'Monetization shop for server-wide troll actions with clear icons, cooldown states, and Robux pricing.',
    deliverables: ['Monetization UI', 'Icon Cards', 'RoUI Compiled'],
    image: '/portfolio/sas-trolls-shop.webp',
  },
  {
    id: 'sas-catch-minigame',
    title: 'Tap-to-Catch Minigame & State Feedback',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Finished RoUI Build',
    summary:
      'Responsive timing-bar minigame built for zero-latency mobile tapping and desktop input.',
    deliverables: ['Minigame HUD', 'Touch Safe', 'State Feedback'],
    image: '/portfolio/sas-catch-minigame.webp',
  },
  {
    id: 'sas-events',
    title: 'Live Events Overview Panel',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Live-Ops UI',
    summary:
      'Scheduled server event tracker highlighting active multipliers, timers, and participation rewards.',
    deliverables: ['Live-Ops Panel', 'Countdown Timers', 'Clean Layout'],
    image: '/portfolio/sas-events.webp',
  },
  {
    id: 'sas-traps',
    title: 'Base Traps & Defense Shop',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Gameplay Shop UI',
    summary:
      'Base-defense trap selector with unlock progression, cost badges, and placement triggers.',
    deliverables: ['Shop Cards', 'Unlock States', 'Studio Ready'],
    image: '/portfolio/sas-traps.webp',
  },
  {
    id: 'sas-crate-pools',
    title: 'Crate Pools & Collection Index',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Collection Completion UI',
    summary:
      'Index view tracking discovered vs. undiscovered squishies across every crate pool.',
    deliverables: ['Index Grid', 'Completion Tracker', 'Rarity Tiers'],
    image: '/portfolio/sas-crate-pools.webp',
  },
  {
    id: 'sas-wallet-burst',
    title: 'Wallet & Currency Burst HUD',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Currency Feedback UI',
    summary:
      'Gold and Gems HUD cards paired with animated currency-gain burst feedback.',
    deliverables: ['Currency Cards', 'Burst Animation', 'Clean Counters'],
    image: '/portfolio/sas-wallet-burst.webp',
  },

  // --- BLEACH / REQUIEM: SHATTERED SOULS (13 Finished Screens) ---
  {
    id: 'bleach-shop',
    title: 'Requiem — Metallic Crimson Shop',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Ornate silver-and-crimson framed shop with sidebar navigation, category tabs, item inspector, and console hotbar glyphs.',
    deliverables: ['Console LB/RB/A/B', 'Custom Metallic Frame', '8-Slot Hotbar'],
    image: '/portfolio/bleach-shop.webp',
    featured: true,
  },
  {
    id: 'bleach-inventory',
    title: 'Requiem — Inventory & Item Inspector',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Full RPG inventory featuring category filters, search/sort controls, item rarity inspector, and Equip/Use/Drop/Sell actions.',
    deliverables: ['Category Rail', 'Search & Sort', 'Action Buttons'],
    image: '/portfolio/bleach-inventory.webp',
    featured: true,
  },
  {
    id: 'bleach-skills',
    title: 'Requiem — Branching Skill Tree (Hakuda / Sword / Kido)',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Multi-tree progression graph with prerequisite connectors, rank inspector, upgrade CTA, and direct hotbar assignment.',
    deliverables: ['8 Skill Trees', 'Prerequisite Graph', 'Hotbar Binding'],
    image: '/portfolio/bleach-skills.webp',
    featured: true,
  },
  {
    id: 'bleach-stats',
    title: 'Requiem — Character Stats & Allocation',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Clean stat allocation and derived combat telemetry built to match the unified Requiem chrome.',
    deliverables: ['Stat Allocation', 'Derived Metrics', 'Unified Chrome'],
    image: '/portfolio/bleach-stats.webp',
  },
  {
    id: 'bleach-quests',
    title: 'Requiem — Quests & Objectives Tracker',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Active and completed quest journal with objective breakdowns, reward previews, and tracking toggles.',
    deliverables: ['Quest Journal', 'Reward Previews', 'Console Ready'],
    image: '/portfolio/bleach-quests.webp',
  },
  {
    id: 'bleach-map',
    title: 'Requiem — World Map & Fast Travel',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Multi-realm map interface supporting Soul Society, Hueco Mundo, and Quincy zone navigation.',
    deliverables: ['Multi-Realm Map', 'Zone Markers', 'Clean Legend'],
    image: '/portfolio/bleach-map.webp',
  },
  {
    id: 'bleach-main-menu',
    title: 'Requiem — Main Menu & Play Flow',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Atmospheric anime title screen with slot selection, server browser access, and clean typography.',
    deliverables: ['Title Screen', 'Slot Selection', 'Atmospheric Frame'],
    image: '/portfolio/bleach-main-menu.webp',
  },
  {
    id: 'bleach-trade',
    title: 'Requiem — Player-to-Player Trade',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Dual-offer trade window with lock/ready states and anti-scam confirmation countdown.',
    deliverables: ['Dual-Offer Grid', 'Ready Lock States', 'Scam Guard'],
    image: '/portfolio/bleach-trade.webp',
  },
  {
    id: 'bleach-party',
    title: 'Requiem — Party & Squad Roster',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Squad management screen for inviting allies, inspecting member roles, and managing party leadership.',
    deliverables: ['Squad Roster', 'Invite Flow', 'Role Badges'],
    image: '/portfolio/bleach-party.webp',
  },
  {
    id: 'bleach-profile',
    title: 'Requiem — Player Profile & Combat Record',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Character dossier displaying faction standing, titles, clan lineage, and PvP/PvE combat records.',
    deliverables: ['Character Dossier', 'Faction Standing', 'Clean Layout'],
    image: '/portfolio/bleach-profile.webp',
  },
  {
    id: 'bleach-hud-combat',
    title: 'Requiem — Combat HUD & Ability Cooldowns',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'In-combat HUD displaying health/reiatsu/stamina bars, awakening meter, and ability hotbar cooldowns.',
    deliverables: ['Combat HUD', 'Cooldown Overlays', 'Safe-Zone Clean'],
    image: '/portfolio/bleach-hud-combat.webp',
  },
  {
    id: 'bleach-merchant',
    title: 'Requiem — NPC Merchant Storefront',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'In-world merchant UI tailored for weapons, clothing, rare drops, and training items.',
    deliverables: ['Merchant UI', 'Currency Display', 'Inspector'],
    image: '/portfolio/bleach-merchant.webp',
  },
  {
    id: 'bleach-settings',
    title: 'Requiem — Settings (Controls / Audio / Console)',
    styleId: 'bleach',
    styleLabel: 'Bleach / Requiem',
    project: 'Requiem: Shattered Souls',
    screenType: 'Finished Suite Screen',
    summary:
      'Multi-tab settings menu covering gameplay, graphics, audio, keybindings, and console controls.',
    deliverables: ['Multi-Tab Settings', 'Keybind Remapper', 'Accessibility'],
    image: '/portfolio/bleach-settings.webp',
  },

  // --- AD&N TRAIN SYSTEM (7 Finished RoUI Screens) ---
  {
    id: 'adn-dispatcher',
    title: 'CTC Dispatcher — Live Track Layout & Signal Control',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished RoUI Build',
    summary:
      'Real-time railway dispatcher board displaying yard occupancy, switch SW-12 alignment, signal S-04 aspects, and route requests.',
    deliverables: ['Live Schematic', 'Signal & Switch Control', 'Route Queue'],
    image: '/portfolio/adn-dispatcher.webp',
    featured: true,
  },
  {
    id: 'adn-operations',
    title: 'Operations — Switch Lists, Waybills & Contracts',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished RoUI Build',
    summary:
      'Freight operations interface tracking active switching orders, car destinations, and contract payouts.',
    deliverables: ['Waybill Flow', 'Switch Lists', 'RoUI Compiled'],
    image: '/portfolio/adn-operations.webp',
    featured: true,
  },
  {
    id: 'adn-industry',
    title: 'Industry Overview — Supply & Freight Demand',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished RoUI Build',
    summary:
      'Map-linked industry overview showing active cargo supply, siding capacity, and commodity demand.',
    deliverables: ['Supply Telemetry', 'Siding Status', 'Clean CAD UI'],
    image: '/portfolio/adn-industry.webp',
  },
  {
    id: 'adn-consist-setup',
    title: 'Consist Features & Rolling Stock Setup',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished RoUI Build',
    summary:
      'Train consist builder for configuring locomotives, wagons, braking specs, and operational features.',
    deliverables: ['Consist Builder', 'Spec Readouts', 'RoUI Compiled'],
    image: '/portfolio/adn-consist-setup.webp',
  },
  {
    id: 'adn-loco-store',
    title: 'Locomotive Store & Fleet Catalogue',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished RoUI Build',
    summary:
      'Rolling-stock dealership displaying locomotive classes, tractive stats, and purchase/unlock states.',
    deliverables: ['Fleet Catalogue', 'Stat Bars', 'Unlock States'],
    image: '/portfolio/adn-loco-store.webp',
  },
  {
    id: 'adn-turntable',
    title: 'Turntable Control — Interactive Alignment UI',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished RoUI Build',
    summary:
      'Precision turntable rotation and track-alignment controller for yard operations.',
    deliverables: ['Interactive Controls', 'Track Alignment', 'Clean CAD'],
    image: '/portfolio/adn-turntable.webp',
  },
  {
    id: 'adn-settings',
    title: 'AD&N Settings — Controls & Keybindings',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished RoUI Build',
    summary:
      'Full simulation settings suite covering controls, graphics, audio, world labels, and accessibility.',
    deliverables: ['6 Settings Tabs', 'Input Binding', 'RoUI Compiled'],
    image: '/portfolio/adn-settings.webp',
  },

  // --- ROUI TOOLING & REAL STUDIO CAPTURES (6) ---
  {
    id: 'tool-dual-viewport',
    title: 'RoUI Dual-Viewport Audit (PC 1080p vs Mobile TouchGui)',
    styleId: 'tooling',
    styleLabel: 'RoUI & Studio',
    project: 'RoUI Studio',
    screenType: 'Automated Verification',
    summary:
      'Simultaneous Desktop 1080p and Mobile Landscape 844x390 audit overlaying Roblox TouchGui safe zones and 44px tap-target checks.',
    deliverables: ['TouchGui Safe Zones', '44px Tap Audit', 'Gamepad Focus'],
    image: '/portfolio/tool-dual-viewport.webp',
    featured: true,
  },
  {
    id: 'tool-9state-sheet',
    title: 'RoUI 9-State Button Contact Sheet',
    styleId: 'tooling',
    styleLabel: 'RoUI & Studio',
    project: 'RoUI Studio',
    screenType: 'State Machine Proof',
    summary:
      'Automated state-machine verification across Idle, Hover, Pressed, Hold 50%, Selected, Disabled, No Funds, Locked, and Cooldown.',
    deliverables: ['9 Canonical States', 'Stationary Hitbox', 'ClientAnimations.States'],
    image: '/portfolio/tool-9state-sheet.webp',
    featured: true,
  },
  {
    id: 'tool-native-fantasy',
    title: 'RoUI Native Vector Equipment Shop',
    styleId: 'tooling',
    styleLabel: 'RoUI & Studio',
    project: 'RoUI Studio',
    screenType: '66-Node Native Vector',
    summary:
      '100% native vector Roblox UI compiled directly from RoUI schematics with crisp UIStroke/UICorner geometry.',
    deliverables: ['100% Native Vector', 'Zero Image Bloat', '3D Viewport'],
    image: '/portfolio/tool-native-fantasy.webp',
  },
  {
    id: 'studio-vehicle-hud',
    title: 'SCV2 — Live Vehicle Telemetry HUD',
    styleId: 'tooling',
    styleLabel: 'RoUI & Studio',
    project: 'SCV2 ReWrite',
    screenType: 'Live Roblox Studio',
    summary:
      'Compact live driving HUD tracking MPH, gear, ignition, locks, blinkers, parking brake, headlights, engine health, and fuel.',
    deliverables: ['Live Studio Capture', 'Vehicle Telemetry', 'Luau Wired'],
    image: '/portfolio/studio-vehicle-hud.webp',
    featured: true,
  },
  {
    id: 'studio-booking-mdt',
    title: 'Mano County — Law Enforcement Booking Station',
    styleId: 'tooling',
    styleLabel: 'RoUI & Studio',
    project: 'Mano County RP',
    screenType: 'Live Roblox Studio',
    summary:
      'In-game police booking terminal with searchable penal codes, live sentence duration accumulator, and charge summary.',
    deliverables: ['Live Studio Capture', 'Penal Code System', 'Role Gated'],
    image: '/portfolio/studio-booking-mdt.webp',
  },
  {
    id: 'studio-mdt-finder',
    title: 'Police MDT — Player & Warrant Lookup',
    styleId: 'tooling',
    styleLabel: 'RoUI & Studio',
    project: 'RP MDT System',
    screenType: 'Live Roblox Studio',
    summary:
      'Live citizen lookup displaying conviction counts, active warrants/citations, and firearms/vehicle license status.',
    deliverables: ['Live Studio Capture', 'Warrant Lookup', 'Database UI'],
    image: '/portfolio/studio-mdt-finder.webp',
  },
];

export const marqueeHighlights = uiShowcaseItems.filter((item) =>
  [
    'ic-black-market-real',
    'sas-inventory',
    'bleach-shop',
    'adn-dispatcher',
    'ic-marketplace-desktop',
    'sas-hud-native',
    'bleach-skills',
    'adn-operations',
    'sas-crates',
    'bleach-inventory',
  ].includes(item.id)
);

export const showcaseVideos: ShowcaseVideo[] = [
  {
    id: 'vid-bleach-complete',
    number: '01',
    category: 'ANIMATED UI',
    title: 'Bleach / Requiem — Complete Animated UI (60fps)',
    description:
      'Full 60fps animated UI showcase featuring custom painted backdrops, metallic chrome frames, and responsive state transitions.',
    src: '/videos/bleach-complete-ui-60fps.mp4',
    poster: '/portfolio/bleach-stats.webp',
    specs: '60 FPS · FULL UI SUITE',
  },
  {
    id: 'vid-anime-stats',
    number: '02',
    category: 'ANIMATED UI',
    title: 'Character Stats — 60fps Flame & Radar Motion',
    description:
      'Live 60fps animated flame backdrop, crimson radar chart, and responsive stat allocation panel.',
    src: '/videos/anime-stats-60fps.mp4',
    poster: '/portfolio/bleach-stats.webp',
    specs: '60 FPS · ANIMATED UI',
  },
  {
    id: 'vid-anime-skills',
    number: '03',
    category: 'ANIMATED UI',
    title: 'Skill Tree & Gem Energy Motion (60fps)',
    description:
      'Animated branching skill tree with glowing border energy, node feedback, and metallic framing.',
    src: '/videos/anime-skills-60fps.mp4',
    poster: '/portfolio/bleach-skills.webp',
    specs: '60 FPS · MOTION SUITE',
  },
  {
    id: 'vid-anime-buttons',
    number: '04',
    category: 'ANIMATED UI',
    title: 'Whole-State Spritesheet Buttons (Zero Flat Tweens)',
    description:
      'Stationary hitboxes switching pre-rendered Idle, Hover, and Pressed atlas cells via ImageRectOffset.',
    src: '/videos/anime-buttons-60fps.mp4',
    poster: '/portfolio/tool-9state-sheet.webp',
    specs: 'SPRITESHEET · NO FLAT TWEENS',
  },
  {
    id: 'vid-bleach-inventory',
    number: '05',
    category: 'ANIMATED UI',
    title: 'Requiem Inventory — Animated Controls (60fps)',
    description:
      'Interactive inventory hover, selection, and button feedback rendered at a locked 60fps.',
    src: '/videos/bleach-inventory-60fps.mp4',
    poster: '/portfolio/bleach-inventory.webp',
    specs: '60 FPS · INVENTORY UI',
  },
  {
    id: 'vid-bleach-abilities',
    number: '06',
    category: 'ANIMATED UI',
    title: 'Requiem Abilities — Card State Animation',
    description:
      'Animated ability cards with crisp focus highlights, lock states, and tactile press feedback.',
    src: '/videos/bleach-abilities-60fps.mp4',
    poster: '/portfolio/bleach-map.webp',
    specs: '60 FPS · ABILITY CARDS',
  },
  {
    id: 'vid-guns',
    number: '07',
    category: 'GAMEPLAY SYSTEM',
    title: 'Authoritative Gun & Ballistics System',
    description:
      'Data-oriented raycast projectiles, client tracers, server hit admission, recoil, and reload state machines.',
    src: '/videos/gun-ballistics-demo.mp4',
    poster: '/portfolio/ic-black-market-real.webp',
    specs: 'ROBLOX STUDIO · COMBAT',
  },
  {
    id: 'vid-grenades',
    number: '08',
    category: 'GAMEPLAY SYSTEM',
    title: 'Grenade Physics & Throwables',
    description:
      'Simulated arc trajectories, fuse timers, bounce physics, blast radius falloff, and synced visual FX.',
    src: '/videos/grenade-physics-demo.mp4',
    poster: '/portfolio/bleach-hud-combat.webp',
    specs: 'ROBLOX STUDIO · PHYSICS',
  },
  {
    id: 'vid-stealth',
    number: '09',
    category: 'GAMEPLAY SYSTEM',
    title: 'Stealth Detection & AI Awareness System',
    description:
      'Line-of-sight vision cones, noise/visibility meters, alert escalation, and NPC patrol state machines.',
    src: '/videos/stealth-demo.mp4',
    poster: '/portfolio/studio-mdt-finder.webp',
    specs: 'ROBLOX STUDIO · STEALTH AI',
  },
  {
    id: 'vid-infiltration',
    number: '10',
    category: 'GAMEPLAY SYSTEM',
    title: 'Infiltration & Heist Gameplay Loop',
    description:
      'End-to-end infiltration mechanics combining stealth, world interaction, security bypasses, and server authority.',
    src: '/videos/infiltration-demo.mp4',
    poster: '/portfolio/ic-marketplace-desktop.webp',
    specs: 'ROBLOX STUDIO · FULL LOOP',
  },
  {
    id: 'vid-taser',
    number: '11',
    category: 'GAMEPLAY SYSTEM',
    title: 'Law Enforcement Taser Probe & Stun',
    description:
      'Dual-prong tether physics, server-authoritative stun tags, cooldowns, and clean state recovery.',
    src: '/videos/taser-probe-demo.mp4',
    poster: '/portfolio/studio-booking-mdt.webp',
    specs: 'ROBLOX STUDIO · RP TOOLS',
  },
  {
    id: 'vid-dry-stun',
    number: '12',
    category: 'GAMEPLAY SYSTEM',
    title: 'Close-Range Dry Stun Taser System',
    description:
      'Server-validated proximity stun discharge, animation sync, and per-player keyed debounces.',
    src: '/videos/dry-stun-taser-demo.mp4',
    poster: '/portfolio/studio-vehicle-hud.webp',
    specs: 'ROBLOX STUDIO · COMBAT TOOLS',
  },
  {
    id: 'vid-clip-1',
    number: '13',
    category: 'GAMEPLAY SYSTEM',
    title: 'Live Studio Gameplay Test — Build 01',
    description:
      'Direct Roblox Studio gameplay recording demonstrating live client/server responsiveness and world interactions.',
    src: '/videos/studio-clip-074147.mp4',
    poster: '/portfolio/adn-dispatcher.webp',
    specs: 'ROBLOX STUDIO · LIVE TEST',
  },
  {
    id: 'vid-clip-2',
    number: '14',
    category: 'GAMEPLAY SYSTEM',
    title: 'Live Studio Gameplay Test — Build 02',
    description:
      'Direct Roblox Studio gameplay recording capturing polished runtime systems in action.',
    src: '/videos/studio-clip-083909.mp4',
    poster: '/portfolio/sas-hud-native.webp',
    specs: 'ROBLOX STUDIO · LIVE TEST',
  },
];

export const proprietaryTools: ProprietaryTool[] = [
  {
    id: 'roui',
    badge: 'PERSONAL UI ENGINE',
    name: 'RoUI Studio',
    tagline: 'Local Roblox UI engine, compiler & runtime.',
    description:
      'Built to eliminate messy PNG dumps and broken mobile scaling. Compiles measured UI directly into clean Roblox ScreenGui hierarchies, slices whole-state spritesheets, audits PC vs. Mobile TouchGui safe zones, and ships with a modular ClientAnimations.luau + UIConfig.luau runtime.',
    highlights: [
      'Dual-viewport PC 1080p vs Mobile TouchGui safe-zone audits',
      '9-state button contact sheets with stationary hitboxes',
      'Zero-drift .rbxmx export & centralized Luau UI runtime',
    ],
    image: '/portfolio/tool-dual-viewport.webp',
    imageAlt: 'RoUI Studio dual-viewport responsive audit comparing Desktop 1080p and Mobile Landscape TouchGui safe zones',
  },
  {
    id: 'sngine',
    badge: 'PRIVATE LUAU ENGINE · 218+ MODULES',
    name: 'S_ngine',
    tagline: 'Policy-first Roblox/Luau systems engine for ECS, netcode, ballistics & persistence.',
    description:
      'My private modular Roblox engine split cleanly into ServerStorage (Persistence, PlayerData, Ballistics.Authority, Transactions, Testing) and ReplicatedStorage (ECS, Netcode, Caching, Diagnostics, FeatureFlags, Scheduling, ValidationSchema) so projects ship fast with AAA-grade architecture.',
    highlights: [
      'ECS/DoD world state, fixed-tick Ballistics & combat anti-cheat',
      'Native binary buffer Netcode + adaptive Zstandard compression',
      'ProfileStore persistence, atomic transaction ledgers & replay fuzzing',
      'Strict contracts, FloatCurveDamper motion & deterministic RNG harnesses',
    ],
    image: '/portfolio/tool-9state-sheet.webp',
    imageAlt: 'RoUI 9-state button verification sheet driven by centralized Luau state runtime',
  },
  {
    id: 'cortex',
    badge: 'STATIC GUARD & CI',
    name: 'Roblox Cortex',
    tagline: 'AST-based Luau linter & zero-bloat architecture verifier.',
    description:
      'Runs real syntax-tree verification via luau-ast to catch unbounded WaitForChild hangs, leaked event connections, swallowed pcalls, flat button tweens, and overengineered boilerplate before code ever ships.',
    highlights: [
      'Real luau-ast rule enforcement & headless unit test runner',
      'Blocks memory leaks, cyclic requires & flat UI tweens',
      'Strict typed Luau with 2-phase Init -> Start lifecycles',
    ],
  },
  {
    id: 'tracksnap',
    badge: 'NATIVE STUDIO PLUGINS',
    name: 'Studio Tooling & DockWidgets',
    tagline: 'Commercial-grade DockWidgetPluginGui tools built natively for Studio.',
    description:
      'Custom Roblox Studio plugins with ChangeHistoryService undo/redo transactions, archivable-safe preview ghosts, non-interfering shortcut bindings, and root plugin.Unloading Trove cleanup.',
    highlights: [
      'Crash-proof ChangeHistoryService TryBeginRecording / Commit',
      'Clean native DockWidget UI matching Studio workflows',
      'Zero zombie listeners on plugin reload',
    ],
  },
];

export const sngineSharedSubsystems: SngineSubsystem[] = [
  {
    name: 'Native',
    modules: 72,
    summary: 'Runtime kernels, UI helpers, FloatCurveDamper motion, camera views, bounds & world utilities.',
    keyFiles: ['CameraView.luau', 'AssetPreview.luau', 'CapabilityStore.luau'],
  },
  {
    name: 'Netcode',
    modules: 23,
    summary: 'Bit & binary buffer serialization, typed schemas, adaptive native Zstandard batch compression.',
    keyFiles: ['BitReader.luau', 'BufferWriter.luau', 'Codecs.luau'],
  },
  {
    name: 'Ballistics',
    modules: 12,
    summary: 'ECS fixed-tick projectile kinematics, surface materials, prediction adapters & projectile store.',
    keyFiles: ['Kinematics.luau', 'ProjectileStore.luau', 'PredictionAdapter.luau'],
  },
  {
    name: 'RobloxAdapters',
    modules: 9,
    summary: 'Injected boundaries for Instances, Remotes, Attributes, Tags, Prompts & physics ownership.',
    keyFiles: ['RemoteAdapter.luau', 'PhysicsOwnershipAdapter.luau', 'TagAdapter.luau'],
  },
  {
    name: 'Scheduling & Time',
    modules: 14,
    summary: 'Bounded queues, cooldown/throttle/debounce policies, FixedTickLoop & injectable clocks.',
    keyFiles: ['BoundedQueue.luau', 'FixedTickLoop.luau', 'RobloxScheduler.luau'],
  },
  {
    name: 'ECS, Core & Diagnostics',
    modules: 19,
    summary: 'World/Entity/Component registries, Result & Readonly views, TTL/SWR caching, Trace & StateMachine.',
    keyFiles: ['World.luau', 'Result.luau', 'CacheStore.luau', 'HealthReport.luau'],
  },
];

export const sngineServerSubsystems: SngineSubsystem[] = [
  {
    name: 'Persistence',
    modules: 10,
    summary: 'ProfileStore adapter, versioned envelopes, durable sessions, schema migration & offline fakes.',
    keyFiles: ['ProfileRepository.luau', 'ProfileSession.luau', 'Envelope.luau'],
  },
  {
    name: 'Testing & Verification',
    modules: 8,
    summary: 'Deterministic RNG, rejection fuzzing, rollback replay capture, FakeClock & PlayerData harnesses.',
    keyFiles: ['Fuzz.luau', 'ReplayCapture.luau', 'PlayerDataHarness.luau'],
  },
  {
    name: 'Transactions & World',
    modules: 5,
    summary: 'Atomic transaction coordinator with audit history, server interaction & projection services.',
    keyFiles: ['TransactionCoordinator.luau', 'InteractionService.luau', 'ProjectionService.luau'],
  },
  {
    name: 'PlayerData & Ballistics Authority',
    modules: 4,
    summary: 'Server-authoritative player account lifecycle hooks and anti-cheat combat hit admission.',
    keyFiles: ['Ballistics/Authority.luau', 'PlayerData/Service.luau', 'Hook.luau'],
  },
];

export const shippedCodebases: ShippedCodebase[] = [
  {
    project: 'Idle Cartel / Syndicate',
    genre: 'Empire Tycoon & Economy',
    scale: '199K+ lines Luau',
    systemsCovered: ['Black Market P2P Economy', 'District Progression', 'Business Plots & Income', 'Boss Encounters', 'ProfileStore Persistence'],
  },
  {
    project: 'Roblox 8 Ball Pool',
    genre: 'Competitive Sports Sim',
    scale: '170K+ lines Luau',
    systemsCovered: ['Cue & Spin Physics Kernel', 'Singles/Doubles Matchmaking', 'Tournament Brackets', 'Spectator Cameras', 'Console Gamepad Focus'],
  },
  {
    project: 'AD&N Train System & TrackSnap',
    genre: 'Railway Simulation & Plugin',
    scale: '111K+ lines Luau',
    systemsCovered: ['Centralized Train Physics', 'Waybills & Dispatch Contracts', 'Freight Commodity Market', 'HSV Locomotive Paint', 'TrackSnap Studio Plugin'],
  },
  {
    project: 'Project Infamy & v2 Revamp Guns',
    genre: 'Urban Crime RPG & Combat',
    scale: '150K+ lines Luau',
    systemsCovered: ['ECS Raycast Ballistics', 'Weight & Attachment Inventory', 'Crew Contracts & Safehouses', 'Grenades & Drive-By Combat', 'Turf Capture Zones'],
  },
  {
    project: 'Project Raq & SCV2 ReWrite',
    genre: 'Open-World RP & Vehicles',
    scale: '95K+ lines Luau',
    systemsCovered: ['Custom Vehicle Chassis', 'Dealership & Mod Shop', 'Safehouse Floorplanner', 'Law Enforcement MDT & Taser', 'ATMs & Modular Doors'],
  },
  {
    project: 'ODMSystem & Steal A Squishie',
    genre: 'Action Movement & Simulator',
    scale: '83K+ lines Luau',
    systemsCovered: ['Dual-Hook ODM Grapple Physics', '93 Synced Animations', 'Collectible Shelves & Gacha', 'Tap-to-Catch Minigame', 'Daily Retention Loops'],
  },
];

export const scriptingSystems: ScriptingSystem[] = [
  {
    number: '01',
    title: 'ECS Combat, Ballistics & Gunkits',
    category: 'AUTHORITATIVE COMBAT',
    scale: 'S_ngine · v2 Revamp Guns',
    description:
      'Contiguous flat-array ballistics (zero physical bullet Parts), filtered raycasts, bounded lag compensation, throwable grenades, vehicle drive-by combat, and viewmodel lifetimes.',
    snippetFile: 'BatchBallistics.luau',
    snippet: [
      'function BatchBallistics.Step(dt: number)',
      '  for i = activeCount, 1, -1 do',
      '    local hit = workspace:Raycast(pos[i], vel[i] * dt, params)',
      '    if hit then resolveHit(i, hit) end',
      '  end',
      'end',
    ],
    stack: ['SoA Ballistics', 'Lag Comp', 'Grenades', 'Drive-By'],
  },
  {
    number: '02',
    title: 'RoScale Train Physics & Dispatch',
    category: 'SIMULATION ARCHITECTURE',
    scale: '6,100+ Luau Modules · AD&N',
    description:
      'Centralized railway simulation covering spline/track following, locomotive power/braking curves, freight waybills, switch lists, commodity markets, and the TrackSnap Studio plugin.',
    snippetFile: 'DispatchService.luau',
    snippet: [
      'function DispatchService.AssignContract(player: Player, id: string)',
      '  local contract = WaybillSchema.Validate(id)',
      '  if not contract.success then return contract end',
      '  return RouteRegistry.BindSiding(player, contract.data)',
      'end',
    ],
    stack: ['Train Physics', 'Waybills', 'TrackSnap Plugin', 'Strict Luau'],
  },
  {
    number: '03',
    title: 'Custom Vehicle Chassis & Telemetry',
    category: 'VEHICLES & NETWORKING',
    scale: 'SCV2 ReWrite · Project Infamy',
    description:
      'Responsive constraint-based vehicle chassis with networked gear/RPM telemetry, headlights, blinkers, fuel/engine health, lock permissions, and mobile touch driving dashboards.',
    snippetFile: 'VehicleRuntime.luau',
    snippet: [
      'function VehicleRuntime.AdmitDriver(player: Player, chassis: Model)',
      '  if not AccessPolicy.CanDrive(player, chassis) then',
      '    return { success = false, reason = "Unauthorized" }',
      '  end',
      '  return Possession.Mount(player, chassis)',
      'end',
    ],
    stack: ['Chassis Physics', 'Live Telemetry', 'Mobile Controls', 'Replication'],
  },
  {
    number: '04',
    title: '8-Ball Pool Physics & Matchmaking',
    category: 'COMPETITIVE ARCADE',
    scale: '5,500+ Luau Files · Corner Pocket',
    description:
      'Deterministic cue-ball impulse, English spin and rail-rebound physics, singles/doubles table matchmaking, spectator cameras, trick-shot labs, and full gamepad focus navigation.',
    snippetFile: 'TableSession.luau',
    snippet: [
      'function TableSession.SubmitShot(player: Player, shot: ShotIntent)',
      '  if not ShotValidator.IsFinite(shot) then return fail("Invalid") end',
      '  return PhysicsKernel.SimulateTurn(self.TableId, shot)',
      'end',
    ],
    stack: ['Billiards Physics', 'Matchmaking', 'Spectate', 'Console Focus'],
  },
  {
    number: '05',
    title: 'ODM Grapple Movement & Animation',
    category: 'CHARACTER MOVEMENT',
    scale: '63 Modules · 93 Animations',
    description:
      'High-speed dual-hook grapple physics with tension constraints, aerial boost bursts, gas/blade resource loops, and synchronized client/server animation state blending.',
    snippetFile: 'ODMController.luau',
    snippet: [
      'function ODMController.FireHook(side: "Left" | "Right", aimRay: Ray)',
      '  local anchor = HookQuery.FindSurface(aimRay, MAX_RANGE)',
      '  if not anchor then return { success = false, reason = "NoAnchor" } end',
      '  return TetherSolver.Attach(side, anchor)',
      'end',
    ],
    stack: ['Dual Grapple', 'Air Physics', '93 Animations', 'Client Prediction'],
  },
  {
    number: '06',
    title: 'Spatial-Hash Turf & Crew Contracts',
    category: 'MULTIPLAYER WORLD STATE',
    scale: 'Zero .Touched PhysX Stalls',
    description:
      'Pure mathematical SpatialHashGrid territory capture zones, 4-player crew contract lobbies, server-authoritative objective tracking, and exploit-resistant payout settlements.',
    snippetFile: 'TurfZoneService.luau',
    snippet: [
      'function TurfZoneService.QueryOccupants(zoneId: string)',
      '  local zone = Zones[zoneId]',
      '  return SpatialHashGrid.QueryRadius(zone.Center, zone.Radius)',
      'end',
    ],
    stack: ['SpatialHashGrid', 'Turf Capture', 'Crew Lobbies', 'Zero PhysX Stall'],
  },
  {
    number: '07',
    title: 'Economy, Commerce & Persistence',
    category: 'DATA & TRANSACTIONS',
    scale: 'S_ngine · ProfileStore Ledgers',
    description:
      'Atomic currency ledgers, ProfileStore durable saves, binary-buffer Zstandard netcode, player marketplaces, interactive ATMs, gacha odds, and restocking shop inventories.',
    snippetFile: 'LedgerService.luau',
    snippet: [
      'function LedgerService.Transfer(from: Player, to: Player, amount: number)',
      '  if amount <= 0 or amount ~= amount then return fail("BadAmount") end',
      '  return TransactionKernel.CommitAtomic(from, to, amount)',
      'end',
    ],
    stack: ['ProfileStore', 'Binary Buffers', 'Zstd Netcode', 'Atomic Ledgers'],
  },
  {
    number: '08',
    title: 'Stealth AI, MDT & Modular World Tools',
    category: 'AI & RP INFRASTRUCTURE',
    scale: 'NPCs · Law Enforcement · Doors',
    description:
      'NPC vision-cone stealth infiltration loops, law enforcement MDT warrant/booking databases, taser probe tools, and CollectionService-driven modular doors and world prompts.',
    snippetFile: 'StealthDetector.luau',
    snippet: [
      'function StealthDetector.EvaluateSight(npc: Model, target: Model)',
      '  local dot = npcForward:Dot(toTarget.Unit)',
      '  return dot >= FOV_COS and hasLineOfSight(npc, target)',
      'end',
    ],
    stack: ['Stealth AI', 'MDT Database', 'Taser Probes', 'CollectionService'],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'single',
    name: 'Single Screen / HUD',
    badge: 'DESIGN + STUDIO IMPORT',
    usd: '$55 – $160',
    robux: '15,000 – 42,000 R$',
    turnaround: '2 – 4 Days',
    revisions: '2 Revisions',
    theme: 'light',
    tagline:
      'One major screen (Shop, Inventory, Stats, HUD, Booking, or Customizer) delivered Studio-ready — no extra import fee.',
    features: [
      'Custom design in your chosen style (illustrated or 100% native vector)',
      'Clean native Roblox ScreenGui hierarchy included (no raw PNG dumps)',
      'PC, Mobile & Console responsive scaling verified in RoUI',
      'Simple utility popups or mini-HUDs start at $35 – $70',
    ],
  },
  {
    id: 'turnkey-screen',
    name: 'Turnkey Interactive Screen',
    badge: 'UI + SPRITESHEETS + LUAU',
    usd: '$100 – $250+',
    robux: '26,000 – 66,000+ R$',
    turnaround: '3 – 6 Days',
    revisions: '3 Revisions',
    theme: 'slate',
    tagline:
      'Everything in Single Screen plus whole-state button spritesheets and wired client-side Luau ready to hook to your remotes.',
    features: [
      'Whole-state button spritesheets (Idle, Hover, Pressed, Disabled — zero flat tweens)',
      'Centralized ClientAnimations.luau & UIConfig.luau runtime wired',
      'Mobile TouchGui safe-zone audit + gamepad focus trapping',
      'Cortex AST-verified strict Luau with Trove cleanup',
    ],
  },
  {
    id: 'full-suite',
    name: 'Full Game UI Suite',
    badge: 'MOST POPULAR',
    usd: '$650 – $1,800',
    robux: '170,000 – 475,000 R$',
    turnaround: '1 – 3 Weeks',
    revisions: '3 Milestone Reviews',
    theme: 'dark',
    tagline:
      'Complete, cohesive multi-screen UI system (8–15 screens + HUD + icons) compiled natively into Roblox Studio.',
    features: [
      '8 to 15 cohesive screens + full gameplay HUD + icon set',
      'Studio-ready .rbxl / .rbxm delivery included (no Figma-only surcharges)',
      'Dual-viewport Desktop vs. Mobile safe-zone verification across every screen',
      'Style guide & reusable component templates for future updates',
    ],
  },
  {
    id: 'full-turnkey',
    name: 'Full Turnkey UI + Systems',
    badge: 'DELUXE · STUDIO GRADE',
    usd: '$1,200 – $3,200+',
    robux: '315,000 – 840,000+ R$',
    turnaround: '2 – 6 Weeks',
    revisions: '5 Milestone Reviews',
    theme: 'deluxe',
    tagline:
      'End-to-end UI suite + full interactive client runtime + server-authoritative Luau gameplay systems. Also available as a $45 – $75/hr retainer.',
    features: [
      'Complete Full Game UI Suite + whole-state spritesheets & 60fps motion',
      'Wired client UI controllers, template population & gamepad support',
      'Server-authoritative Luau systems (shops, inventory, vehicles, combat, data)',
      'Full Cortex CI verification + clean team-ready handoff documentation',
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    q: 'Do you charge extra to import UI into Roblox Studio?',
    a: 'No. Unlike Figma-only designers who charge extra for Studio import, every UI tier includes native Roblox Studio ScreenGui delivery compiled through RoUI — properly scaled for PC, Mobile, and Console.',
  },
  {
    q: 'Do you deliver illustrated UI, vector UI, or both?',
    a: 'Both. With 10+ years of Roblox UI design and development experience, I deliver everything from clean minimalist vector HUDs and CAD/RP interfaces to rich illustrated storefronts, custom icons, and whole-state metallic button spritesheets—always compiled cleanly into native Roblox Studio ScreenGuis.',
  },
  {
    q: 'What are your payment terms and Robux conversion rates?',
    a: 'USD (PayPal, Stripe, Wise) is preferred. Robux is accepted at the standard DevEx rate ($0.0038/R$, roughly 263 R$ per $1 USD); clients cover Roblox\'s 30% marketplace tax if not paying via Group Funds. Projects under $300 are 100% upfront; larger suites are 50% upfront / 50% on delivery or milestone-based.',
  },
  {
    q: 'Why are the showcase images on this site watermarked?',
    a: 'To prevent unauthorized AI reference cloning and asset scraping. Serious studios and clients receive clean, unwatermarked 1:1 previews and live Roblox Studio place tests upon inquiry.',
  },
  {
    q: 'Can I hire you strictly for Luau scripting or systems rewrites?',
    a: 'Yes. I take standalone gameplay scripting, vehicle/train simulation, combat/ballistics, anti-cheat, persistence, and legacy codebase rewrite commissions on a fixed-scope or $45–$75/hr studio retainer basis.',
  },
  {
    q: 'What do you need from me to get an accurate quote?',
    a: 'Send your game genre, a list of screens or systems you need, your target visual style (or pick one of the styles showcased above), whether you want Studio-ready UI only or wired Luau, and your target timeline.',
  },
];
