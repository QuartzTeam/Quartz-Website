# Quartz Documentation

Quartz is an all-in-one mod for **A Dance of Fire and Ice**. It bundles gameplay overlays, editor tools, and visual tweaks into a single in-game menu.

<div class="grid cards" markdown>

- **[Install](install.md)** — get Quartz running with MelonLoader or UnityModManager.
- **[Troubleshooting](troubleshooting.md)** — fix the most common setup problems.
- **[Features](features/index.md)** — what Quartz can do, one page per feature.

</div>

## Choosing a loader

Every release ships two zips:

| Package | Loader | When to pick it |
|---------|--------|-----------------|
| `Quartz.zip` | [MelonLoader](https://melonwiki.xyz/) | **Recommended** for most players. |
| `QuartzUmm.zip` | [UnityModManager](https://www.nexusmods.com/site/mods/21) | Only if your ADOFAI setup already runs UMM. |

Both packages expose the same in-game Quartz menu and settings once loaded.

!!! note
    The UMM build does **not** use UMM's IMGUI settings panel — settings live in Quartz's own menu, opened with the mod's keybind.

## Settings

Menu-wide options live on the **Settings** page, separate from the individual feature tabs.

- **Block game inputs while menu is open** — on by default. While the Quartz menu is up, the game underneath ignores input entirely, so you can't accidentally restart, pause, or land hits on the level behind the panel. Autoplay is exempt, so a run left playing behind the menu keeps going.

## Language

Quartz's menu ships in English, Korean, and Simplified Chinese. Switch from the **Language** dropdown on the **Settings** page — each option is listed by its native name (English, 한국어, 简体中文). Chinese text stays readable even when the font you've picked only covers Korean or Latin, because Quartz falls back to the game's own CJK font for the characters your font is missing.

Translations keep themselves up to date. The languages bundled with your build load immediately, so the menu never waits on the network; in the background Quartz then checks the community translation repo, [Quartz-i18n](https://github.com/PrismMods/Quartz-i18n), and quietly folds in anything newer. A corrected Korean string reaches you without waiting for a Quartz release, and a language added to that repo shows up in the dropdown on its own. **Reload** forces the check immediately and re-applies the result.

!!! note
    If the check can't run — no connection, or GitHub unreachable — the bundled translations simply stay in place and nothing changes. The zips always carry a full set, so Quartz is fully usable offline.

!!! tip "Translating Quartz"
    Translations are community-maintained in [Quartz-i18n](https://github.com/PrismMods/Quartz-i18n) rather than in the mod repo, so improving a language — or adding a new one — doesn't mean waiting on a Quartz build.

## Links

- [Latest build](https://github.com/PrismMods/Quartz/releases/tag/latest-alpha)
- [All releases](https://github.com/PrismMods/Quartz/releases)
- [GitHub repository](https://github.com/PrismMods/Quartz)
- [Discord](https://discord.gg/mAzAghu5Xq)
