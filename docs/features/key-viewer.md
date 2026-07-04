# Key Viewer

An on-screen key grid with per-key press counters, KPS (keys per second), and a total counter. Drag it anywhere, style every part of it, or import an existing DM Note preset.

## Where to find it

Open the Quartz menu in-game, go to the **Overlay** tab, and open the **Key Viewer** section.

## Highlights

- **Key grid** — shows the keys you play with, each with its own press counter. Captions are derived from the key by default and can be overridden per key.
- **Rain** — streaks rise from a key while it's held. Width can match each key or be set explicitly.
- **Per-key styling** — give individual keys their own colors and font sizes, or copy one key's style onto all others.
- **Per-key KPS** — each key box can show that key's presses-per-second instead of its count.
- **Streamer mode** — hide the KPS and Total stat boxes entirely for a cleaner capture.
- **Foot pedal** — add a separate foot-pedal element you can drag independently.
- **Show outside gameplay** — keep the key viewer visible in menus.

## DM Note compatibility

Quartz can import DM Note presets directly:

- **Preset import** — select a DM Note preset JSON file.
- **Custom CSS** — layer a DM Note custom CSS file over the preset. Quartz ships its own CSS engine for this, so existing DM Note skins keep working.
- **Clear Preset** — revert to Quartz's own styling.

## Key Limiter sync

**Sync Keys to Key Limiter** overwrites [Key Limiter](key-limiter.md)'s allowed keys with the keys shown in the viewer, and keeps them matched when you rebind keys or switch styles.
