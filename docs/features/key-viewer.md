# Key Viewer

An on-screen key display with per-key press counters, KPS (keys per second), and a total counter — built in a free-form layout editor where every element is dragged, resized, and styled directly on a canvas. It speaks DM Note's preset format natively, so existing DM Note presets import losslessly and your layouts export right back out.

## Where to find it

Open the Quartz menu in-game and select **Overlay → Key Viewer** from the sidebar.

## The layout editor

The editor is a zoomable canvas with the live key viewer on it:

- **Move and arrange** — drag elements anywhere, resize from the handles, and multi-select with a marquee or ++shift++-click. Dragging snaps to the grid and to neighbouring elements, with alignment guides while you move; holding ++shift++ locks the drag to one axis.
- **Canvas navigation** — scroll to pan, or drag with the middle or right mouse button. Press ++plus++ and ++minus++ to zoom, ++0++ for actual size, and **Fit** to frame the whole layout. Arrow keys nudge the selection; ++delete++ removes it.
- **Add elements** — **Add Key**, **Add Stat** (KPS, average and max KPS, total), and **Add Graph** (a live KPS line or bar graph).
- **Built-in styles** — the **Style** selector seeds a tab from a preset layout, from small key rows up to a full **108 Keys** keyboard, as a starting point to rearrange and restyle.
- **Inspector** — the panel beside the canvas styles whatever is selected, in tabs: **Element** (position, size, binding), **Rain**, **Counter**, **Style**, and **Settings**. Select several elements to edit their shared properties at once.
- **Per-key input** — **Rebind Key** captures a new binding with a click, **Set Ghost Key** gives an element a secondary key for ghost rain, **Count Toward Total** and **Hidden** are per-element.
- **Tabs** — keep several layouts side by side (each with its own **Tab Name**) and switch between them.
- **Undo/redo** — every edit is undoable; held nudges coalesce into a single step.

!!! note "Coming from an older Quartz"
    The previous Simple and DM Note modes are gone. Your existing setup — either mode — is converted into an editor layout automatically the first time this version runs, and **Migrate** can re-run that conversion on demand.

## Rain

- **Note Rain** — streaks rise from a key while it's held, with speed, track height, fade, and reverse direction controls.
- **Ghost rain** — a separate streak for an element's ghost key, solid or dashed/dotted with adjustable dot and gap length.
- **Delayed notes** — optionally hold back very short presses so quick taps still draw a readable streak.

## DM Note compatibility

- **Import** — load a DM Note preset JSON file straight into a layout tab, including any custom CSS the preset embeds.
- **Export** / **Export (Zeroed)** — write the current layout back out as a DM Note preset, with counts kept or reset; **Open Presets Folder** jumps to where they live.
- **Custom CSS** — layer a DM Note custom CSS file over the layout. Quartz ships its own CSS engine for this, so existing DM Note skins keep working.
- **KPS graph** — skins can declare a live line or bar graph through the CSS `--graph-*` variables. The graph spans the full time window set by `--graph-speed` (500–5000 ms).

## Key Limiter sync

**Sync Keys to Key Limiter** overwrites [Key Limiter](key-limiter.md)'s allowed keys with the keys shown in the viewer, and keeps them matched when you rebind keys or switch layouts. Keys the limiter blocks still render as full presses in the viewer. The same toggle sits on the Key Limiter page too, so you can flip it from either place.
