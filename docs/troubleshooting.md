# Troubleshooting

## Quartz does not appear

- Confirm the zip matches your loader: `Quartz.zip` for MelonLoader, `QuartzUmm.zip` for UnityModManager.
- Confirm the loader itself is installed for A Dance of Fire and Ice.
- Restart the game after installing Quartz.

## The game starts but settings are missing

Open the in-game Quartz menu with the mod's keybind (default: `ALT + K`). For UMM installs, Quartz settings live in the Quartz menu rather than inside the UMM panel.

## The game keeps loading an old version

Restart Steam and confirm only one Quartz package is installed. Remove any leftover `Koren.dll` from older installs — Quartz migrates old Koren data automatically, but the old DLL itself should not stay loaded.

## The in-app updater reports a verification failure

Quartz checks a downloaded update's checksum before installing it, so a corrupted or interrupted download won't be applied. Just try updating again; if it keeps failing, download the release manually from the releases page below and install it the normal way.

## A download link is blocked

Use the latest release page directly:

```text
https://github.com/PrismMods/Quartz/releases/latest
```

## Still stuck?

Ask in the [Discord](https://discord.gg/mAzAghu5Xq) or open an issue on [GitHub](https://github.com/PrismMods/Quartz/issues).
