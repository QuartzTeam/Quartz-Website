# Progress Bar

A bar showing how far into the level you are, in one of two shapes, with a customizable fill, outline, and corner rounding.

## Where to find it

Open the Quartz menu in-game and pick **Overlay → Progress Bar** from the sidebar.

## Styles

**Style** picks the shape of the bar. The size settings change to match whichever one you choose.

| Style | What it looks like |
|-------|--------------------|
| **Modern** | A floating rounded bar, placed by **Width**, **Height**, **Top Offset**, and **Corner Rounding**. |
| **Line** | A thin strip stretched edge to edge across the screen, with its own **Line Thickness** and a **Screen Edge** of **Top** or **Bottom**. |

Colors, the gradient, and the outline carry across both.

## Highlights

- **Fill Color** or **Fill Color Gradient** — a flat fill color, or a multi-stop gradient that shifts as the run progresses from 0% to 100%.
- **Background Color** and **Outline Color** / **Outline Thickness** for the rest of the bar.
- **Corner Rounding**, **Height**, **Width**, and **Top Offset** for the bar's shape and placement.
- **Pre-fill to Start Position** — when a run starts mid-chart (from a checkpoint, or play-testing in the editor), the bar starts already filled to that point instead of empty.
- **Smooth Fill (Map Time)** — advance the bar by the chart's elapsed time instead of tiles completed, so the fill moves continuously every frame rather than stepping forward on each tile.
