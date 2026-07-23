# Practice Difficulty

Bind a key to a difficulty and a pitch, so you can drop a level to **Lenient** at half pitch to learn a section and snap back to **Strict** at full pitch to run it — without leaving the level or opening a menu.

## Where to find it

Open the Quartz menu in-game and pick **Gameplay → Practice Difficulty** from the sidebar. Turn on **Enable Practice Difficulty** to arm the key bindings.

## Key bindings

**Add Key** adds a binding, up to 16 of them. Each one is a collapsible row — **Key 1**, **Key 2** and so on — holding everything that key does:

- **Key** — click it, then press the key you want. Escape cancels.
- **Difficulty** — **Lenient**, **Normal**, or **Strict**.
- **Pitch** — the level pitch to set, from 1% to 1000%.
- **Applies Difficulty** and **Applies Pitch** — a key can do both, or just one. Turn **Applies Pitch** off for a key that only switches difficulty, and vice versa.
- **Remove** — deletes that binding.

Both land between attempts rather than in the middle of one. A difficulty you press mid-run is held until that attempt ends and applied before the next one starts, so the hit windows never change underneath you — press a key for the difficulty you're already on and the queued change is dropped instead. The pitch is written into the level's own **Pitch** setting exactly once, as if you had typed it into the level settings yourself, so the game picks it up on your next run — and you stay free to edit that field afterwards without Quartz overwriting it.

!!! note
    Pitch applies to levels that have a Pitch setting to write to — a custom level you're playing or editing. The difficulty side works anywhere.

## Indicator

An on-screen readout of what you're actually playing on.

- **Show Difficulty Readout** — draws the difficulty the game is really using, which the in-game selector doesn't always keep up to date. A change still waiting for the next attempt shows as an arrow, so `Strict → Lenient` means Lenient starts when this run ends.
- **Show Pitch** — puts the level's current pitch next to it.
- **Only While Playing** — hide the readout outside of a run.
- **Font Size** and **Text Color** for its look.
- **Reset Position** puts it back where it started.

!!! tip
    The readout moves like the other overlays: turn on **Reorganize** under **Overlay → General** and drag it wherever you want it.
