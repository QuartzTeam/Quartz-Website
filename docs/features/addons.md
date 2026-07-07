# Addons

Extend Quartz with community addons — self-contained plugins that can add their own settings pages, stat panels, and text tags on top of everything Quartz already does. Addons are precompiled, so you just drop a file in and Quartz loads it; nothing is compiled on your machine.

## Where to find it

Open the Quartz menu in-game and pick **Addons** from the sidebar. Every addon you have installed is listed there, and that is where you add, reload, and remove them.

## Installing an addon

Addon files use the `.qaddon` extension (a plain `.dll` works too). There are two ways to install one:

- **Drop it in the folder** — put the file in `UserData/Quartz/Addons`, then press **Reload Addons**. The **Open Folder** button jumps straight to that folder.
- **Add Addon** — pick the `.qaddon` or `.dll` through a file browser; Quartz copies it into the folder and reloads for you.

Quartz loads every addon at launch, so once a file is in the folder it comes back automatically next time you play.

!!! note
    Only precompiled `.qaddon` and `.dll` files load. Loose source files in the folder are ignored.

## Managing addons

Each installed addon gets a row on the **Addons** page showing its name, version, and author:

- **Enable / disable** — the toggle on each row turns an addon on or off. A disabled addon stays installed but does not load.
- **Reload Addons** — unloads everything, re-scans the folder from disk, and rebuilds the list. Use it after adding or updating a file, without restarting the game.
- **Remove** — deletes the addon's file and its saved settings from disk. It asks once to confirm before deleting, and it cannot be undone.

If an addon fails to load, its row shows the error rather than taking the rest of Quartz down with it.

!!! warning
    An addon runs as part of Quartz and has the same access to the game that Quartz does. Only install addons from people you trust.

## Addon pages

An addon can register its own settings page. When it does, that page appears under **Addons** in the sidebar next to the built-in ones, so an addon's options live in the same menu as everything else. Addons can also add [Panels](panels.md) stats and text tags for use in your overlays.

## Writing an addon

Addons are built against the **QuartzAddon SDK** — a reference assembly (`QuartzAddon.dll`) published in the [Quartz repository](https://github.com/PrismMods/Quartz) under `sdk/`, alongside a project `.props` file and a short guide. You reference the SDK, subclass the addon base type, and build; the result is a `.qaddon` you drop into `UserData/Quartz/Addons`. Because it compiles against Quartz's public surface, the same `.qaddon` runs on both the MelonLoader and UnityModManager builds.

Through the SDK an addon can log messages, save its own settings, register [Panels](panels.md) stats and text tags, add settings pages, and patch the game — the same tools Quartz's own features are built on.
