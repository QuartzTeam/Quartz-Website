# Effect Remover

Strips distracting visual effects out of a level, for practicing or recording without flashing, shaking, or heavy filters getting in the way.

## Where to find it

Open the Quartz menu in-game and pick **Visuals → Effect Remover** from the sidebar.

## Two modes

- **Simple** — turns off entire effect categories at runtime without touching the chart: **Disable Filters** (Grayscale, Arcade, etc.), **Disable Advanced Filter**, **Disable Bloom**, **Disable Flash**, **Disable Hall of Mirrors**, **Disable Screen Shake**, and **Max Tile Movements** to cap how far a single Move Track event can shove tiles.
- **Enhanced** — strips the selected effect *events* out of the chart itself as it loads, event type by event type: filters, camera moves/zoom, particles, hit/hold sounds, track color/position/movement/animation, planet orbit/radius/scale, frame-rate events, DLC vs non-DLC events, and more, each toggled independently (with a **Toggle All** shortcut per category). Reload the level after changing these to apply them.

!!! warning "Enhanced mode blocks saving"
    While Enhanced is stripping events, the editor is holding a modified copy of the level — saving would overwrite your original chart with the stripped version. Saving is blocked and the editor's save buttons are disabled for as long as Enhanced is on, unless you turn on **Allow Saving in Editor** (off by default) — with it on, saving really does overwrite the file, and the removed effects are gone for good. Turn Enhanced off and reload the level to edit and save it normally.

## Other options

- **Decoration Types** — appears once **Decoration** is on. Choose exactly what gets removed: **Planet**, **Tiles**, **Image**, **Text**, **Particles**, and **Judgement Limit (Fail Hitbox)** (decorations whose hitbox can fail your run), each toggled independently with a **Toggle All** shortcut.
- **Remove All Decorations** — when off, keeps decorations that hit/miss judgement events reference; when on, removes every decoration of the enabled types regardless.
- **Turn off Tutorial Background Patterns** — also hides the default background's pulsing tiled pattern (this is always removed automatically once Background removal is on).
- **Limit 'Track Opacity' Values to 100%** — clamps opacity events that were authored above 100%.
