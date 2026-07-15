# Calibration

Tools for dialing in your input offset in A Dance of Fire and Ice (ADOFAI), ported from Jongye0l's BetterCalibration. It turns a wrong offset into something you can spot and fix from normal play — no more guessing in the calibration screen.

## Where to find it

Open the Quartz menu in-game and pick **Gameplay → Calibration** from the sidebar.

## Highlights

- **Show Popup on Death** — when you die, a prompt asks whether to change your input offset to the value suggested by that run's average timing. One click applies it, so you can calibrate against real levels instead of the calibration screen.
- **Detailed Calibration Display** — the game's own calibration screen also shows the average, maximum, and minimum of your taps, so you can see how consistent you are, not just the final number.
- **Decimal (Sub-Millisecond) Offset** — lets the input offset hold decimals instead of whole milliseconds. In the game's pause-menu offset control, hold ++ctrl++ for .1 ms steps and ++ctrl+shift++ for .01 ms steps.

### Calibration song

- **Pitch** — speeds up or slows down the calibration song so you can practise calibrating at a tempo closer to what you actually play.
- **Repeat Song** — loops the calibration song a set number of times before it ends, giving you more taps per session.
- **Use Minimum Offset Value** — turn this on to set a **Minimum Value**; it fixes offsets that read smaller than they should once the calibration planet has gone a full loop around.

### Timing history

The **Timing History** list keeps your recent computed offsets, split into **Current Map** and **All Maps**. Each entry has an **Apply** button that sets it as your offset instantly.

!!! tip
    The on-death popup and the timing history read from the same per-run average, so a run where you consistently hit early or late gives a much more reliable suggestion than a run full of scattered misses.
