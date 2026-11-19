<!-- unified-engineering-kit-cortex-20261103 -->
## Shared Engineering Library, roUI Studio & Cortex Architecture Standard

---

## 🤖 MANDATORY AUTONOMOUS AGENT EXECUTION PROTOCOL (ZERO-PROMPT AUTOMATION)
**THE HUMAN NEVER PLAYTESTS FOR YOU. NEVER ASK THEM TO RUN OR TEST UNVERIFIED CODE IN STUDIO.**
When implementing, modifying, or refactoring any system, plugin, or feature, the AI agent MUST autonomously execute this closed-loop pipeline before concluding its turn:
1. **AUTONOMOUS SCOPE LOCK:** Lock onto the single requested feature. Never bounce to secondary systems, speculative UI, sound effects, or unrelated files until the active domain unit is 100% complete and verified.
2. **PURE DOMAIN FIRST & TYPED TELEMETRY:** Write domain logic in pure Luau with zero engine calls (`game:GetService` or `workspace`), returning typed tagged unions (`{ success: true, ... } | { success: false, reason: Reason, details: string }`). Returning bare `nil` or throwing unhandled exceptions is strictly forbidden.
3. **AUTOMATED OFFLINE TEST VERIFICATION:** Autonomously write a headless unit test in pure Luau using `primitives/HeadlessMocks.luau` (for game features) or `primitives/plugin/MockPlugin.luau` (for Studio plugins). Verify edge cases, boundary conditions, and rejections offline using `luau.exe -O2`.
4. **AUTOMATED CI GATING (CORTEX VERIFY):** Autonomously execute `python cortex.py verify <path>` (or `cortex guard`, `cortex doctor`, and `cortex loop`).
5. **ZERO-TOLERANCE AUTO-REMEDIATION LOOP:** If `cortex` flags any error, circular `require()` cycle, dangling connection, unbounded yield, line bloat, flat button tween, or plugin lifecycle hazard, the agent MUST immediately and autonomously fix the violation in a loop. Handing back unverified or failing code is a critical protocol violation.

---

## 🎨 roUI STUDIO: BUTTON STATE SPRITESHEET POLICY & PROHIBITION OF FLAT TWEENS
**ZERO FLAT PROCEDURAL ANIMATIONS ON IMAGE BUTTONS:**
1. **STRICT BAN ON FLAT TWEEN ANIMATIONS:**
   - Under NO circumstance may an `ImageButton`, `ImageLabel`, or image-based interactive component use `TweenService:Create` or procedural property tweening on `Size`, `Position`, `ImageColor3`, `BackgroundTransparency`, or `UIScale.Scale` for button state transitions (hover, click, press, release, disable).
   - Reason: Flat scaling warps 9-slice borders, causes severe pixel shimmering and edge blurriness, creates moving hitboxes that drop player clicks, and looks like amateur web mockups.
   - **CI ENFORCEMENT:** Cortex Static Guard strictly enforces `RULE-044:NO-FLAT-TWEEN-ON-IMAGE-BUTTON`. Any procedural tween detected on an image-based button triggers an immediate CI failure.
2. **MANDATORY WHOLE-STATE SPRITESHEET LOADING:**
   - All interactive image-based buttons MUST load from an authored whole-state spritesheet texture containing pre-rendered frames for every discrete state:
     - `Idle`: Resting base state.
     - `Hover`: Hovered state with specular edge highlights and lighting baked into the frame art.
     - `Pressed`: Depressed/actuated state with mechanical downward depth (2–4px) baked directly into the pixel artwork.
     - `Disabled`: Inactive/desaturated state.
     - `Selected`: Active toggle or selected state.
3. **STATIONARY HITBOX CONTRACT:**
   - The button hitbox (`Position` and `Size` of the `ImageButton` instance) MUST remain 100% stationary and rigid in place.
   - The visual sensation of physical mechanical button travel (pressing down 2–4px) is rendered strictly through internal pixel offsets baked into the `Pressed` sprite frame art. The GUI bounding box never moves.
4. **STATE SWITCHING VIA RECT COORDINATES:**
   - Button state transitions are executed strictly and instantaneously (or via discrete frame animation) by updating `ImageRectOffset` and `ImageRectSize` to reference the corresponding state cell in the spritesheet atlas.
   - Zero runtime procedural math; zero tween allocations.
5. **PROJECT-AUTHORED DESIGN OWNERSHIP (ZERO GENERIC PRESETS):**
   - **DOWN TO THE PROJECT'S DESIGN:** Visual appearance, styling, button states, and layout metrics are governed strictly by the active project's authored UI design, Figma screens, or design specification. Never substitute generic presets, phantom "themes", or unrequested external style systems.
   - **PROJECT-OWNED SPRITESHEET CONFIGURATION:** When a project authors whole-state button spritesheets, state atlas definitions (Image asset ID, frame size, and per-state rect offsets) reside in that project's own shared UI configuration module (`*Config.luau` or component definition).
   - **DIRECT NATIVE RECT DRIVER:** State transitions update `ImageRectOffset` and `ImageRectSize` directly to the coordinates defined in the project's asset atlas for each state (`Idle`, `Hover`, `Pressed`, `Disabled`). No arbitrary external dependencies; zero flat tweens.

---

## 🏷️ CORTEX TAXONOMY PURGE & CENTRAL ROBLOX API (ZERO AMBIGUITY)
**TOTAL BAN ON ENTERPRISE JARGON & REDUNDANT WRAPPERS:**
1. **BANNED ENTERPRISE TERMINOLOGY:**
   - Never use web-enterprise jargon: `Adapter`, `Bridge`, `Router`, `Wrapper`, `Facade`, `Shim`, `Manager`, `Helper`, `Handler`, `Common`, `Misc`, `Stuff`, `Logic`, `Base`, `Engine`.
   - Never create speculative wrappers or forwarding layers around Roblox engine services. Require concrete owners directly.
2. **DIRECT CENTRAL ROBLOX API (`Roblox.*`):**
   - All standard engine utility operations are centralized into idiomatic, typed, zero-overhead modules:
     - `Roblox.Tags`: `CollectionService` query, tagging, untagging, and tag observation.
     - `Roblox.Attributes`: Strict typed attribute reading, writing, and signal listening.
     - `Roblox.Prompts`: `ProximityPrompt` creation, state management, and interaction gating.
     - `Roblox.Tools`: `Tool` equip, unequip, activated, and grip management.
     - `Roblox.Physics`: Pure raycasting, collision group filtering, and physics queries.
     - `Roblox.Bindables`: Type-safe synchronous intra-environment signaling.
     - `Roblox.Parallel`: Actor task coordination, desynchronization, and parallel execution.
     - `Roblox.Binder`: `CollectionService` component lifecycle binding.
3. **THE 9 PERMITTED FUNCTIONAL SUFFIXES:** Every module must end in one of:
   - `*Service`: Server domain singleton under `ServerScriptService.Services`.
   - `*Controller`: Client domain singleton under `StarterPlayerScripts.Controllers`.
   - `*Component`: CollectionService lifecycle entity binder under `Components`.
   - `*Signal`: Event definitions and type-safe observable subjects under `Shared.Signals`.
   - `*Packet`: Networking and binary serialization schemas under `ReplicatedStorage.Network`.
   - `*View`: Pure UI presentation, zero business logic, under `Views`.
   - `*Util`: Pure deterministic math/string/table algorithm under `Shared.Utils`.
   - `*Driver`: Hardware/device abstraction under `Client.Drivers` (`GamepadDriver`, `AudioDriver`).
   - `*Session`: Stateful transient user connection or match session under `Server.Sessions`.
4. **SUFFIX PARITY MATRIX:**
   - `*.server.luau` -> `Script` (Server only). No `return`.
   - `*.client.luau` -> `LocalScript` / `Script` (Client RunContext). No `return`.
   - `*.luau` -> ONLY `ModuleScript`. MUST `return` exactly one table, function, or class. Zero top-level side effects or `Players.LocalPlayer` references at root!
5. **CLOSED 4-TIER TOPOLOGY:**
   - `src/client/` (`boot.client.luau`, `controllers/`, `components/`, `views/`, `drivers/`)
   - `src/server/` (`boot.server.luau`, `services/`, `components/`, `sessions/`)
   - `src/shared/` (`network/`, `config/`, `types/`, `utils/`, `signals/`)
   - Single-Bootstrapper Rule: Exactly ONE client entrypoint and ONE server entrypoint. Maximum directory depth: 3 levels. Flatness cap: max 12 scripts per folder.
6. **SEMANTIC DATAMODEL INSTANCE CONTRACT:**
   - Frames: `[Domain]Frame` or `[Domain]Modal` (never bare `Frame` or `Main`).
   - Buttons: `[Action]Button` (e.g. `CloseButton`, `PurchaseButton`; never `Close`, `Exit`, `XButton`).
   - Labels: `[Field]Label` (e.g. `TitleLabel`, `AmountLabel`; never `Level` when displaying a name!).
   - Value Bars: `[Stat]Bar` (Parent) + `Fill` (Scale Frame) + `Background` (Frame).

---

## 🔌 ROBLOX STUDIO NATIVE APPLICATION CONTRACT & WORKBENCH ENGINE
**NATIVE STUDIO EXECUTION & PLUGINS (CRASH-PROOF & ZERO-LEAK):**
1. **NATIVE WORKBENCH PLUGIN (`CortexWorkbench.rbxmx`):**
   - `CortexWorkbench.luau` and `CortexStudioTools.luau` operate natively inside Roblox Studio as an interactive DockWidget plugin.
   - Built to run in Studio without requiring external bridge polling or manual copy-pasting.
2. **`ScriptEditorService` LIVE BUFFER SYNC:**
   - Tools read open document text buffers directly via `ScriptEditorService:GetEditorSource(script)`.
   - Surgical semantic edits are applied via `UpdateSourceAsync`.
   - Jump the editor cursor directly to diagnostic lines using `OpenScriptDocumentAsync` and cursor line selection.
3. **`ChangeHistoryService` UNDO / REDO TRANSACTIONS:**
   - Never call legacy `ChangeHistoryService:SetWaypoint()`.
   - Every mutating tool action MUST be wrapped in `ChangeHistoryService:TryBeginRecording(name)` and `FinishRecording(recording, Enum.FinishRecordingOperation.Commit)` inside a protected call.
   - On error or rejection, ALWAYS finish with `Cancel` so Studio's Ctrl+Z undo stack is never corrupted or frozen.
4. **`Selection` RECURSION GUARD (RULE-038):**
   - Listening to `Selection.SelectionChanged` and mutating `Selection:Set(...)` MUST use a boolean re-entrancy lock (`isMutatingSelection = false`). Prevents infinite feedback loops and C-stack overflow freezes.
5. **ZERO SWALLOWED PCALLS (RULE-023):**
   - Every `pcall` must capture its error return: `local ok, err = pcall(...)`. If not `ok`, log or warn: `if not ok then warn(err) end`. Never swallow errors or return fake success.
6. **EPHEMERAL GHOST ISOLATION:**
   - All temporary preview parts, wireframes, snap adornments, or rulers must set `Archivable = false` and register to the active tool `Trove` for immediate destruction upon tool deactivation. Never save plugin ghosts to the place file.
7. **ROOT `plugin.Unloading` CLEANUP:**
   - Every plugin registers a root `Trove` to `plugin.Unloading`. When a plugin reloads, all Toolbars, DockWidgets, event connections, and temporary instances are destroyed immediately. Zero zombie listeners.
8. **PLUGIN KEYBIND & SHORTCUT NON-INTERFERENCE LAW (RULE-045):**
   - Studio plugins MUST NOT overwrite, hijack, or compete with native Roblox Studio keybinds (Undo/Redo: `Ctrl+Z`, `Ctrl+Y`, Save: `Ctrl+S`, Delete, Play/Run: `F5`, `F8`, Tool selection: `1` to `4`, Camera navigation: `Space`, `WASD`, `Shift+F`).
   - **RETURNING FALSE DOES NOT ESTABLISH EXCLUSIVE SHORTCUT OWNERSHIP:** In Roblox engine Luau, `UserInputService.InputBegan` is a broadcast event whose return values are discarded. Returning `false` or `nil` from a `UserInputService` callback does NOT sink events, does NOT cancel propagation, and does NOT establish exclusive shortcut ownership.
   - **ZERO DEFAULT ASSIGNMENTS OVER STUDIO KEYS:** All tool commands and plugin keyboard shortcuts MUST be registered via `plugin:CreatePluginAction(actionId, text, statusTip, icon, allowBinding)` without assigning default key combinations over native Studio keys. Setting `allowBinding = true` exposes the action directly into Studio's **Customize Shortcuts** window (`File` -> `Advanced` -> `Customize Shortcuts...`), allowing developers to assign their own hotkeys cleanly.
   - **WIDGET INPUT SCOPING:** For interactive plugin UI (drag-and-drop, sliders, panels), input handlers must be scoped directly to the plugin's own `DockWidgetPluginGui` or constituent `GuiObject` events (`gui.InputBegan`), NEVER global `UserInputService.InputBegan`.
   - When claiming viewport pointer focus via `plugin:Activate(true)`, any unhandled key or mouse event must pass through to Studio without suppression.

---

## 🛠️ THE 10 SPECIALIZED CORTEX CODING TOOLS
AI models and developers operate directly with these 10 specialized coding tools:
1. `cortex inspect <path>`: Deep AST structural analysis, symbol hierarchy, caller graph, and complexity metrics.
2. `cortex patch-node <file> <symbol> <new-body>`: Surgical syntax-tree node replacement preserving whitespace, comments, and untouched definitions.
3. `cortex rewrite-callers <old-symbol> <new-symbol>`: Multi-file semantic caller rewrites across client, server, and shared directories.
4. `cortex check-contract <file>`: Static verification of module contract signatures, exported types, and return invariants.
5. `cortex audit-cleanup <file>`: AST scan for dangling signal connections, uncancelled `task.delay` calls, unparented instances, and leaky closures.
6. `cortex state-audit <file>`: Validates unidirectional data flow, state machine exhaustiveness, and illegal mutable state scattering.
7. `cortex hoist-alloc <file>`: Hoists per-frame allocations, table instantiations, Vector3/CFrame math out of `Heartbeat`/`RenderStepped` loops into static caches.
8. `cortex type-gen <schema-file>`: Generates `--!strict` Luau type definitions and tagged unions from network packet schemas or datastore records.
9. `cortex mock-component <name>`: Scaffolds deterministic offline test doubles with simulated instance trees and CollectionService tag mocking.
10. `cortex gen-test <module-path>`: Generates complete, executable, headless Luau unit test suites running under `luau.exe -O2`.

---

## ⚡ CRITICAL DO'S AND DON'TS: PERFORMANCE & ROBLOX API CALLS
1. **CONTEXTACTIONSERVICE IS STRICTLY BANNED (DO NOT USE):**
   - Never call `game:GetService("ContextActionService")` or `CAS:BindAction()`.
   - CAS generates synthetic mobile touch buttons (`createTouchButton`), creates invisible priority sink bugs, and collides with gamepad/keyboard input routing.
   - **MANDATORY PATTERN:** Use `UserInputService` routed into prioritized Input Mapping Contexts (`EnhancedInputContext`).
2. **HEAVY PHYSX SPATIAL QUERIES IN STEP LOOPS ARE BANNED:**
   - Never call `workspace:GetPartsInPart()`, `workspace:GetPartBoundsInBox()`, `workspace:GetPartBoundsInRadius()`, or `workspace:FindPartsInRegion3()` in `Heartbeat`, `RenderStepped`, or frequent frame loops. Never use physical Parts with `.Touched` events for territory/zone capture or hitboxes.
   - Doing so stalls Roblox’s PhysX broadphase, dropping server tickrates under player load.
   - **MANDATORY PATTERN:** Use pure mathematical `SpatialHashGrid` (2D/3D cell hashing) for turf zones and proximity. Use `workspace:Raycast()` with explicit `RaycastParams.CollisionGroup` for targeted combat hit detection.
3. **NON-ECS PHYSICAL PROJECTILES ARE BANNED:**
   - Never spawn physical `Part` instances with `BodyVelocity` or `LinearVelocity` and `.Touched` for bullets or projectiles. Spawning 100 bullet instances floods C++ allocations, destroys replication bandwidth, and causes tunneling.
   - **MANDATORY PATTERN:** Projectiles must run through pure Data-Oriented ECS ballistics (`BatchBallisticsECS`) stored in contiguous flat arrays/buffers. Bullets are stepped via pure math + a single raycast per frame. Visual tracers are rendered purely client-side.
4. **PACKET HARDENING & ZERO UNKNOWN INGESTION:**
   - Server-bound remotes must NEVER accept `ByteNet.unknown` or unvalidated loose tables. Every packet schema must have explicit bounds, length limits, and finite number checks (`x == x and math.abs(x) < math.huge`).
   - Every remote query timeout (`InvokeServerWithTimeout`) must race against a real timer token (`task.delay`) returning `nil, "Timeout"`, never a fake no-op.
   - Never cache dynamic endpoint or bindable names in unbounded module-level tables.
5. **METHOD DISAMBIGUATION (INSTANCE VS USER MODULE):**
   - The deprecated Roblox engine method `Instance:Remove()` took strictly 0 arguments. User-defined collection/data-structure methods (`grid:Remove(id)`, `store:Remove(key)`) take 1+ parameters. Linters and AI models must NEVER confuse user module methods with `Instance:Remove()` or rewrite them into `Instance:Destroy()`. Function declarations (`function Class:Remove(...)`) are never calls.
6. **BOUNDED ASYNC INGESTION (NO UNBOUNDED INVOKESERVER):**
   - Naked `RemoteFunction:InvokeServer()` in client UI, interaction, or button callbacks is banned. Stalled server queries will permanently freeze the client UI thread. Every server call must be protected with a bounded timeout race or Promise token.
7. **MULTIPLAYER KEYED DEBOUNCING:**
   - Never use global boolean debounces (`local touchDebounce = false`) on tools or touch listeners. Debounces must be keyed per character model using `os.clock()` timestamps. Global flags lock out other players during the debounce window.
8. **GAMEPLAY RESERVED KEYBIND & INPUT COLLISION LAW (RULE-046):**
   - In-game player controls, `UserInputService`, and `EnhancedInputContext` (IMC) MUST NOT conflict with Roblox core engine keybinds.
   - Strictly banned from gameplay action binding:
     - `Enum.KeyCode.Escape` (CoreGui Pause / Settings Menu)
     - `Enum.KeyCode.F11` (Fullscreen toggle)
     - `Enum.KeyCode.F12` / `Print` (Video recording / Screenshot capture)
     - `Enum.KeyCode.Backquote` (Developer Console / `F9`)
   - Core Chat (`/`) and PlayerList (`Tab`) are reserved unless the game explicitly disables them via `StarterGui:SetCoreGuiEnabled`.
   - All `UserInputService.InputBegan` handlers MUST check `if gameProcessedEvent then return end` before processing keystrokes to ensure Roblox CoreGui, chat typing, and Studio editor shortcuts take precedence.

---

## 🎮 UNREAL ENGINE AAA SYSTEMS ARCHITECTURE IN LUAU
1. **GAMEMODE / PLAYERCONTROLLER / PAWN TOPOLOGY:**
   - Permanent `PlayerController` owns session state, UI coordination, and input routing across the player's entire connection.
   - The Character model (`Pawn`) in Workspace is an ephemeral physical puppet. When a character dies, the `PlayerController` unpossesses the dead pawn. Never reload scripts, rebind remotes, or recreate UI on character respawn!
2. **CONTEXTUAL INPUT MAPPING CONTEXTS (IMC):**
   - Decouple hardware keys into abstract Input Actions (`IA_Interact`, `IA_Fire`) mapped via prioritized Input Mapping Contexts (`IMC_Default`, `IMC_InVehicle`, `IMC_InventoryMenu`).
   - Managed via a prioritized stack: opening a menu pushes `IMC_InventoryMenu` and suppresses all gameplay actions automatically. Zero boolean flags (`if isInventoryOpen then return`).
3. **GAMEPLAY TAGS & ATTRIBUTE SETS (GAS-LITE):**
   - Hierarchical O(1) state tags (`State.Debuff.Stun`, `Ability.Melee.Combo2`).
   - Declarative ability admission checks (`HasAll(RequiredTags)`, `not HasAny(BlockedTags)`). Eliminates loose boolean flag clutter.
4. **DATA-ORIENTED DESIGN (DoD) & STRUCT OF ARRAYS (SoA):**
   - High-throughput simulation loops (projectiles, boids, particles, ragdolls) must use flat parallel arrays/buffers. Zero per-frame allocations, zero metatable chasing.
5. **CLIENT PREDICTION & SERVER RECONCILIATION:**
   - Client runs simulation locally, records input history buffer. Server validates and sends authoritative corrections. Client reconciles and replays unacknowledged frames.

---

## 🏛️ ENTERPRISE ARCHITECTURE PILLARS (STAFF ENGINEER STANDARD)
1. **DETERMINISTIC 2-PHASE LIFECYCLE (DAG BOOT):**
   - Every service/controller implements an explicit 2-phase lifecycle (`Init` -> `Start`).
   - `Init`: Synchronous registration only. **Zero yielding (`task.wait`, WFC, DataStore) permitted. Zero cross-service calls permitted.** Registers public signals, remotes, and state schema.
   - `Start`: Asynchronous execution phase. Services may call other services, mount event listeners, and start simulation loops.
   - Eliminates 100% of cyclic dependency deadlocks (`A -> B -> A`) and thread boot hangs.
2. **IDEMPOTENT MEMORY LIFETIMES (TROVE / JANITOR IDIOM):**
   - Every dynamic entity, UI modal, and component MUST own a `Trove` or `Janitor` container.
   - All signal connections, tweens, spawned threads, and child instances are registered to the Trove.
   - Cleanup runs in strict reverse allocation order (LIFO: Last In, First Out). Teardown must be idempotent (`trove:Clean()` can be invoked repeatedly without error). Zero orphaned closures in the C++ signal registry.
3. **BINARY BUFFER SERIALIZATION (ZAP / BYTENET STANDARD):**
   - High-frequency remote payloads (combat, movement, inventory transactions) MUST use fixed binary schemas packed into Luau `buffer` operations.
   - Never send loose dictionaries with string keys over RemoteEvents. Drops payload bandwidth by 90%+ and cuts per-frame Garbage Collection allocations to ZERO.
4. **UNIDIRECTIONAL DATA FLOW & AUTHORITATIVE STATE:**
   - Single authoritative source of truth. Server owns domain state; clients send *Intents/Actions*, never direct mutations.
   - Pure reducers mutate state deterministically. Clients subscribe to read-only state projections. UI components (`*View.luau`) are pure renderers with zero business logic.
5. **ENTERPRISE TOOLCHAIN COMPLIANCE:**
   - Codebases map to `default.project.json` (Rojo), version dependencies via `wally.toml` (Wally), enforce AST rules via `selene.toml` (Selene), and format with `stylua.toml` (StyLua).

---

## 🛑 CORTEX CLOSED TOPOLOGY & ANTI-SPRAWL (NO SCATTERING)
1. **CLOSED PLACEMENT FENCE:** Never place Scripts or LocalScripts in `Workspace`, inside `ScreenGui` elements, or inside `Tools`. Server logic belongs in `ServerScriptService`; client logic in `StarterPlayerScripts`. World objects (doors, triggers, spawners) and GUI buttons are inert instances driven by `CollectionService` tags and attributes from central controllers.
2. **THE 3-MODULE FEATURE BUDGET:** Every gameplay feature or subsystem has a strict maximum budget of 1 to 3 modules (Server, Client, Config). Simple mechanics (doors, pickups) MUST be 1 single module. Never create 4+ files for a single feature (e.g. no 16 gate files or 43 animation sub-scripts).
3. **SINGLE AUTHORITATIVE STATE OWNER:** State lives in exactly ONE authoritative table on the server. Never maintain dual sources of truth. Never scatter state across `IntValue`, `StringValue`, `BoolValue`, or loose part attributes.
4. **DEPENDENCY FENCE:** Features communicate across boundaries strictly via public API methods or network remotes. Never require private internal helpers of another feature. Shared data types and configs live in `ReplicatedStorage.Shared`.

---

## 🛑 CORTEX CODE QUALITY & ANTI-OVERENGINEERING (NO BUREAUCRACY)
1. **NO METATABLE SINGLETONS:** Static services, controllers, and utilities MUST be plain tables returning functions. Metatables are strictly banned unless instantiating multiple distinct instances with independent dynamic lifecycles.
2. **NO BRITTLE STRING-PATH TRAVERSAL:** Never traverse hierarchies using `string.split(path, ".")` or multi-level string arrays (e.g. `{"ArtworkFit", "ArtworkCanvas", ...}`). Use direct semantic queries (`root:FindFirstChild("Fill", true)`), attributes, or tags.
3. **NO FORWARDING FACADES:** Never create a module whose sole purpose is requiring and re-exporting another module. Require concrete owners directly. Maximum 1 level of require indirection.
4. **NO CENTRAL MEGALOOP SCHEDULERS:** Never build custom game engines inside Roblox (no central `advance(dt)` loops checking multiple `.HasWork()` flags). Roblox is an event-driven engine. Connect directly to property changes or signals only where simulation is actively occurring.
5. **NO TIER FILE EXPLOSION:** Never generate separate files for item tiers. Consolidate into a single data-driven schema table with tier multipliers or formulas.
6. **BOUNDED WAITFORCHILD:** Never write unbounded `:WaitForChild("Name")`. ALWAYS provide a timeout: `:WaitForChild("Name", 5) :: Instance?` with an explicit nil check. Never re-invent `WaitForChild` using custom `BindableEvent` and `ChildAdded` hacks.
7. **NO DUMMY TYPE HACKS:** Never declare unassigned dummy locals (e.g. `local root: ScreenGui`) solely to synthesize types with `typeof()`. Write clean, decoupled export types directly.
8. **NO DEPRECATED APIS:** Use `task.wait()`, `task.spawn()`, `task.delay()`, `:Connect()`, `workspace:Raycast()`, and modern Constraints. Never use `wait()`, `spawn()`, `delay()`, `:connect()`, `FindPartOnRay`, or `BodyVelocity`.
9. **NO TRUTHINESS BUGS:** Never write `local x = val or fallback` if `val` can be boolean `false`. Write: `local x = if val ~= nil then val else fallback`.
10. **NO SWALLOWED PCALLS (RULE-023):** Every `pcall` must capture and handle the error: `local ok, err = pcall(...); if not ok then warn(err) end`.

---

## 🛡️ PRODUCTION LIFECYCLE & DEFECT SHIELD (AUDIT TESTED)
1. **STUDIO PLAYERADDED CATCH-UP:** Always iterate existing players before connecting `PlayerAdded`: `for _, p in Players:GetPlayers() do task.spawn(setup, p) end Players.PlayerAdded:Connect(setup)`.
2. **EXPLICIT SERVICE DECLARATIONS:** Every service must be explicitly declared via `game:GetService(...)` at the top of the file. Never call undeclared globals.
3. **CONSISTENT ENTRYPOINT AUTHORIZATION:** ClickDetectors, ProximityPrompts, and Remotes for the same action must enforce the exact same server-side proximity and permission checks. Never trust client remote payloads without distance checks.
4. **NO YIELDING IN MAIN INTERACTION THREADS:** External yielding API calls (`Player:IsInGroup()`, DataStores, MarketplaceService) must run in safe asynchronous tasks with explicit error boundaries, never blocking synchronous interaction or simulation paths.
5. **COMPLETE STATE RESETS:** State machine resets must clear all accumulated error and derailment latches, not just visual disabled flags.
6. **ZERO HOT-PATH TREE TRAVERSAL:** Never call `:GetDescendants()` inside `RenderStepped`, `Heartbeat`, or streaming spawn callbacks. Use tags or direct attributes.
7. **RESOURCE TEARDOWN OWNERSHIP:** A module may ONLY destroy resources it created. Never call `:Destroy()` on a shared controller, service, or motor found or reused from elsewhere.
8. **CANCELLATION ON TEARDOWN:** Delayed tasks (`task.delay`) and tweens must be cancelled or lifecycle-guarded so they never execute against destroyed GUI or models.
9. **MULTIPLAYER-SAFE TOUCHED DEBOUNCE:** Touched events must debounce by Character Model with `os.clock()` timestamps, never a single global boolean.

---

## 📏 THE 120-CHARACTER ARRAY FORMATTING LAW (RULE-029)
1. **BANNED: SINGLE-ELEMENT-PER-LINE ARRAY DUMPS:**
   - Never format arrays, tables, vertex data, indices, animation keys, or serialized buffers with one number, string, or boolean per line. Doing so inflates scripts to 10k-30k lines of bloat, crashing editor performance and destroying git diffs.
   - **MANDATORY PATTERN:** Pack flat arrays of primitive values (numbers, strings, booleans, enums) horizontally onto lines wrapped up to **120 characters maximum**, matching the indentation of the enclosing table/block.
   - **LINTER ENFORCEMENT:** Any array with >= 10 consecutive single-item lines triggers `RULE-029:ARRAY-LINE-BLOAT`. Use `python tools/cortex_compact_arrays.py <file> --write` to compact immediately.
   - **EXAMPLE:**
   ```lua
   -- BANNED (causes 30,000 lines of line bloat):
   Packed = {
       1,
       2,
       454,
   }

   -- MANDATORY (compacted to 120-column rows with scope indentation):
   Packed = {
       1, 2, 2, 1, 454, 2, 1, 2, 384, 1, 454, 384, 2, 2, 2, 2, 454, 2, 2, 2, 384, 2, 454, 384, 3, 2, 2, 3, 454, 2,
       3, 2, 384, 3, 454, 384, 4, 2, 2, 4, 454, 384, 5, 2, 2, 5, 454, 384, 6, 2, 2, 6, 454, 384, 7, 2, 2, 7, 454,
   }
   ```

---

## 🛑 THE ZERO-PLAYTEST MANDATE & COMPLETE SYSTEM LAW (NO AI SLOP)
1. **BANNED: SPECULATIVE CODING & MANUAL PLAYTEST CYCLES:**
   - Never treat the developer as an execution runtime or ask them to playtest in Roblox Studio every 5 minutes to verify if your code works.
   - Never ask vague diagnostic stalling questions (e.g. "Which failure are you seeing in v63? Did you click the button or did the curve reject?").
   - **MANDATORY COMPLETE 5-LAYER SLICE:** Every system deliverable must include:
     1. Authoritative Server Owner (`*Service.luau` or `*Component.luau`)
     2. Deterministic Network Packet (`*Packet.luau` or binary schema)
     3. Client Controller / View (`*Controller.luau` / `*View.luau`)
     4. Replicated Config (`*Config.luau`)
     5. Complete DataModel Mounting Blueprint (Instance hierarchy, Tags, CollisionGroups, Attributes).
   - **DETERMINISTIC DIAGNOSTIC HOOK:** Every system must implement a `dumpDebugState(): string` method. If an issue arises, provide a single command-bar one-liner that prints the system's exact internal state vector in one output.
   - **OFFLINE HEADLESS VERIFICATION:** Systems must be proven offline using `archetypes/testing/HeadlessTestHarness.luau` or unit tests under `luau.exe -O2` before delivery.

---

## 🎨 roUI STUDIO DESIGN ENGINE & UI TRANSFER WORKFLOW RULES
1. **LOCAL UI ENGINE DEFAULT:** The user selected RoUI Studio, the local AI design engine. Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/REVIEW_WORKBENCH.md` for persistent owner-scoped review tabs, Forgewise Explorer/icons/Properties, revision-checked workbench_edit and actual desktop_workbench MCP inspection. Background chat updates must not select a foreground tab. Examples/presets are opt-in: preserve existing artwork, full image cells, exact fonts and existing runtime owners; never clear pages or synthesize state art by default. The desktop shortcut targets the canonical shared implementation. Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/LOCAL_DESIGN_ENGINE.md` and use the actual `local-design-engine` skill. Reuse existing generated artwork. Do not retry hosted Figma or generate replacement art; use Figma only when the human explicitly requests it again for the current work. Older required-Figma wording means an actual editable local design in this workflow. Existing stage, asset/publication and native/input gates remain.
2. **ONE UI TRANSFER PROCESS:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/UI_TRANSFER.md` and the actual roblox-ui-transfer skill. Compile the approved measured frame without interpretation; start with the built-in ui_transfer action guide; its geometry/schema/audit/bind/validate/compare/compile/prepare/verify/status actions share one renderer owner. Run audit for direct source/native property references before compilation; unresolved semantics or stale measurements block import. See UI_PROPERTY_PARITY.md for exact mappings and known preview gaps; preserved XML is not proof that the local preview renders every property. The compiler assembly contract must account for every emitted ID/class/parent/property; missing or modified contracts block admission. Preserve Rotation, parent transforms, text alignment and padding. Verify actual native properties, viewport, text fit and visible image loading. Actual native visual comparison and real input still gate acceptance. No ad-hoc reconstruction or import-time text/property normalization; repair and re-review the source. Keep active packets, revisions and viewport owners intact.
3. **STORAGE OWNERSHIP:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/LOCAL_STORAGE.md`. Use the shared lossless revision store; never recreate full-image history dumps or copy engine .local trees into projects/releases. Reuse verified sprite/capture receipts; playback must not export PNGs per display tick. Keep one previous bundle ZIP, not repeated expanded backups. Preserve current designs, source art, approval/native evidence and publication journals. Cleanup must follow the actual resource owner and verify recovery before retiring a duplicate. Completed jobs must use prepare_job_cleanup, obtain human confirmation of that exact plan, then complete_job; restore_job retrieves exact source without rendering. Keep handoffs below 8 KiB and link retained deliverables. No Python/XML/HTML/base64 dumps or copied fixtures for basic work; portable sprite HTML is opt-in. Preserve required evidence through explicit retention pins. save_png defaults to retained evidence; only explicit retention:temporary root previews roll to the newest three by capture time. Legacy/retained outputs and active authoring-captures are never swept on source changes. See preview-retention.json for temporary deletion records.
4. **TOOL OPERATING GUIDE:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/LOCAL_TOOL_GUIDE.md` before dependent UI tool use. Select the exact current file/page/frame/revision, read project stage/failures, and use the stage-to-tool table. Global and project MCP registrations share the same Python bridge. Existing chats with stale tool metadata refresh the connection or use client.mjs; never spawn another engine. Sizing ticks/rulers surround the image, using the shared pixel/0..1 scale convention in PRECISION_REVIEW.md.
5. **SPRITESHEETS:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/SPRITE_WORKBENCH.md` for active prepare_spritesheet/save_sprite_frame tools and the /sprites fixed-centre grid viewer. Pin source hashes, preserve full RGBA and semantic pivots in one padded cell, and default new work to 60 fps without silently retiming existing art. Verify actual presented/skipped-frame counters; grid diagnostics never enter production images. Exported configuration belongs to the existing replicated owner, with runtime playback under the central client animation module. Use the actual roblox-spritesheet-authoring skill for measured pivot/parity/padding and timing. save_sprite_frame runs file-only Python outside the render queue and publishes complete PNGs atomically; never lock engine.exclusive or start another service for extraction. Local playback does not prove native Roblox loading or performance.
6. **SCALE/ANCHOR AND LOCAL EDITOR POLICY:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/SCALE_ANCHOR_POLICY.md`, TEXT_MEASUREMENT.md, LOCAL_ENGINE_FEATURES.md and NATIVE_IMPORT_PRESERVATION.md. Every authored GUI requires an explicit finite 0..1 AnchorPoint. Position offsets are forbidden. Offset sizes require a direct scale-sized container and explicit size reason. Use built-in ui_transfer action geometry and RESPONSIVE_GEOMETRY.md for equations, aspect/SizeConstraint calculations, contain/cover and reflow feasibility; actual combined layout constraints still need native measurement. Use the lightweight Python `local-ui` MCP bridge, focused editor tools and file-only `save_png`; no per-chat Node renderer, automatic startup, browser polling or base64 dumping. Preserve full native hierarchy, typed properties, exact image bytes and mappings; unsupported data blocks conversion rather than flattening. Pending images remain actual blank native image instances with exact Open Cloud mappings; no upload without approval.
7. **CAPTURE RESOURCES:** `save_png` defaults to native CPU Skia with on-demand image decoding and release after the last consumer. Metadata, font/variable lists and tool discovery start no renderer. There are no fixed free-RAM reserves, Windows allocation caps or custom V8 heap caps; optimize allocations and measure the actual workload instead of reinstating limits. Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/LOCAL_CAPTURE_MEMORY.md` for exact backend coverage and before/after evidence. Unsupported render data retains the full backend explicitly; never strip properties or start a second service to reduce memory or bypass a hold. Existing chats must reread the current resource policy before their next local UI action.
8. **NATIVE/IMAGE/TEXT TOOL HANDOFF:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/LOCAL_NATIVE_WORKFLOW.md` for native editable projection, standalone ZIP/plugin, exact blank-image publication/stamping and native text measurement. Authorized isolated tests mount only their own StarterGui collector with imported scripts disabled. Reconcile existing approved image IDs; new creates require human approval and their durable operation journal. Remeasure changed font/content/boxes; stale metrics and uncompiled projection edits block packaging. Data equality, visible native pixels and actual button behavior need distinct evidence.
9. **VISIBLE CHECK BEFORE IMPORT:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/VISUAL_CHECKUP.md` and PRECISION_REVIEW.md. Run `compare_ui` against the exact approved frame/state at the current revision, inspect the side-by-side/overlay/heatmap and repair differences before import preparation. Sizing outlines/ticks stay outside the artwork, using PNG pixels and 0..1 scale; studs require actual world/canvas calibration. `inspect_ui_pixels` reads exact saved PNG samples without rendering. Partial crops, stale captures and mismatched states cannot approve a frame. Pixel metrics never substitute for human review, native comparison or button proof. For explicitly requested new artwork use the actual `roblox-ui-art-generation` skill and `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/UI_IMAGE_GENERATION.md`: specify each asset's measured size, consumers, alpha silhouette, material/style specification, and scaling contract, then inspect it. Reuse existing artwork first; updating a skill never authorizes new image generation.
10. **ROBLOX UI MODE AND STAGE FIRST:** For a NEW DESIGN, build the measured schematic and actual editable local design for review; the legacy in-game interface is not the design target. Stages 2/3 are isolated design work only: no Studio GUI writes, live UI/configuration edits or runtime scripts. Existing-instance preservation applies to REPAIR/approved TRANSFER, not to copying legacy UI into a requested new design. Read the project's `docs/UI_WORK_STAGE.md` when present. Required sequence: scope/mode -> complete schematic -> editable local design review -> disabled local candidate -> authorized native transfer -> native comparison -> real input proof. Do not jump stages or substitute documentation for the requested visible design.
11. **COMPACT SCHEMATICS:** Read `C:/Users/jbrah/Documents/ChatGPT/Luau Learning/engineering-kit/docs/FIGMA_SCHEMATIC_CATALOG.md`. The canonical renderer produces a bounded 2048 x 1240 tagged overview plus complete searchable HTML/JSON instance records and a Figma overview model. Every visual/support/helper instance retains stable tags, hierarchy/properties/assets/states and explicit Figma mappings or pending status. No giant property-table images; use concise editable callouts/annotations and paginated details. Tags stay outside game data. The actual editable local design screen remains a separate required output.
12. **MOBILE TOUCH CONTROL SAFE AREAS & CORE INSET PROTECTION (RULE-047):**
   - When building UI, interactive elements (`ImageButton`, `TextButton`, sliders, toggles) MUST NOT be placed inside core insets or collide with native mobile touch control zones:
     - **Bottom-Left Movement Thumbstick Zone**: Region `X: [0.0, 0.35]`, `Y: [0.55, 1.0]` (approx 0 to 260px from left, 220px from bottom) is strictly reserved for the mobile dynamic thumbstick / D-Pad.
     - **Bottom-Right Jump & Action Button Zone**: Region `X: [0.70, 1.0]`, `Y: [0.60, 1.0]` (approx 160px from right, 200px from bottom) is strictly reserved for the mobile jump button and contextual action buttons.
     - Placing interactive buttons in these zones causes severe touch contention (player tries to walk or jump and taps game UI, or tapping UI blocks movement).
     - **Safe Layout Zones for Mobile HUDs**:
       - Hotbars / Health / Mana: Center-Bottom (`X: 0.35 to 0.70`, Bottom-aligned).
       - Menu / Settings / Minimap toggles: Top Rails / Top Corners (with TopBar safe inset padding).
     - **Mandatory Safe Insets**:
       - Use `ScreenGui.ScreenInsets = Enum.ScreenInsets.DeviceSafeInsets` (or `Enum.ScreenInsets.CoreWidgets`) for all interactive HUDs. Never use uncompensated `IgnoreGuiInset = true` or `ScreenInsets.None` on interactive screens.
     - **Modal Suppression**:
       - If a blocking full-screen menu or dialogue modal covers the screen, it MUST disable mobile player controls cleanly via `PlayerModule:GetControls():Disable()` on mount and re-enable via `PlayerModule:GetControls():Enable()` on dismiss.
<!-- /unified-engineering-kit-cortex-20261103 -->
