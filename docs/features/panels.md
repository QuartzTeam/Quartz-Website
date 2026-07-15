# Panels

Build your own stat overlays: create named panels, add any stat Quartz tracks to them, and arrange the panels anywhere on screen.

## Where to find it

Open the Quartz menu in-game and pick **Overlay → Panels** from the sidebar.

## Highlights

- **Create Panel** — makes a new empty panel; name it, then use **+ Add Stat** to pick from every stat Quartz exposes (accuracy, X-accuracy, KPS, Auto KPS, BPM (current/target), progress, timing scale, holds, checkpoints, attempt/best/total-attempts, map time, music time, pitch, FPS, XPerfect counts, or a custom **Text** stat you write yourself).
- **Anchor** — pins a panel to one of nine screen positions (corners, edges, center); position, font size, line spacing, and prefix are all per-panel.
- **Layer order** — when panels overlap, drag a panel's row in the list to change which one draws on top.
- **Background Panel** — an optional fill behind a panel's text, with its own color and opacity.
- **Per-stat color** — tint an individual stat's value. Stats that run over a range — accuracy, X-accuracy, progress, KPS, BPM, map/music time, best — take a gradient across that range, with an optional override color for a perfect (100%) result. The rest (holds, checkpoints, attempts, FPS, pitch, XPerfect counts, **Text**) have no range to blend along, so they take a single flat color instead.
- **Localize Stat Labels** — off keeps a panel's stat labels in English (X-Acc, Max X-Acc, …) regardless of the UI language; on follows it.

!!! tip
    Drag panels into place with the **Reorganize** button at the top of the Overlay tab, same as any other overlay.

!!! note
    Past 10 panels in one place, Quartz shows a reminder that having that many can affect performance. It's just a heads-up — you can keep adding panels past it.

!!! tip "Steadying the FPS readout"
    The **FPS** stat refreshes every frame by default, so the number can flicker. The **FPS Update Interval** slider on the **Overlay → General** page (0–2 seconds) holds each value for the chosen time before it updates, so the counter ticks slower and stays readable. Leave it at 0 to keep updating every frame.
