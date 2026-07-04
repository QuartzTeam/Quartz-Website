# Restriction

Two independent ways to force a run to end early based on how you're playing, for practicing under stricter conditions than the game enforces by default.

## Where to find it

Open the Quartz menu in-game, go to the **Gameplay** tab. Restriction has two sections there: **Judgement Restriction** and **Death Limit**.

## Judgement Restriction

Instantly fails the run the moment a hit breaks a rule you choose:

- **Minimum Accuracy** — fail if a single hit's accuracy drops below a threshold.
- **Pure Perfect Only** — anything less than a Perfect fails the run.
- **X-Perfect Only** — same, but requires X-Perfect specifically (needs the XPerfect mod installed).
- **No Too Early** — fail on a Too Early judgement.
- **Custom Judgements** — pick exactly which judgements are allowed; anything else fails.

The fail screen shows a message you can customize, with `{judgement}` standing in for whichever judgement broke the run.

## Death Limit

Fails the run once too many misses or overloads pile up, instead of on the first one:

- **Limit Misses** / **Max Misses** and **Limit Overloads** / **Max Overloads** — cap each independently.
- **Limit Deaths (Miss + Overload)** / **Max Deaths** — cap the combined total instead.

Pairs well with **No Fail** — since No Fail keeps the run going through misses, Death Limit gives you a hard stop instead of playing out the whole chart.
