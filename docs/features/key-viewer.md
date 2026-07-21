# Key Viewer

An on-screen key display with per-key press counters, KPS (keys per second), and a total counter — built in a free-form layout editor where every element is dragged, resized, and styled directly on a canvas. It speaks DM Note's preset format natively, so existing DM Note presets import losslessly, and it has its own `.qkv` format for carrying a whole setup between Quartz installs.

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
- **Labels and counters, per element** — **Show Label** turns an element's label off so the counter spreads over the whole box, leaving the box, border, and rain untouched. **Label While Pressed (empty = same)** gives a key a second label shown only while it's held. **Show Counter While Pressing** (on the **Counter** tab) hides the counter for as long as the key is down and brings it back on release, keeping its space reserved so nothing shifts.
- **Tabs** — keep several layouts side by side (each with its own **Tab Name**) and switch between them.
- **Undo/redo** — every edit is undoable; held nudges coalesce into a single step.

!!! note "Coming from an older Quartz"
    The previous Simple and DM Note modes are gone. Your existing setup — either mode — is converted into an editor layout automatically the first time this version runs, and **Migrate** can re-run that conversion on demand.

## Rain

- **Note Rain** — streaks rise from a key while it's held, with speed, track height, fade, and reverse direction controls.
- **Ghost rain** — a separate streak for an element's ghost key, solid or dashed/dotted with adjustable dot and gap length.
- **Delayed notes** — optionally hold back very short presses so quick taps still draw a readable streak.

## Key input

- **Independent Key Input** — read presses as keyboard events carrying the moment they happened, rather than checking the keyboard once per frame. A tap too quick to fall inside a frame still registers, and a note keeps the length you actually held it for. Quartz falls back to the per-frame reading on its own whenever the key hook isn't running or the game window isn't focused, so nothing stops working if it can't be used.
- **Minimum Lit Time** — hold a key lit for at least this long, so a very short tap is still visible instead of flashing by. Set it to 0 to light keys for exactly as long as they're held.

## Hiding your tapping pattern

**This Tabub Is Mine** stops anyone watching from reading your tapping pattern off the key viewer. Past a point in the level, the note rain stops and a picture drops over the boxes, covering the part of a run where the pattern is worth copying.

- **Hide Tabub From** — how far into the level the picture takes over. It fades in over the second leading up to that point and fades back out over the level's last second.
- **Custom Tabub Image** — pick your own picture. **Use Built-in Image** goes back to the one that ships with the mod.
- **Tabub Image Size** scales the picture, and you drag it into place in Reorganize mode like any other overlay. **Reset Tabub Position** puts it back.

Presses keep counting underneath the whole time, so nothing is lost from your counters, and everything returns to normal on the next attempt.

## Saving and sharing layouts

- **Import** — load a Quartz `.qkv` or a DM Note preset JSON straight into a layout tab, including any custom CSS the preset embeds. **Open Presets Folder** jumps to where they live.
- **Export .qkv (Quartz)** — Quartz's own format: the layout *and* every Key Viewer setting, including your press counts. This is the one to send someone else running Quartz, or to carry a setup to another install.
- **Export .json (DM Note)** — a plain DM Note preset, for sharing with DM Note users. Anything DM Note has no concept of — ghost keys, pressed labels, per-key KPS, foot-row markers, note shadows, press scaling, and the rest — can't come along, and the export names exactly what it left behind rather than dropping it quietly.
- **Custom CSS** — layer a DM Note custom CSS file over the layout. Quartz ships its own CSS engine for this, so existing DM Note skins keep working.
- **KPS graph** — skins can declare a live line or bar graph through the CSS `--graph-*` variables. The graph spans the full time window set by `--graph-speed` (500–5000 ms).

## Key Limiter sync

**Sync Keys to Key Limiter** overwrites [Key Limiter](key-limiter.md)'s allowed keys with the keys shown in the viewer, and keeps them matched when you rebind keys or switch layouts. Keys the limiter blocks still render as full presses in the viewer. The same toggle sits on the Key Limiter page too, so you can flip it from either place.
