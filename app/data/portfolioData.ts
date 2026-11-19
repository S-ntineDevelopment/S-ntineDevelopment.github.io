export type UIStyleId =
  | 'all'
  | 'empire'
  | 'cartoon'
  | 'anime'
  | 'tactical'
  | 'fantasy'
  | 'industrial';

export type UIStyleCategory = {
  id: UIStyleId;
  label: string;
  shortLabel: string;
  accent: 'green' | 'blue' | 'amber';
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

export type ProjectCaseStudy = {
  number: string;
  project: string;
  type: string;
  title: string;
  description: string;
  contribution: string;
  image: string;
  imageAlt: string;
  file: string;
  code: string[];
  tags: string[];
  status: string;
  accent: 'green' | 'blue' | 'amber';
};

export type ShowcaseVideo = {
  number: string;
  category: 'ANIMATED UI' | 'GAMEPLAY SYSTEM';
  title: string;
  description: string;
  src: string;
  poster: string;
  specs: string;
};

export const uiStyleCategories: UIStyleCategory[] = [
  {
    id: 'all',
    label: 'All Styles',
    shortLabel: 'ALL',
    accent: 'green',
    tagline: '32 production screens across 6 distinct commercial Roblox genres—from luxury empire tycoons to anime RPGs, vibrant simulators, and tactical RP.',
    bestFor: 'Full-game UI suites, commission work, and Studio-ready RoUI transfers',
  },
  {
    id: 'empire',
    label: 'Luxury Empire / Syndicate',
    shortLabel: 'EMPIRE',
    accent: 'amber',
    tagline: 'Gold-on-obsidian editorial hierarchy, illustrated scene cards, rarity tiers, and cross-device desktop/mobile/console layouts.',
    bestFor: 'Tycoons, empire builders, mafia/cartel sims, strategy games',
  },
  {
    id: 'cartoon',
    label: 'Vibrant Cartoon / Simulator',
    shortLabel: 'CARTOON',
    accent: 'green',
    tagline: 'High-conversion playful storefronts, chunky outlines, Lego-stud headers, spin wheels, crate reveals, and punchy rarity gradients.',
    bestFor: 'Pet simulators, collectibles, gacha/unboxing, casual front-page games',
  },
  {
    id: 'anime',
    label: 'Dark Anime / Gothic RPG',
    shortLabel: 'ANIME RPG',
    accent: 'blue',
    tagline: 'Brushed Japanese ink, metallic silver-and-crimson frames, radar stat charts, hex skill trees, and 60fps animated flame backdrops.',
    bestFor: 'Anime battlegrounds, Bleach/Shonen RPGs, action combat experiences',
  },
  {
    id: 'tactical',
    label: 'Tactical Urban / RP',
    shortLabel: 'TACTICAL RP',
    accent: 'blue',
    tagline: 'Crisp dark-slate interfaces with cyan accents engineered for deep inventory weight, weapon attachments, contracts, garages, and mobile driving HUDs.',
    bestFor: 'Crime RP, law enforcement/city RP, extraction shooters, vehicle sims',
  },
  {
    id: 'fantasy',
    label: 'Fantasy Survival / TD',
    shortLabel: 'FANTASY TD',
    accent: 'amber',
    tagline: 'Bevelled bronze-and-gold medieval frames, high-contrast wave HUDs, monetization gamepass grids, tower upgrade cards, and clean settings menus.',
    bestFor: 'Tower defense, wave survival, dungeon crawlers, fantasy RPGs',
  },
  {
    id: 'industrial',
    label: 'Industrial / CAD Sim',
    shortLabel: 'INDUSTRIAL',
    accent: 'green',
    tagline: 'Precision emerald-on-carbon engineering UI with blueprint grids, freight exchange tables, dispatch checklists, and HSV vehicle paint customizers.',
    bestFor: 'Train/aviation/logistics sims, sci-fi terminals, Studio plugins & tools',
  },
];

export const uiShowcaseItems: UIShowcaseItem[] = [
  // Luxury Empire / Syndicate (6)
  {
    id: 'empire-black-market',
    title: 'Black Market Exchange',
    styleId: 'empire',
    styleLabel: 'Luxury Empire',
    project: 'Idle Cartel',
    screenType: 'Marketplace & Auction UI',
    summary: 'Player-to-player gear marketplace with rarity badges, live filters, seller reputation, and side-panel purchase inspector.',
    deliverables: ['Illustrated Item Cards', 'Rarity Tier System', 'Inspector Drawer', 'Desktop / Mobile Layout'],
    image: '/portfolio/ui-empire-black-market.webp',
    featured: true,
  },
  {
    id: 'empire-businesses',
    title: 'District Business Builder',
    styleId: 'empire',
    styleLabel: 'Luxury Empire',
    project: 'Idle Cartel',
    screenType: 'Interactive World-Plot UI',
    summary: 'Interactive hillside lot selector paired with a horizontal business build bar, income-per-hour metrics, and level lock states.',
    deliverables: ['Interactive Plot Overlays', 'Build Carousel', 'Locked / Active States', 'Resource Topbar'],
    image: '/portfolio/ui-empire-businesses.webp',
    featured: true,
  },
  {
    id: 'empire-bosses',
    title: 'District Bosses Roster',
    styleId: 'empire',
    styleLabel: 'Luxury Empire',
    project: 'Idle Cartel',
    screenType: 'Combat Progression UI',
    summary: 'Difficulty-tiered boss selection cards with faction emblems, HP progress bars, first-clear rewards, and cleared/locked states.',
    deliverables: ['Faction Header Badges', 'Boss Portrait Cards', 'Difficulty Tabs', 'Reward Callouts'],
    image: '/portfolio/ui-empire-bosses.webp',
  },
  {
    id: 'empire-cartel-hq',
    title: 'Cartel Headquarters',
    styleId: 'empire',
    styleLabel: 'Luxury Empire',
    project: 'Idle Cartel',
    screenType: 'Guild / Clan Hub UI',
    summary: 'Multi-tab faction command hub tracking treasury, active perks, territory control, shared watchtower donations, and activity feeds.',
    deliverables: ['8-Tab Clan Navigation', 'Shared Project Tracker', 'Treasury KPIs', 'Activity Log'],
    image: '/portfolio/ui-empire-cartel-hq.webp',
  },
  {
    id: 'empire-districts',
    title: 'District Stories & Map',
    styleId: 'empire',
    styleLabel: 'Luxury Empire',
    project: 'Idle Cartel',
    screenType: 'Campaign Map & Jobs UI',
    summary: 'Connected territory node map paired with a story progression sidebar, mission timer breakdown, and first-clear loot preview.',
    deliverables: ['Node Map Overlay', 'Story Progress Bar', 'Mission Action Card', 'Unlock Preview'],
    image: '/portfolio/ui-empire-districts.webp',
  },
  {
    id: 'empire-vault',
    title: 'Barrio Vault Banking',
    styleId: 'empire',
    styleLabel: 'Luxury Empire',
    project: 'Idle Cartel',
    screenType: 'Economy Modal UI',
    summary: 'Clean deposit and withdrawal modal with quick percentage presets (25%, 50%, ALL) and live post-transaction balance preview.',
    deliverables: ['Quick-Amount Controls', 'Live Balance Preview', 'Transaction Tabs', 'Illustrated Backdrop'],
    image: '/portfolio/ui-empire-vault.webp',
  },

  // Vibrant Cartoon / Simulator (5)
  {
    id: 'cartoon-store',
    title: 'The Squish Shop',
    styleId: 'cartoon',
    styleLabel: 'Cartoon Simulator',
    project: 'Steal A Squishie',
    screenType: 'Monetization Storefront',
    summary: 'High-conversion Roblox storefront with featured VIP bundles, Robux purchase + gift CTAs, tabbed categories, and live HUD framing.',
    deliverables: ['Featured Bundle Cards', 'Buy & Gift CTAs', 'Animated Store Preview', 'Full HUD Integration'],
    image: '/portfolio/ui-cartoon-store.webp',
    featured: true,
  },
  {
    id: 'cartoon-inventory',
    title: 'Squishie Collection & Inventory',
    styleId: 'cartoon',
    styleLabel: 'Cartoon Simulator',
    project: 'Steal A Squishie',
    screenType: 'Collectibles Inventory UI',
    summary: 'Rarity-coded collectible grid with search, filter tabs, shelf placement routing, and bulk sell multipliers.',
    deliverables: ['Rarity Card Borders', 'Shelf / Bag Routing', 'Bulk Sell Controls', 'Item Inspector'],
    image: '/portfolio/ui-cartoon-inventory.webp',
    featured: true,
  },
  {
    id: 'cartoon-daily',
    title: 'Daily Goodies & Spin Wheel',
    styleId: 'cartoon',
    styleLabel: 'Cartoon Simulator',
    project: 'Steal A Squishie',
    screenType: 'Retention & Rewards UI',
    summary: 'Three-in-one retention hub combining a daily prize wheel with odds breakdown, 7-day login streak, and claimable daily quests.',
    deliverables: ['Prize Spin Wheel', '7-Day Login Track', 'Quest Progress Bars', 'Odds Table'],
    image: '/portfolio/ui-cartoon-daily.webp',
  },
  {
    id: 'cartoon-reveal',
    title: 'Crate Unboxing Reveal',
    styleId: 'cartoon',
    styleLabel: 'Cartoon Simulator',
    project: 'Steal A Squishie',
    screenType: 'Gacha / Reward Modal',
    summary: 'Punchy rarity reveal modal with confetti framing, income-per-second stat pill, and instant tap-to-continue feedback.',
    deliverables: ['Rarity Glow Treatment', 'Reward Card', 'Animated Unboxing Flow'],
    image: '/portfolio/ui-cartoon-reveal.webp',
  },
  {
    id: 'cartoon-catch-hud',
    title: 'Catch Minigame & Active HUD',
    styleId: 'cartoon',
    styleLabel: 'Cartoon Simulator',
    project: 'Steal A Squishie',
    screenType: 'In-Game Action HUD',
    summary: 'Full gameplay HUD featuring live event banner, currency pills, shelf capacity bar, hotbar tools, and tap-to-catch minigame meter.',
    deliverables: ['Event Banner', 'Minigame Progress Bar', '6-Slot Hotbar', 'Side Nav Rail'],
    image: '/portfolio/ui-cartoon-catch-hud.webp',
  },

  // Dark Anime / Gothic RPG (6)
  {
    id: 'anime-dark-crimson',
    title: 'Character Stats — Dark Crimson',
    styleId: 'anime',
    styleLabel: 'Dark Anime RPG',
    project: 'Anime RPG Commission',
    screenType: 'Character Sheet & Radar UI',
    summary: 'Atmospheric Japanese-accented character stat screen with 5-axis radar polygon, derived combat stats, and point allocation controls.',
    deliverables: ['5-Axis Radar Chart', 'Derived Combat Table', 'Point Allocation Controls', '60fps Flame Motion'],
    image: '/portfolio/ui-anime-dark-crimson.webp',
    featured: true,
  },
  {
    id: 'anime-ink-dossier',
    title: 'Soul Combat Dossier',
    styleId: 'anime',
    styleLabel: 'Dark Anime RPG',
    project: 'Anime RPG Commission',
    screenType: 'Stylized Ink Character Sheet',
    summary: 'High-contrast split parchment-and-sumi-ink stat allocation panel framed by a katana motif and crimson slash accents.',
    deliverables: ['Sumi-Ink Split Layout', 'Custom Stat Icons', 'Radar Overlay', 'Confirm / Reset Flow'],
    image: '/portfolio/ui-anime-ink-dossier.webp',
    featured: true,
  },
  {
    id: 'anime-hollow-stats',
    title: 'Hollow Frame Stats Modal',
    styleId: 'anime',
    styleLabel: 'Dark Anime RPG',
    project: 'Anime RPG Commission',
    screenType: 'Floating Modal UI',
    summary: 'Ornate dark-fantasy floating stat modal with hand-crafted crimson-and-bone border art and whole-state +/- spritesheet buttons.',
    deliverables: ['Custom Border Frame', 'Whole-State Buttons', 'Radar Visualization', 'Native RoUI Build'],
    image: '/portfolio/ui-anime-hollow-stats.webp',
  },
  {
    id: 'anime-skills',
    title: 'Movement & Shunpo Skill Tree',
    styleId: 'anime',
    styleLabel: 'Dark Anime RPG',
    project: 'Anime RPG Commission',
    screenType: 'Hexagonal Skill Tree UI',
    summary: 'Branching hexagonal skill progression tree with unlocked/locked link states, prerequisite panel, and upgrade/assign actions.',
    deliverables: ['Hex Node Graph', '8 Combat Categories', 'Animated Gem Borders', 'Prerequisite Inspector'],
    image: '/portfolio/ui-anime-skills.webp',
  },
  {
    id: 'anime-inventory',
    title: 'Equipment & Paperdoll Inventory',
    styleId: 'anime',
    styleLabel: 'Dark Anime RPG',
    project: 'Anime RPG Commission',
    screenType: 'RPG Inventory & Loadout UI',
    summary: 'Three-column RPG inventory with category icon rail, 20-slot item grid, 3D viewport item pedestal, and 6-slot character equipment view.',
    deliverables: ['Category Icon Rail', '3D Pedestal Viewport', 'Equipment Slots', '8-Slot Hotbar'],
    image: '/portfolio/ui-anime-inventory.webp',
  },
  {
    id: 'anime-abilities',
    title: 'Abilities & Moveset Manager',
    styleId: 'anime',
    styleLabel: 'Dark Anime RPG',
    project: 'Anime RPG Commission',
    screenType: 'Combat Loadout UI',
    summary: 'Structured combat moveset browser with mastery/cooldown stat rows, filter pills, and direct hotbar assignment.',
    deliverables: ['Ability Grid', 'Stat Specification Rows', 'Filter Pills', 'Hotbar Assignment'],
    image: '/portfolio/ui-anime-abilities.webp',
  },

  // Tactical Urban / Modern RP (6)
  {
    id: 'tactical-contracts',
    title: 'City Contracts Board',
    styleId: 'tactical',
    styleLabel: 'Tactical Urban RP',
    project: 'Project Infamy',
    screenType: 'Mission & Crew Lobby UI',
    summary: 'Clean dark-slate contract terminal supporting solo or 4-player crew dispatch, objective checklists, risk ratings, and payout previews.',
    deliverables: ['Contract List & Filters', 'Crew Ready Slots', 'Reward & Rank Gate', 'In-World HUD Frame'],
    image: '/portfolio/ui-tactical-contracts.webp',
    featured: true,
  },
  {
    id: 'tactical-inventory',
    title: 'Weight & Attachment Inventory',
    styleId: 'tactical',
    styleLabel: 'Tactical Urban RP',
    project: 'Project Infamy',
    screenType: 'Tactical Grid Inventory UI',
    summary: 'Deep survival-RP inventory with backpack/pocket weight limits, quick slots, item durability/cleanliness, and drag-to-socket weapon mods.',
    deliverables: ['Weight Capacity Bars', 'Weapon Socket System', 'Condition Telemetry', 'Context Action Rail'],
    image: '/portfolio/ui-tactical-inventory.webp',
    featured: true,
  },
  {
    id: 'tactical-garage',
    title: 'Garage & Vehicle Storage',
    styleId: 'tactical',
    styleLabel: 'Tactical Urban RP',
    project: 'Project Infamy',
    screenType: 'Vehicle Management UI',
    summary: 'Blueprint vehicle inspector managing fuel, chassis integrity, glovebox/trunk upgrade tiers, keyholder permissions, and service history.',
    deliverables: ['Blueprint Wireframe View', 'Storage Tier Tree', 'Keyholder Access Policy', 'Maintenance Log'],
    image: '/portfolio/ui-tactical-garage.webp',
  },
  {
    id: 'tactical-loadout',
    title: 'Loadout & Perk Branches',
    styleId: 'tactical',
    styleLabel: 'Tactical Urban RP',
    project: 'Project Infamy',
    screenType: 'Specialization Tree UI',
    summary: 'Three-track utility perk system (Runner, Mechanic, Operator) with active slot limits, tradeoff callouts, and dual-currency respec flow.',
    deliverables: ['3-Branch Perk Matrix', 'Active Slot Tracker', 'Tradeoff Inspector', 'Respec Controls'],
    image: '/portfolio/ui-tactical-loadout.webp',
  },
  {
    id: 'tactical-safehouse',
    title: 'Safehouse Operations Console',
    styleId: 'tactical',
    styleLabel: 'Tactical Urban RP',
    project: 'Project Infamy',
    screenType: 'Base Management Dashboard',
    summary: 'Real-time operations dashboard monitoring production batches, power consumption, supplier arrival windows, heat/risk levels, and event logs.',
    deliverables: ['Radial Progress Cards', 'Supplier Order Feed', 'Risk Telemetry', 'Live Operations Log'],
    image: '/portfolio/ui-tactical-safehouse.webp',
  },
  {
    id: 'tactical-mobile-dash',
    title: 'Mobile Vehicle Dashboard',
    styleId: 'tactical',
    styleLabel: 'Tactical Urban RP',
    project: 'Project Infamy',
    screenType: 'Touch-First Vehicle HUD',
    summary: 'Ergonomic mobile driving interface with steering/handbrake touch zones, throttle/reverse pedals, gear/ABS indicators, and fuel/integrity bars.',
    deliverables: ['Touch Pedal Controls', 'Cluster Warning Icons', 'Quick-Action Strip', 'Territory Header'],
    image: '/portfolio/ui-tactical-mobile-dash.webp',
  },

  // Fantasy Survival / Tower Defense (5)
  {
    id: 'fantasy-item-shop',
    title: 'Fantasy Item & Tower Shop',
    styleId: 'fantasy',
    styleLabel: 'Fantasy Survival',
    project: 'Survival TD Commission',
    screenType: 'Equipment Shop Modal',
    summary: 'Ornate bevelled-gold medieval item shop with category tabs, tier badges, illustrated weapon cards, and a right-hand inspection panel.',
    deliverables: ['Bevelled Gold Frame', 'Illustrated Tool Cards', 'Category Tabs', 'Purchase Inspector'],
    image: '/portfolio/ui-fantasy-item-shop.webp',
    featured: true,
  },
  {
    id: 'fantasy-store',
    title: 'Gamepasses & VIP Store',
    styleId: 'fantasy',
    styleLabel: 'Fantasy Survival',
    project: 'Survival TD Commission',
    screenType: 'Robux Monetization UI',
    summary: 'High-impact monetization storefront with a hero VIP banner, permanent perk grid, Robux price buttons, and clear Owned states.',
    deliverables: ['Hero VIP Banner', '6-Card Pass Grid', 'Owned / Buy States', 'Robux Compliance Footer'],
    image: '/portfolio/ui-fantasy-store.webp',
  },
  {
    id: 'fantasy-hud',
    title: 'Wave Survival HUD Overview',
    styleId: 'fantasy',
    styleLabel: 'Fantasy Survival',
    project: 'Survival TD Commission',
    screenType: 'Full-Screen Combat HUD',
    summary: 'Complete gameplay HUD uniting wave/night countdown, segmented health & stamina bars, dual hotbars, resource counters, and wooden nav buttons.',
    deliverables: ['Wave Timer Header', 'Health & Stamina Bars', 'Dual Lockable Hotbar', 'Resource Stack'],
    image: '/portfolio/ui-fantasy-hud.webp',
  },
  {
    id: 'fantasy-upgrade',
    title: 'Placeable Tower Upgrade Card',
    styleId: 'fantasy',
    styleLabel: 'Fantasy Survival',
    project: 'Survival TD Commission',
    screenType: 'World Interaction Popup',
    summary: 'Compact tower inspection popup showing tier, segmented HP bar, before/after stat comparison, and hotkeyed Upgrade (E) / Sell (T) buttons.',
    deliverables: ['Tower Portrait Card', 'Stat Delta Comparison', 'Hotkey Badges', 'Upgrade / Sell Actions'],
    image: '/portfolio/ui-fantasy-upgrade.webp',
  },
  {
    id: 'fantasy-settings',
    title: 'Tabbed Game Settings Modal',
    styleId: 'fantasy',
    styleLabel: 'Fantasy Survival',
    project: 'Survival TD Commission',
    screenType: 'Options & Accessibility UI',
    summary: 'Five-category settings menu (General, Audio, Graphics, Controls, Accessibility) with tactile sliders, toggle switches, and reset/save actions.',
    deliverables: ['5-Category Nav', 'Custom Tactile Sliders', 'Toggle Switches', 'Save / Reset Bar'],
    image: '/portfolio/ui-fantasy-settings.webp',
  },

  // Industrial / CAD Sim (4)
  {
    id: 'industrial-exchange',
    title: 'Railway Freight Exchange',
    styleId: 'industrial',
    styleLabel: 'Industrial CAD',
    project: 'AD&N Train System',
    screenType: 'Commodity Trading Terminal',
    summary: 'Minimalist emerald-on-carbon logistics terminal for buying and selling freight lots, checking supplier stock, and calculating order totals.',
    deliverables: ['2-Tier Tab Bar', 'Searchable Stock Table', 'Lot Quantity Stepper', 'Live Balance Math'],
    image: '/portfolio/ui-industrial-exchange.webp',
    featured: true,
  },
  {
    id: 'industrial-workshop',
    title: 'Locomotive Paint & Workshop',
    styleId: 'industrial',
    styleLabel: 'Industrial CAD',
    project: 'AD&N Train System',
    screenType: '3D Vehicle Customizer UI',
    summary: 'Precision rolling-stock workshop with 3D viewport camera tools, interactive HSV color wheel, RGB/HEX inputs, and physical haul selection.',
    deliverables: ['HSV Color Wheel', 'RGB / HEX Inputs', '3D Viewport Controls', 'Draft / Apply State'],
    image: '/portfolio/ui-industrial-workshop.webp',
  },
  {
    id: 'industrial-operations',
    title: 'Yard Dispatch & Contracts',
    styleId: 'industrial',
    styleLabel: 'Industrial CAD',
    project: 'AD&N Train System',
    screenType: 'Operations & Waybills UI',
    summary: 'Structured freight contract browser displaying numbered switching steps, crew eligibility, compatible rolling stock, and XP/credit payouts.',
    deliverables: ['Switch List & Waybills', 'Numbered Step Flow', 'Eligibility Matrix', 'Contract Acceptance'],
    image: '/portfolio/ui-industrial-operations.webp',
  },
  {
    id: 'industrial-hud',
    title: 'Railway Operations HUD',
    styleId: 'industrial',
    styleLabel: 'Industrial CAD',
    project: 'AD&N Train System',
    screenType: 'Simulation HUD & Toasts',
    summary: 'Unobtrusive blueprint-style HUD with collapsible operations drawer, step-by-step rerailing guide, and toast notification stack.',
    deliverables: ['Toast Stack', 'Guided Step Card', 'Dock Icon Bar', 'Collapsible Drawer'],
    image: '/portfolio/ui-industrial-hud.webp',
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    number: '01',
    project: 'Idle Cartel / Syndicate',
    type: 'FULL UI SUITE + ECONOMY',
    title: 'Complete commercial UI suite & progression architecture for an empire tycoon.',
    description: 'End-to-end interface system spanning Black Market trading, business plot construction, district story maps, boss rosters, cartel HQ, and banking across desktop, mobile, and console.',
    contribution: 'Visual direction, 30+ responsive UI screens, interactive schematics, whole-state button spritesheets, and RoUI Studio native transfer.',
    image: '/portfolio/art-idle-syndicate.webp',
    imageAlt: 'Idle Syndicate Game key art and empire tycoon branding',
    file: 'BlackMarketView.luau',
    code: [
      'local MarketState = require(Shared.MarketState)',
      'function BlackMarketView:SelectListing(id: string)',
      '  return self:BindInspector(MarketState.Get(id))',
      'end',
    ],
    tags: ['UI Suite', 'Economy', 'Cross-Device', 'roUI'],
    status: 'PRODUCTION SUITE',
    accent: 'amber',
  },
  {
    number: '02',
    project: 'Project Infamy',
    type: 'GAMEPLAY + TACTICAL UI',
    title: 'Urban crime RPG spanning contracts, inventory, vehicles, crews, and safehouses.',
    description: 'A deep Roblox gameplay and interface project combining authoritative combat, weight-based inventories with weapon sockets, crew contracts, garage upgrades, and safehouse operations.',
    contribution: 'Gameplay architecture, server-authoritative state systems, and the complete dark-slate tactical UI suite including mobile vehicle controls.',
    image: '/portfolio/ui-tactical-contracts.webp',
    imageAlt: 'Project Infamy City Contracts tactical UI screen',
    file: 'ContractService.luau',
    code: [
      'local Result = require(Shared.Result)',
      'function ContractService:Dispatch(crew, contractId)',
      '  if not self:ValidateCrew(crew) then return Result.Fail() end',
      '  return self:StartSession(crew, contractId)',
      'end',
    ],
    tags: ['Gameplay', 'Tactical UI', 'Inventory', 'Luau'],
    status: 'ACTIVE PROJECT',
    accent: 'blue',
  },
  {
    number: '03',
    project: 'Steal A Squishie',
    type: 'SIMULATOR UI + MOTION',
    title: 'High-conversion cartoon simulator UI, animated store, and unboxing systems.',
    description: 'Vibrant front-page collectible simulator featuring animated storefronts, rarity-coded inventories, daily spin wheels, crate unboxing reveals, and tap-to-catch minigames.',
    contribution: 'Complete stylized cartoon UI suite, animated store & unboxing motion pipelines, whole-state button art, and native Roblox Studio integration.',
    image: '/portfolio/ui-cartoon-store.webp',
    imageAlt: 'Steal A Squishie storefront UI',
    file: 'UnboxingController.luau',
    code: [
      'local CrateConfig = require(Shared.CrateConfig)',
      'function UnboxingController:PlayReveal(rollResult)',
      '  self.Trove:Clean()',
      '  return self:MountTreatment(rollResult.Rarity)',
      'end',
    ],
    tags: ['Cartoon UI', 'Monetization', 'Animation', 'Simulator'],
    status: 'COMMISSION SUITE',
    accent: 'green',
  },
  {
    number: '04',
    project: 'AD&N Train System & TrackSnap',
    type: 'SIMULATION + STUDIO PLUGIN',
    title: 'RoScale railway simulation, locomotive build sheets, and dispatch UI.',
    description: 'Precision railway ecosystem combining centralized train physics, GP9 locomotive engineering schematics, an industrial CAD UI suite, and the TrackSnap Studio track-building plugin.',
    contribution: 'Centralized train architecture, Freight Exchange / Workshop / Dispatch UIs, measured build schematics, and Studio plugin UX.',
    image: '/portfolio/art-gp9-schematic.webp',
    imageAlt: 'GP9 RoScale locomotive build schematic with exploded assemblies',
    file: 'DispatchService.luau',
    code: [
      'local Waybill = require(Shared.WaybillSchema)',
      'function DispatchService:AssignContract(player, id)',
      '  local order = Waybill.Validate(id)',
      '  return self:RouteToSiding(player, order)',
      'end',
    ],
    tags: ['Train Sim', 'Studio Plugin', 'CAD UI', 'Schematics'],
    status: 'ACTIVE SYSTEM',
    accent: 'green',
  },
  {
    number: '05',
    project: 'SCV2 ReWrite & Turf Capture',
    type: 'SYSTEMS REWRITE',
    title: 'Ground-up roleplay systems rewrite: vehicles, territory control, and cargo.',
    description: 'Rebuilding core roleplay systems for reliability under load—covering vehicle chassis handling, spatial-hash turf capture zones, contraband cargo crates, and responsive HUDs.',
    contribution: 'Vehicle runtime, turf zone capture logic, server-authoritative transactions, custom crate textures, and live gameplay verification.',
    image: '/portfolio/ui-tactical-mobile-dash.webp',
    imageAlt: 'Vehicle HUD and driving interface for roleplay rewrite',
    file: 'VehicleRuntime.luau',
    code: [
      'local SpatialGrid = require(Shared.SpatialHashGrid)',
      'function VehicleRuntime:Mount(player, chassis)',
      '  return self:AdmitDriver(player, chassis)',
      'end',
    ],
    tags: ['Vehicles', 'Turf Capture', 'Networking', 'Rewrite'],
    status: 'LIVE DEMOS BELOW',
    accent: 'blue',
  },
  {
    number: '06',
    project: 'roUI Studio & Cortex Kit',
    type: 'TOOLING + ARCHITECTURE',
    title: 'Production UI compilation pipeline & strict Luau verification toolchain.',
    description: 'Custom engineering workflow that compiles measured UI schematics into responsive native Roblox hierarchies, enforces whole-state spritesheet buttons, and runs automated Luau static guards.',
    contribution: 'Static analysis rules, deterministic 2-phase Init/Start lifecycles, headless Luau mocks, and zero-drift reference-to-Studio UI transfer.',
    image: '/portfolio/ui-anime-dark-crimson.webp',
    imageAlt: 'Dark Crimson Character Stats UI built through the roUI workflow',
    file: 'SpriteButtonDriver.luau',
    code: [
      'function SpriteButtonDriver.SetState(btn, atlas, state)',
      '  local cell = atlas.States[state]',
      '  btn.ImageRectOffset = cell.Offset',
      '  btn.ImageRectSize = atlas.FrameSize',
      'end',
    ],
    tags: ['roUI', 'Cortex CI', 'Spritesheets', 'Luau'],
    status: 'EVERY PROJECT',
    accent: 'amber',
  },
];

export const videos: ShowcaseVideo[] = [
  {
    number: '01',
    category: 'ANIMATED UI',
    title: 'Dark Anime Character Stats (60fps)',
    description: 'Live 60fps animated flame backdrop, crimson radar chart, and responsive stat allocation panel built for an anime RPG commission.',
    src: '/videos/anime-stats-60fps.mp4',
    poster: '/portfolio/ui-anime-dark-crimson.webp',
    specs: '60 FPS · ANIMATED UI',
  },
  {
    number: '02',
    category: 'ANIMATED UI',
    title: 'Hex Skill Tree & Gem Motion',
    description: 'Complete animated skill tree showcase featuring glowing crimson border energy, node state feedback, and crisp metallic framing.',
    src: '/videos/anime-skills-60fps.mp4',
    poster: '/portfolio/ui-anime-skills.webp',
    specs: '60 FPS · MOTION SUITE',
  },
  {
    number: '03',
    category: 'ANIMATED UI',
    title: 'Whole-State Spritesheet Buttons',
    description: 'Zero flat tweens—stationary hitboxes switching pre-rendered Idle, Hover, and Pressed spritesheet frames via ImageRectOffset.',
    src: '/videos/anime-buttons-60fps.mp4',
    poster: '/portfolio/ui-anime-inventory.webp',
    specs: 'SPRITESHEET · NO TWEENS',
  },
  {
    number: '04',
    category: 'ANIMATED UI',
    title: 'Steal A Squishie — Animated Store',
    description: 'Vibrant cartoon storefront in motion with animated VIP bundles, tactile button feedback, and high-conversion Robux layout.',
    src: '/videos/squish-store-animated.mp4',
    poster: '/portfolio/ui-cartoon-store.webp',
    specs: 'SIMULATOR · STOREFRONT',
  },
  {
    number: '05',
    category: 'GAMEPLAY SYSTEM',
    title: 'SCV2 ReWrite — Vehicle System',
    description: 'Live Roblox Studio test recording demonstrating vehicle chassis handling, responsive controls, and networked state synchronization.',
    src: '/videos/scv2-vehicles-demo.mp4',
    poster: '/portfolio/ui-tactical-garage.webp',
    specs: 'ROBLOX STUDIO · VEHICLES',
  },
  {
    number: '06',
    category: 'GAMEPLAY SYSTEM',
    title: 'Turf Capture — Territory System',
    description: 'Live gameplay recording of territory capture progression, zone state replication, and HUD feedback in Roblox Studio.',
    src: '/videos/turf-capture-demo.mp4',
    poster: '/portfolio/ui-tactical-safehouse.webp',
    specs: 'ROBLOX STUDIO · TURF',
  },
];

export const principles: [string, string, string][] = [
  [
    '01',
    'Player feel & visual craft',
    'Whether it is a 60fps UI button press or a vehicle chassis, the goal is a crisp, responsive experience players immediately trust.',
  ],
  [
    '02',
    'Dependable server authority',
    'Important game state, economy transactions, and combat checks are validated cleanly so live experiences stay exploit-resistant.',
  ],
  [
    '03',
    'Production-ready delivery',
    'Modular Luau code, organized ReplicatedStorage configs, stationary spritesheet hitboxes, and clean handoffs your team can extend.',
  ],
];

export const capabilities: [string, string, string, string[]][] = [
  [
    '01',
    'Commercial Roblox UI Design',
    'Full-game UI suites across 6+ proven styles—Luxury Empire, Cartoon Simulator, Dark Anime RPG, Tactical RP, Fantasy TD, and Industrial CAD.',
    ['HUDs & Menus', 'Shops & Monetization', 'Inventories & Skill Trees', 'Desktop / Mobile / Console'],
  ],
  [
    '02',
    'Native RoUI & Animated Motion',
    'Studio-ready native UI implementation with whole-state spritesheet buttons, 60fps animated backdrops, and strict scale-based responsiveness.',
    ['Zero Flat Tweens', 'Stationary Hitboxes', '60fps Flipbooks', 'Clean Studio Hierarchies'],
  ],
  [
    '03',
    'Gameplay & Economy Scripting',
    'Server-authoritative Luau systems for combat, contracts, inventories, vehicles, turf capture, train simulation, and player progression.',
    ['Strict Typed Luau', '2-Phase Lifecycles', 'Trove Cleanup', 'Remote Validation'],
  ],
  [
    '04',
    'Systems Rewrites & Studio Tooling',
    'Refactoring legacy codebases, fixing performance bottlenecks, and building custom Roblox Studio plugins and automated verification suites.',
    ['Legacy Rewrites', 'Studio Plugins', 'Spatial Hash Grids', 'Offline Luau Tests'],
  ],
];
