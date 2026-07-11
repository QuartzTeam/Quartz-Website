# Optimizer

Performance toggles for smoother frame times and faster load-to-load cycles.

## Where to find it

Open the Quartz menu in-game, go to the **Tweaks** tab, and open the **Optimizer** section.

## Highlights

- **Smooth GC** — holds off garbage collection while a level is playing, so a collection pause can't land mid-run and nudge your timing, then lets it catch up once the run ends. On very long runs, collection can resume automatically before the run ends rather than risk running out of memory. Best paired with **Clean Heap On Load**.
- **Fix Game Memory Leaks** — patches known memory leaks in A Dance of Fire and Ice itself: decoration render textures and materials that survive level unloads, frame-rate-effect screen buffers, workshop thumbnails, practice-mode waveforms, and internal caches that only ever grow. Cuts RAM creep during long sessions.
- **Clean Heap On Load** — runs a collection on every scene load, so each run starts from a clean heap. The load screen already hitches, so this collection is effectively free.
- **Boost Process Priority** — asks the OS for more consistent CPU time (Above Normal priority). Takes effect on Windows; ignored where the system doesn't allow it, usually macOS/Linux.
- **Run In Background** — keeps the game running at full speed when its window loses focus, so alt-tabbing mid-run or mid-practice doesn't stall it.
- **Lossy Texture Compression** — compresses custom textures loaded from disk to cut their memory use roughly 4–8x, with a small visual quality cost. Applies to textures loaded after it's turned on.
- **Fast Bloom** — forces the game's bloom post-process onto its cheaper, lower-quality path while bloom is active. Targets real GPU work and can improve FPS on bloom-heavy levels, at the cost of softer, less precise bloom.
- **Skip No-Op Screen Filters** — skips full-screen shader passes when their current values are visually identical to doing nothing, replacing them with a plain copy. Removes real render work without changing any existing game setting.
