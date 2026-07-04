# Editor

Small quality-of-life additions to the level editor's inspector and tile selection.

## Where to find it

Open the Quartz menu in-game and go to the **Editor** tab.

## Highlights

- **Horizontal Properties** — lays each inspector property out as "label [field]" on one row, instead of stacking the label above the field. Affects the in-game level editor's inspector, not this settings window.
- **Selected Tile Readout** — shows a live readout on one of the selected tiles: total **angle** (in degrees), **beats** (angle ÷ 180), tile **count**, and **duration** in seconds.
    - **Prevent the last tile from being counted in timing calculation** matches the Tulttak mod's behavior, leaving the last selected tile out of the angle/beats/duration totals.
- **BGA Mod** — hides every tile and planet while the level plays, so only the background shows, for recording a background animation to composite gameplay over later. Only kicks in during play-test or actual gameplay; the editor's edit view is unaffected.
    - **Disable tile decorations** / **Disable planet decorations** additionally hide decorations attached to tiles or planets while BGA Mod is active. Background- and camera-anchored decorations stay visible either way.

!!! note
    [Nostalgia](nostalgia.md) adds several more editor-specific toggles (legacy button positions/designs, old auto-play behavior, and more) alongside these, also on the Editor tab.
