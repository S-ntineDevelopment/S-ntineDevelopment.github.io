export type UIStyleId =
  | 'all'
  | 'idle'
  | 'squishie'
  | 'bleach'
  | 'raq'
  | 'adn';

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
  mechanism: string;
  summary: string;
  keyFiles: string[];
};

export type ShippedCodebase = {
  project: string;
  genre: string;
  architecture: string;
  systemsCovered: string[];
};

export type ScriptingSystem = {
  number: string;
  title: string;
  category: string;
  techFocus: string;
  description: string;
  whyAdvanced: string;
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
    id: 'raq',
    label: 'Project Raq / Infamy',
    shortLabel: 'PROJECT RAQ',
    tagline:
      'Complete open-world urban RP suite: Dealership, Garage, Mod Shop, Safehouse Floorplanner, Stores, Wardrobe, Barber, Bank, Smartphone, Crews, Perks & Mobile Touch HUDs.',
    bestFor: 'Open-world RP, urban crime games, vehicle sims & social progression',
  },
  {
    id: 'adn',
    label: 'AD&N Train System',
    shortLabel: 'AD&N TRAINS',
    tagline:
      'Finished industrial railway UIs & live animated mechanical press/entry motion: CTC Dispatcher, Operations, Industry, Consist, Locomotive Store & Loading.',
    bestFor: 'Train sims, logistics, industrial CAD interfaces & mechanical simulation',
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
  {
    id: 'ic-collect-motion',
    title: 'Cash Collection — Animated Flipbook FX (GIF)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Live Animated GIF',
    summary:
      '24-frame packed sprite cadence powering tactile cash collection feedback without procedural tween blur.',
    deliverables: ['Live Motion GIF', '24-Frame Atlas', 'Zero Tween Blur'],
    image: '/portfolio/ic-collect-motion.gif',
    featured: true,
  },
  {
    id: 'ic-fight-strike',
    title: 'Combat Crossed Strike — Animated FX (GIF)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Live Animated GIF',
    summary:
      'Fixed-pivot 2D combat strike impact sequence authored for responsive fight resolution.',
    deliverables: ['Live Motion GIF', 'Fixed-Pivot FX', 'Combat UI'],
    image: '/portfolio/ic-fight-strike.gif',
  },
  {
    id: 'ic-fight-weapon',
    title: 'Weapon Combat Motion — Animated Sequence (GIF)',
    styleId: 'idle',
    styleLabel: 'Idle Cartel',
    project: 'Idle Cartel',
    screenType: 'Live Animated GIF',
    summary:
      'Animated weapon motion playback used inside Idle Cartel encounter modals.',
    deliverables: ['Live Motion GIF', 'Encounter UI', 'Lossless Atlas'],
    image: '/portfolio/ic-fight-weapon.gif',
  },

  // --- STEAL A SQUISHIE (12 Finished Screens) ---
  {
    id: 'sas-inventory-motion',
    title: 'Inventory — Approved Live Motion Sequence (Animated WebP)',
    styleId: 'squishie',
    styleLabel: 'Steal A Squishie',
    project: 'Steal A Squishie',
    screenType: 'Live Animated WebP',
    summary:
      'Approved interactive inventory motion sequence showing live rarity card highlights, hover depth, and tactile button state transitions.',
    deliverables: ['Live Animated WebP', 'Approved Motion', 'RoUI Compiled'],
    image: '/portfolio/sas-inventory-motion.webp',
    featured: true,
  },
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

  // --- PROJECT RAQ / INFAMY (6 Complete 6-Up Suite Boards = 36 Screens) ---
  {
    id: 'raq-vehicles-property',
    title: 'Project Raq — Dealership, Garage, Mod Shop, Safehouse & Map (6 Screens)',
    styleId: 'raq',
    styleLabel: 'Project Raq / Infamy',
    project: 'Project Raq / Infamy',
    screenType: '6-Screen Suite Board',
    summary:
      'Open-world vehicle & property loop: Mirror Motors dealership, garage condition/fuel roster, LS Customs mod shop with HSV paint wheel, top-down safehouse floorplanner, city map, and universal NPC dialogue.',
    deliverables: ['6 Cohesive Screens', 'HSV Mod Shop', 'Safehouse Floorplanner'],
    image: '/portfolio/raq-vehicles-property.webp',
    featured: true,
  },
  {
    id: 'raq-stores-services',
    title: 'Project Raq — General Store, Streetwear, Wardrobe, Barber & Bank (6 Screens)',
    styleId: 'raq',
    styleLabel: 'Project Raq / Infamy',
    project: 'Project Raq / Infamy',
    screenType: '6-Screen Commerce Board',
    summary:
      'Complete urban commerce loop: basket-enabled general store, live-3D streetwear & jewellery shop, outfit wardrobe, barber customizer, checkout/bank terminal, and Robux cash store.',
    deliverables: ['6 Commerce Screens', 'Checkout Baskets', 'Banking & Barber UI'],
    image: '/portfolio/raq-stores-services.webp',
    featured: true,
  },
  {
    id: 'raq-phone-crews',
    title: 'Project Raq — Smartphone, Crews, Emblem Builder, Perks & Profile (6 Screens)',
    styleId: 'raq',
    styleLabel: 'Project Raq / Infamy',
    project: 'Project Raq / Infamy',
    screenType: '6-Screen Social Board',
    summary:
      'Social and progression suite featuring an iOS-style smartphone with live calls, crew roster, custom crew emblem/color builder, physical/combat/survival perks, leaderboards, and character profile.',
    deliverables: ['6 Social Screens', 'Crew Emblem Builder', 'Smartphone & Perks'],
    image: '/portfolio/raq-phone-crews.webp',
    featured: true,
  },
  {
    id: 'raq-gameplay-hud',
    title: 'Project Raq — On-Foot, Vehicle, Combat, Prompts & Mobile Touch HUD (6 Screens)',
    styleId: 'raq',
    styleLabel: 'Project Raq / Infamy',
    project: 'Project Raq / Infamy',
    screenType: '6-Screen Gameplay HUD',
    summary:
      'Complete gameplay HUD system covering on-foot minimap & hotbar, vehicle speedometer + radio, fire-mode ammo counter, contextual warnings/prompts, world nametags, and mobile touch controls.',
    deliverables: ['6 Gameplay HUDs', 'Mobile Touch Controls', 'Combat Fire Modes'],
    image: '/portfolio/raq-gameplay-hud.webp',
    featured: true,
  },
  {
    id: 'raq-inventory-production',
    title: 'Project Raq — Inventory, Stashes & Production Systems (6 Screens)',
    styleId: 'raq',
    styleLabel: 'Project Raq / Infamy',
    project: 'Project Raq / Infamy',
    screenType: '6-Screen Systems Board',
    summary:
      'Deep inventory, weight management, storage stashes, and production loop interfaces built for high-retention open-world RP.',
    deliverables: ['6 Inventory Screens', 'Storage & Crafting', 'Dark-Gold Theme'],
    image: '/portfolio/raq-inventory-production.webp',
  },
  {
    id: 'raq-entry-settings',
    title: 'Project Raq — Entry, Spawn Selection & Settings Suite (6 Screens)',
    styleId: 'raq',
    styleLabel: 'Project Raq / Infamy',
    project: 'Project Raq / Infamy',
    screenType: '6-Screen Onboarding Board',
    summary:
      'Polished game entry flow covering main menu, spawn district picker, character slots, keybinds, audio/graphics settings, and patch notes.',
    deliverables: ['6 Onboarding Screens', 'Spawn Picker', 'Settings & Keybinds'],
    image: '/portfolio/raq-entry-settings.webp',
  },

  // --- AD&N TRAIN SYSTEM (Newest Crisp Screens + 5 Live Animated Motion Clips) ---
  {
    id: 'adn-train-workshop',
    title: 'Locomotive Paint & Haul Workshop (Live HSV Customizer)',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished Industrial UI',
    summary:
      'Precision rolling-stock workshop with 3D viewport camera controls, interactive HSV color wheel, live RGB/HEX inputs, current vs. draft swatches, and physical haul selection.',
    deliverables: ['HSV Color Wheel', '3D Viewport Controls', 'Studio Ready'],
    image: '/portfolio/adn-train-workshop.webp',
    featured: true,
  },
  {
    id: 'adn-operations-new',
    title: 'Railway Operations — Switch List, Waybills & Contracts',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished Industrial UI',
    summary:
      'Tabbed dispatch terminal tracking switch lists, waybills, numbered delivery steps, crew role eligibility, and credit/XP rewards.',
    deliverables: ['Tabbed Dispatch UI', 'Step Tracker', 'Requirement Badges'],
    image: '/portfolio/adn-operations-new.webp',
    featured: true,
  },
  {
    id: 'adn-exchange-new',
    title: 'Railway Freight Exchange — Commodity Market',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished Industrial UI',
    summary:
      'Emerald-on-carbon logistics terminal for buying and selling freight lots with supplier stock tables, quantity steppers, and live balance preview.',
    deliverables: ['Commodity Market', 'Order Calculator', 'Clean CAD UI'],
    image: '/portfolio/adn-exchange-new.webp',
    featured: true,
  },
  {
    id: 'adn-hud-new',
    title: 'Operations HUD — Toasts, Quick Dock & Rerailing Guide',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Finished Industrial HUD',
    summary:
      'Unobtrusive corner HUD combining active waybill counts, toast notifications, quick-action dock, and a 4-step interactive rerailing guide.',
    deliverables: ['Notification Stack', 'Quick Dock', 'Contextual Guide'],
    image: '/portfolio/adn-hud-new.webp',
  },
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
  },
  {
    id: 'adn-entry-sequence',
    title: 'Entry & Loading Sequence — Live Motion (Animated WebP)',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Live Animated WebP',
    summary:
      'Smooth animated railway entry and loading transition authored for seamless game startup.',
    deliverables: ['Live Motion WebP', 'Entry Sequence', 'Brand Motion'],
    image: '/portfolio/adn-entry-sequence.webp',
    featured: true,
  },
  {
    id: 'adn-controller-motion',
    title: 'Locomotive Controller — Physical Button Motion (Animated WebP)',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Live Animated WebP',
    summary:
      'Mechanical industrial pushbutton travel baked directly into whole-state spritesheets with stationary hitboxes.',
    deliverables: ['Live Motion WebP', 'Mechanical Travel', 'Stationary Hitbox'],
    image: '/portfolio/adn-controller-motion.webp',
  },
  {
    id: 'adn-programmer-upgrades',
    title: 'Programmer Upgrades — Physical Press States (Animated WebP)',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Live Animated WebP',
    summary:
      'Tactile hardware-panel button press states for the locomotive decoder & upgrade programmer.',
    deliverables: ['Live Motion WebP', 'Hardware UI', 'Whole-State Atlas'],
    image: '/portfolio/adn-programmer-upgrades.webp',
  },
  {
    id: 'adn-programmer-decoder',
    title: 'DCC Decoder — Physical Press Interaction (Animated WebP)',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Live Animated WebP',
    summary:
      'Interactive DCC decoder panel demonstrating crisp mechanical button feedback.',
    deliverables: ['Live Motion WebP', 'DCC Controls', 'Zero Flat Tweens'],
    image: '/portfolio/adn-programmer-decoder.webp',
  },
  {
    id: 'adn-loading-logo',
    title: 'AD&N Brand Loading Emblem — Animated Loop (GIF)',
    styleId: 'adn',
    styleLabel: 'AD&N Train System',
    project: 'AD&N Train System',
    screenType: 'Live Animated GIF',
    summary:
      'Custom animated loading emblem engineered as a looping sprite atlas for Roblox.',
    deliverables: ['Live Motion GIF', 'Looping Atlas', 'Brand Motion'],
    image: '/portfolio/adn-loading-logo.gif',
  },
];

export const marqueeHighlights = uiShowcaseItems.filter((item) =>
  [
    'raq-vehicles-property',
    'ic-black-market-real',
    'sas-inventory-motion',
    'bleach-shop',
    'adn-train-workshop',
    'raq-stores-services',
    'sas-hud-native',
    'bleach-skills',
    'adn-operations-new',
    'raq-phone-crews',
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
    poster: '/portfolio/bleach-shop.webp',
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
    id: 'vid-squishie-nine',
    number: '07',
    category: 'ANIMATED UI',
    title: 'Steal A Squishie — All 9 Tiered Character Animations',
    description:
      'Complete 9-character animated collectible showcase spanning Common, Rare, Epic, Legendary, Galactic, and Void tiers.',
    src: '/videos/squishie-all-nine-motion.mp4',
    poster: '/portfolio/sas-inventory.webp',
    specs: 'ANIMATED COLLECTIBLES · 9 TIERS',
  },
  {
    id: 'vid-bleach-bg',
    number: '08',
    category: 'ANIMATED UI',
    title: 'Requiem — Painted Flame & Border Motion (60fps)',
    description:
      'Seamless looping painted energy backdrop driving the Requiem skill and stat screens at 60fps.',
    src: '/videos/bleach-painted-bg-60fps.mp4',
    poster: '/portfolio/bleach-skills.webp',
    specs: '60 FPS · LOOPING BACKDROP',
  },
  {
    id: 'vid-guns',
    number: '09',
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
    number: '10',
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
    number: '11',
    category: 'GAMEPLAY SYSTEM',
    title: 'Stealth Detection & AI Awareness System',
    description:
      'Line-of-sight vision cones, noise/visibility meters, alert escalation, and NPC patrol state machines.',
    src: '/videos/stealth-demo.mp4',
    poster: '/portfolio/ic-marketplace-desktop.webp',
    specs: 'ROBLOX STUDIO · STEALTH AI',
  },
  {
    id: 'vid-infiltration',
    number: '12',
    category: 'GAMEPLAY SYSTEM',
    title: 'Infiltration & Heist Gameplay Loop',
    description:
      'End-to-end infiltration mechanics combining stealth, world interaction, security bypasses, and server authority.',
    src: '/videos/infiltration-demo.mp4',
    poster: '/portfolio/ic-marketplace-buy-confirm.webp',
    specs: 'ROBLOX STUDIO · FULL LOOP',
  },
  {
    id: 'vid-taser',
    number: '13',
    category: 'GAMEPLAY SYSTEM',
    title: 'Law Enforcement Taser Probe & Stun',
    description:
      'Dual-prong tether physics, server-authoritative stun tags, cooldowns, and clean state recovery.',
    src: '/videos/taser-probe-demo.mp4',
    poster: '/portfolio/adn-operations-new.webp',
    specs: 'ROBLOX STUDIO · RP TOOLS',
  },
  {
    id: 'vid-dry-stun',
    number: '14',
    category: 'GAMEPLAY SYSTEM',
    title: 'Close-Range Dry Stun Taser System',
    description:
      'Server-validated proximity stun discharge, animation sync, and per-player keyed debounces.',
    src: '/videos/dry-stun-taser-demo.mp4',
    poster: '/portfolio/adn-exchange-new.webp',
    specs: 'ROBLOX STUDIO · COMBAT TOOLS',
  },
  {
    id: 'vid-clip-1',
    number: '15',
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
    number: '16',
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
    badge: 'BUILT BY S_NTINEL · PERSONAL ROBLOX UI ENGINE',
    name: 'RoUI Studio — Built Specifically for Roblox UI',
    tagline: 'Why I created my own local UI engine instead of stopping at Figma.',
    description:
      'Figma and Photoshop were never built for Roblox: they don\'t understand UDim2 Scale/Offset, AnchorPoint geometry, TouchGui thumbstick safe zones, ImageRectOffset spritesheets, or Roblox font bounds. That\'s why most UI designers hand you flat PNGs that break on mobile and cost extra to import. I built RoUI from scratch specifically to solve this—a local Figma-compatible Roblox UI engine that authors, audits, slices, and compiles directly into clean native Roblox ScreenGuis with a modular Luau runtime.',
    highlights: [
      'Direct native .rbxmx ScreenGui compilation with zero-drift Scale/AnchorPoint geometry',
      'Automated dual-viewport verification (Desktop 1080p vs Mobile TouchGui safe zones & 44px tap targets)',
      'Lossless whole-state spritesheet slicing & fixed-pivot flipbook packing (zero blurry flat tweens)',
      'Native Roblox font/TextBounds reconciliation + centralized ClientAnimations.luau & UIConfig.luau runtime',
    ],
  },
  {
    id: 'sngine',
    badge: 'PRIVATE LUAU ENGINE',
    name: 'S_ngine',
    tagline: 'Policy-first Roblox/Luau systems engine built for zero-trust authority, low-bandwidth netcode, and deterministic simulation.',
    description:
      'Split strictly between ReplicatedStorage (ECS, Binary Netcode, Ballistics Kinematics, FixedTickLoop, Caching) and ServerStorage (Persistence, Atomic Transactions, Ballistics Authority, Replay/Fuzz Testing) so sensitive server authority never replicates to clients.',
    highlights: [
      'Struct-of-Arrays Ballistics with fixed-tick simulation & server hit admission',
      'Binary buffer serialization + adaptive native Zstandard batch compression',
      'Atomic ProfileStore transaction ledgers with rollback-safe envelopes',
      'Deterministic offline Replay & Fuzzing harnesses to catch exploits before launch',
    ],
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
    name: 'Binary Netcode & Zstandard',
    mechanism: 'Zero-Table Buffer Packing',
    summary:
      'Replaces bloated string-keyed RemoteEvent tables with bit-packed Luau buffers, strict schema codecs, and adaptive Zstandard batching—slashing bandwidth and per-frame GC spikes.',
    keyFiles: ['BitReader.luau', 'BufferWriter.luau', 'Codecs.luau'],
  },
  {
    name: 'ECS & Data-Oriented Simulation',
    mechanism: 'Cache-Friendly Flat State',
    summary:
      'Decouples entity state from Roblox Instance hierarchies using stable entity IDs, typed component registries, and deterministic system ordering without metatable chasing.',
    keyFiles: ['World.luau', 'ComponentRegistry.luau', 'SystemScheduler.luau'],
  },
  {
    name: 'Ballistics Kinematics',
    mechanism: 'Fixed-Tick Raycast Stepping',
    summary:
      'Simulates projectiles in flat arrays with gravity, drag, surface material penetration, and client prediction—eliminating physical Part bullets, tunneling, and network lag.',
    keyFiles: ['Kinematics.luau', 'ProjectileStore.luau', 'PredictionAdapter.luau'],
  },
  {
    name: 'Scheduling, Time & Backpressure',
    mechanism: 'Deterministic Fixed-Step Clocks',
    summary:
      'Owns simulation ticks via FixedTickLoop with injectable clocks, bounded queues, and per-player cooldown/throttle/debounce policies that prevent thread storms under load.',
    keyFiles: ['FixedTickLoop.luau', 'BoundedQueue.luau', 'RobloxScheduler.luau'],
  },
  {
    name: 'Core Contracts & Motion Kernels',
    mechanism: 'Typed Results & Frame-Rate-Safe Damping',
    summary:
      'Enforces explicit Result unions (zero silent nil failures), recursively frozen Readonly views, TTL/SWR caching, and FloatCurveDamper presentation motion without custom easing loops.',
    keyFiles: ['Result.luau', 'Readonly.luau', 'CacheStore.luau', 'CameraView.luau'],
  },
  {
    name: 'Injected Roblox Boundaries',
    mechanism: 'Testable Engine Adapters',
    summary:
      'Isolates Instances, Remotes, Attributes, Tags, Prompts, and physics ownership behind typed adapters so gameplay logic can be unit-tested offline without booting Studio.',
    keyFiles: ['RemoteAdapter.luau', 'PhysicsOwnershipAdapter.luau', 'TagAdapter.luau'],
  },
];

export const sngineServerSubsystems: SngineSubsystem[] = [
  {
    name: 'Durable Persistence & Envelopes',
    mechanism: 'Schema-Versioned ProfileStore',
    summary:
      'Wraps ProfileStore with strict schema validation, versioned data envelopes, session locking, and safe migration paths—preventing data corruption and partial saves across server crashes.',
    keyFiles: ['ProfileRepository.luau', 'ProfileSession.luau', 'Envelope.luau'],
  },
  {
    name: 'Atomic Transaction Coordinator',
    mechanism: 'Dupe-Proof Economy Settlement',
    summary:
      'Executes multi-party trades, marketplace purchases, and currency transfers atomically with bounded audit history—eliminating race-condition item duplication and lost proceeds.',
    keyFiles: ['TransactionCoordinator.luau', 'InteractionService.luau', 'ProjectionService.luau'],
  },
  {
    name: 'Ballistics Authority & Anti-Cheat',
    mechanism: 'Zero-Trust Server Admission',
    summary:
      'Revalidates client fire intents against server state, finite-number checks, rate budgets, and line-of-sight geometry so exploiters cannot spoof hits, damage, or fire rates.',
    keyFiles: ['Ballistics/Authority.luau', 'PlayerData/Service.luau', 'Hook.luau'],
  },
  {
    name: 'Replay Capture & Rejection Fuzzing',
    mechanism: 'Deterministic Offline Verification',
    summary:
      'Records bounded rollback traces and runs deterministic RNG fuzz tests against hostile remote inputs, verifying edge cases offline before deploying to live players.',
    keyFiles: ['Fuzz.luau', 'ReplayCapture.luau', 'PlayerDataHarness.luau'],
  },
];

export const shippedCodebases: ShippedCodebase[] = [
  {
    project: 'Idle Cartel / Syndicate',
    genre: 'Empire Tycoon & Economy',
    architecture: 'Atomic P2P Marketplace',
    systemsCovered: ['Race-Safe Black Market', 'Proceeds Recovery Ledgers', 'District Story State Machine', 'Passive Income Ticks', 'ProfileStore Persistence'],
  },
  {
    project: 'Roblox 8 Ball Pool',
    genre: 'Competitive Sports Sim',
    architecture: 'Deterministic Cue Physics',
    systemsCovered: ['English Spin & Rail Rebound', 'Server-Validated Turn Sim', 'Singles/Doubles Matchmaking', 'Spectator Camera Sync', 'Gamepad Focus Routing'],
  },
  {
    project: 'AD&N Train System & TrackSnap',
    genre: 'Railway Simulation & Plugin',
    architecture: 'Centralized Track Physics',
    systemsCovered: ['Spline Following & Braking Curves', 'CTC Signal & Switch Authority', 'Waybill & Freight Dispatch', 'Live HSV Rolling-Stock Paint', 'ChangeHistory Undo Plugin'],
  },
  {
    project: 'ODMSystem (AoT Movement)',
    genre: 'High-Speed Action Combat',
    architecture: 'Dynamic Cable-Wrap Solver',
    systemsCovered: ['Dual-Hook Raycast Anchoring', 'Real-Time Geometry Cable Wrapping', 'Air / Climb / Flight Blending', 'Sword Combat & Flares', 'Supply Lines & Resupply'],
  },
  {
    project: 'Project Infamy & v2 Revamp Guns',
    genre: 'Urban Crime RPG & Combat',
    architecture: 'SoA Raycast Ballistics',
    systemsCovered: ['Zero-Part Projectile Stepping', 'Weight & Attachment Sockets', '4-Player Crew Contracts', 'Grenades & Drive-By Arcs', 'Spatial-Hash Turf Capture'],
  },
  {
    project: 'SCV2 ReWrite & Law Enforcement',
    genre: 'Open-World RP & Vehicles',
    architecture: 'Server-Authoritative RP',
    systemsCovered: ['Constraint Vehicle Chassis', 'Stealth Vision-Cone AI', 'MDT Warrant & Booking DB', 'Taser Tether & Stun Tags', 'CollectionService Doors'],
  },
];

export const scriptingSystems: ScriptingSystem[] = [
  {
    number: '01',
    title: 'ECS Combat, Ballistics & Gunkits',
    category: 'AUTHORITATIVE COMBAT',
    techFocus: 'Struct-of-Arrays · Zero Physical Bullets',
    description:
      'Steps active projectiles through contiguous parallel arrays using filtered raycasts and fixed-tick kinematics—handling bullet drop, material penetration, grenades, and vehicle drive-by arcs.',
    whyAdvanced:
      'Spawning physical bullet Parts with BodyVelocity floods C++ allocations, clogs replication, and tunnels through walls. Flat-array raycast ballistics scales to hundreds of simultaneous shots at near-zero server cost while keeping hit admission 100% server-authoritative.',
    snippetFile: 'BatchBallistics.luau',
    snippet: [
      'function BatchBallistics.Step(dt: number)',
      '  for i = activeCount, 1, -1 do',
      '    local hit = workspace:Raycast(pos[i], vel[i] * dt, params)',
      '    if hit then resolveHit(i, hit) end',
      '  end',
      'end',
    ],
    stack: ['SoA Ballistics', 'Lag Compensation', 'Grenade Physics', 'Drive-By Arcs'],
  },
  {
    number: '02',
    title: 'ODM Grapple, Cable Wrap & Aerial Combat',
    category: 'ADVANCED PHYSICS',
    techFocus: 'Dynamic Geometry Wrapping · Multi-State Motion',
    description:
      'Dual-hook ODM movement engine (`Hooks`, `Cables`, `Wrap`, `Flight`, `Climb`, `Motor`, `Sword`, `Flare`) with live cable wrapping around building corners, air-momentum conservation, and supply-line resupply.',
    whyAdvanced:
      'Standard Roblox grapple scripts just pull a player straight toward a point and clip straight through buildings. The Wrap solver detects mid-cable geometry intersections, dynamically splits cables around corners, and unwraps cleanly as the player swings past—paired with smooth camera/body tilt prediction.',
    snippetFile: 'ODMClient/Hooks.luau',
    snippet: [
      'function Hooks.Fire(side: "Left" | "Right", aimRay: Ray)',
      '  local anchor = Probe.FindAttachPoint(aimRay, MAX_RANGE)',
      '  if not anchor then return { success = false, reason = "NoAnchor" } end',
      '  return Cables.AttachWithWrap(side, anchor)',
      'end',
    ],
    stack: ['Geometric Cable Wrap', 'Dual Hooks', 'Aerial Momentum', 'Sword & Flares'],
  },
  {
    number: '03',
    title: 'RoScale Train Physics, CTC & Studio Plugins',
    category: 'SIMULATION & TOOLING',
    techFocus: 'Centralized Splines · ChangeHistory Undo',
    description:
      'Centralized railway runtime governing locomotive tractive effort, braking curves, switch alignment, CTC signal occupancy, waybill contracts, and the native TrackSnap Studio track-building plugin.',
    whyAdvanced:
      'Instead of fragile physics wheels derailing on curved Roblox parts, trains follow mathematical track graphs with deterministic coupling and server-owned switch states. Companion Studio plugins wrap every mutation in ChangeHistoryService recordings so Ctrl+Z never corrupts place files.',
    snippetFile: 'DispatchService.luau',
    snippet: [
      'function DispatchService.AssignContract(player: Player, id: string)',
      '  local contract = WaybillSchema.Validate(id)',
      '  if not contract.success then return contract end',
      '  return RouteRegistry.BindSiding(player, contract.data)',
      'end',
    ],
    stack: ['Track Graph Math', 'CTC Signals', 'Waybill Dispatch', 'Native Studio Plugin'],
  },
  {
    number: '04',
    title: '8-Ball Pool Physics & Matchmaking',
    category: 'COMPETITIVE SIMULATION',
    techFocus: 'Deterministic Impulse · Turn Authority',
    description:
      'Custom billiards physics kernel simulating cue impulse, English spin, cushion restitution, pocket capture, singles/doubles table sessions, spectator cameras, and console gamepad focus.',
    whyAdvanced:
      'Roblox\'s default PhysX solver produces inconsistent ball rolls and network jitter across clients. Running deterministic mathematical collision resolution guarantees identical shot outcomes, prevents shot-spoofing exploits, and keeps spectators perfectly synchronized.',
    snippetFile: 'TableSession.luau',
    snippet: [
      'function TableSession.SubmitShot(player: Player, shot: ShotIntent)',
      '  if not ShotValidator.IsFinite(shot) then return fail("Invalid") end',
      '  return PhysicsKernel.SimulateTurn(self.TableId, shot)',
      'end',
    ],
    stack: ['Deterministic Collisions', 'Spin & Restitution', 'Table Sessions', 'Console Focus'],
  },
  {
    number: '05',
    title: 'Custom Vehicle Chassis & Live Telemetry',
    category: 'VEHICLES & REPLICATION',
    techFocus: 'Network Ownership · Modular Telemetry',
    description:
      'Tuned constraint chassis with networked gear/RPM telemetry, ignition/lock authority, turn signals, fuel/engine health, and thumb-friendly mobile touch driving controls.',
    whyAdvanced:
      'Decouples permanent PlayerController input contexts from ephemeral vehicle seats—switching seamlessly between On-Foot, Driving, and Drive-By contexts without boolean flag soup or leaked seat connections on character respawn.',
    snippetFile: 'VehicleRuntime.luau',
    snippet: [
      'function VehicleRuntime.AdmitDriver(player: Player, chassis: Model)',
      '  if not AccessPolicy.CanDrive(player, chassis) then',
      '    return { success = false, reason = "Unauthorized" }',
      '  end',
      '  return Possession.Mount(player, chassis)',
      'end',
    ],
    stack: ['Constraint Chassis', 'Input Context Stack', 'Live Telemetry', 'Mobile Driving'],
  },
  {
    number: '06',
    title: 'Spatial-Hash Turf & Crew Contracts',
    category: 'MULTIPLAYER WORLD STATE',
    techFocus: 'O(1) Spatial Hashing · Zero .Touched Stalls',
    description:
      'Mathematical 2D/3D SpatialHashGrid powering territory capture zones, proximity triggers, 4-player crew contract dispatch, and server-authoritative objective settlements.',
    whyAdvanced:
      'Using invisible Parts with .Touched or GetPartsInPart inside Heartbeat stalls Roblox\'s PhysX broadphase and tanks server tickrate as player counts grow. Cell-based spatial hashing queries zone occupancy in O(1) pure Luau math with zero physics overhead.',
    snippetFile: 'TurfZoneService.luau',
    snippet: [
      'function TurfZoneService.QueryOccupants(zoneId: string)',
      '  local zone = Zones[zoneId]',
      '  return SpatialHashGrid.QueryRadius(zone.Center, zone.Radius)',
      'end',
    ],
    stack: ['SpatialHashGrid', 'Zero PhysX Stall', 'Crew Dispatch', 'Authoritative Zones'],
  },
  {
    number: '07',
    title: 'Dupe-Proof Economy & Binary Netcode',
    category: 'PERSISTENCE & NETCODE',
    techFocus: 'Atomic Ledgers · Buffer + Zstd',
    description:
      'Atomic currency ledgers, ProfileStore session-locked persistence, P2P black-market receipts with proceeds recovery, gacha odds engines, and binary-buffer Zstandard networking.',
    whyAdvanced:
      'Multiplayer Roblox economies get destroyed by disconnect-timing dupes and NaN/Inf payload exploits. Every transfer runs through finite-number schema validation and an atomic commit/rollback coordinator with receipt recovery if a seller disconnects mid-trade.',
    snippetFile: 'LedgerService.luau',
    snippet: [
      'function LedgerService.Transfer(from: Player, to: Player, amount: number)',
      '  if amount <= 0 or amount ~= amount then return fail("BadAmount") end',
      '  return TransactionKernel.CommitAtomic(from, to, amount)',
      'end',
    ],
    stack: ['Atomic Ledgers', 'ProfileStore Locks', 'Binary Buffers', 'Exploit Hardening'],
  },
  {
    number: '08',
    title: 'Stealth AI, Law Enforcement & World Tools',
    category: 'AI & INTERACTION',
    techFocus: 'Vision Cones · CollectionService Components',
    description:
      'NPC vision-cone stealth infiltration loops, police MDT warrant/booking databases, dual-prong taser probes with gameplay state tags, and CollectionService-driven modular doors.',
    whyAdvanced:
      'World objects (doors, prompts, stations) contain zero scattered scripts—centralized CollectionService binders own every lifecycle with LIFO Trove cleanup and per-character os.clock() debounces so one player never locks out another.',
    snippetFile: 'StealthDetector.luau',
    snippet: [
      'function StealthDetector.EvaluateSight(npc: Model, target: Model)',
      '  local dot = npcForward:Dot(toTarget.Unit)',
      '  return dot >= FOV_COS and hasLineOfSight(npc, target)',
      'end',
    ],
    stack: ['Vision-Cone AI', 'Gameplay Tags', 'CollectionService', 'Keyed Debounces'],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'single',
    name: 'Single Screen / HUD',
    badge: 'DESIGN + STUDIO IMPORT',
    usd: '$25 – $65',
    robux: '6,500 – 17,000 R$',
    turnaround: '1 – 3 Days',
    revisions: '2 Revisions',
    theme: 'light',
    tagline:
      'One major screen (Shop, Inventory, Stats, HUD, or Customizer) delivered Studio-ready — no extra import fee.',
    features: [
      'Custom design in your chosen style (illustrated or 100% native vector)',
      'Clean native Roblox ScreenGui hierarchy included (no raw PNG dumps)',
      'PC, Mobile & Console responsive scaling verified in RoUI',
      'Smaller popups, prompts, or utility HUDs start at $15 – $25',
    ],
  },
  {
    id: 'turnkey-screen',
    name: 'Turnkey Interactive Screen',
    badge: 'UI + SPRITESHEETS + LUAU',
    usd: '$45 – $110',
    robux: '12,000 – 29,000 R$',
    turnaround: '2 – 4 Days',
    revisions: '3 Revisions',
    theme: 'slate',
    tagline:
      'Everything in Single Screen plus whole-state button spritesheets and wired client-side Luau ready to hook to your remotes.',
    features: [
      'Whole-state button spritesheets (Idle, Hover, Pressed, Disabled — zero flat tweens)',
      'Centralized ClientAnimations.luau & UIConfig.luau runtime wired',
      'Mobile TouchGui safe-zone audit + gamepad focus trapping',
      'Cortex AST-verified strict Luau with clean Trove teardown',
    ],
  },
  {
    id: 'full-suite',
    name: 'Full Game UI Suite',
    badge: 'MOST POPULAR',
    usd: '$250 – $650',
    robux: '65,000 – 170,000 R$',
    turnaround: '1 – 2 Weeks',
    revisions: '3 Milestone Reviews',
    theme: 'dark',
    tagline:
      'Complete, cohesive multi-screen UI system (8–15 screens + HUD + icons) compiled natively into Roblox Studio.',
    features: [
      '8 to 15 cohesive screens + full gameplay HUD + icon set',
      'Studio-ready .rbxl / .rbxm delivery included (no Figma-only surcharges)',
      'Dual-viewport Desktop vs. Mobile safe-zone verification across every screen',
      'Reusable component templates so your team can add future screens easily',
    ],
  },
  {
    id: 'full-turnkey',
    name: 'Full Turnkey UI + Systems',
    badge: 'DELUXE · STUDIO GRADE',
    usd: '$500 – $1,400+',
    robux: '130,000 – 370,000+ R$',
    turnaround: '2 – 5 Weeks',
    revisions: '5 Milestone Reviews',
    theme: 'deluxe',
    tagline:
      'End-to-end UI suite + full interactive client runtime + server-authoritative Luau gameplay systems. Flexible milestone pricing.',
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
    a: 'Both. With 10+ years of Roblox UI design and development experience, I deliver everything from clean minimalist vector HUDs and CAD interfaces to rich illustrated storefronts, custom icons, and whole-state metallic button spritesheets—always compiled cleanly into native Roblox Studio ScreenGuis.',
  },
  {
    q: 'What are your payment terms and Robux conversion rates?',
    a: 'USD (PayPal, Stripe, Wise) is preferred. Robux is accepted at the standard DevEx rate ($0.0038/R$, roughly 263 R$ per $1 USD); clients cover Roblox\'s 30% marketplace tax if not paying via Group Funds. Projects under $150 are 100% upfront; larger suites are 50% upfront / 50% on delivery or milestone-based.',
  },
  {
    q: 'Why is only a curated selection shown here instead of your entire library?',
    a: 'Because modern AI tools can clone flat layouts and public code directly from portfolio websites, this site intentionally showcases only the most relevant finished pieces—not my full UI library or private Luau repositories. Complete private suites, unwatermarked proofs, and live Studio places are shared directly upon inquiry.',
  },
  {
    q: 'Can I hire you strictly for Luau scripting or systems rewrites?',
    a: 'Yes. I take standalone gameplay scripting, vehicle/train simulation, combat/ballistics, anti-cheat, persistence, and legacy codebase rewrite commissions on a fixed-scope or $25–$45/hr basis.',
  },
  {
    q: 'What do you need from me to get an accurate quote?',
    a: 'Send your game genre, a list of screens or systems you need, your target visual style (or pick one of the suites showcased above), whether you want Studio-ready UI only or wired Luau, and your target budget/timeline.',
  },
];
