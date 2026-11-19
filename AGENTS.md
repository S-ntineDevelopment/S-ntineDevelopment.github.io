# Project instructions

<!-- engineering-skills-20261015 -->
## Skills and delivery expectations

Use [the shared engineering skill index](<C:/Users/jbrah/Documents/DeveloperTools/Cortex/docs/ENGINEERING_SKILLS.md>)
to select relevant skills, then read their actual SKILL.md files. Open only what
the task needs. Source editing, resource lifetime and verification skills also
apply to non-Roblox work; Luau/Roblox skills apply only to their relevant code.

Deliver the smallest clear, complete change, with affected callers, rejection
paths and cleanup finished. Preserve unrelated edits and product contracts. Extend
concrete existing owners; avoid unnecessary modules, generic layers, placeholders,
blanket protected calls, silent fallback data and fake success. Report actual
checks and remaining limitations; do not claim native/runtime proof from local checks.

<!-- calculated-native-ui-20261015 -->
## Native responsive UI

For Roblox UI, follow the [calculated responsive geometry and text rules](<C:/Users/jbrah/Documents/DeveloperTools/roUI/docs/UI_CREATION_RULESET.md#calculated-responsive-geometry-and-text>).
Calculate parent-relative UDim/UDim2 geometry and Vector2 anchors from the actual
parent and native properties. Use UIListLayout/UIGridLayout and UIPadding where
they own repeated placement and spacing. Size text containers correctly; use
bounded TextScaled with UITextSizeConstraint where suitable, or deliberate
wrapping/AutomaticSize for flowing content. Keep authored values in the existing
replicated configuration, apply inherited scale/insets once, and fix layout owners
instead of compensating offsets or shrinking text into broken bounds. Verify the
changed frame and relevant size/content extremes; do not repeat exhaustive device
sweeps without a concrete unresolved issue. Preserve unrelated product contracts.

<!-- reusable-native-ui-20261018 -->
## Reusable Roblox UI

For Roblox UI, follow [Reusable native components and tintable artwork](<C:/Users/jbrah/Documents/DeveloperTools/roUI/docs/UI_CREATION_RULESET.md#reusable-native-components-and-tintable-artwork>). Reuse white transparent symbols with ImageColor3; use native frames with UICorner/UIStroke only where the approved reference is flat, and otherwise cut the art from the reference or its clean plate, following [REFERENCE_MATCH.md](<C:/Users/jbrah/Documents/DeveloperTools/roUI/engineering-kit/docs/REFERENCE_MATCH.md>), which also gates every frame region by region against the reference; author reusable component templates and populate only necessary real content. Do not add colour-specific icon copies, baked tier numbers or invented filler rows.

## Shared engineering standard

The full Roblox/Luau standard (Cortex rules, roUI workflow, UI, input, performance) is
`C:/Users/jbrah/Documents/DeveloperTools/Cortex/docs/ENGINEERING_STANDARD.md`. Read the
sections that apply before Luau or UI work; Codex also loads a copy from `~/.codex/AGENTS.md`.
It used to be pasted here in full, which pushed this file past Codex's 32 KiB limit and
silently cut rules. The previous file is `docs/archive/instructions-2026-11-05/AGENTS.full.md`.

Always:
- Run `python C:/Users/jbrah/Documents/DeveloperTools/Cortex/cortex.py verify <changed path>` on changed
  Luau and fix everything it reports before calling it done.
- All animation enters one central client ModuleScript with its submodules as children;
  sizes, offsets, mappings and tuning live in the ReplicatedStorage configuration.
- Image buttons switch whole-state sprite-sheet cells (ImageRectOffset); never tween them,
  and keep hitboxes stationary.
- UI matches its approved reference 1:1 (`engineering-kit/docs/REFERENCE_MATCH.md` in Luau
  Learning); every GuiObject has an explicit AnchorPoint and a scale Position.
- Never upload assets, write to Studio or the saved place, or start Play without the user's
  go-ahead. Report exactly what was verified and what was not.
