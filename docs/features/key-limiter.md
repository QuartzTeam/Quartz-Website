# Key Limiter

Restricts which keyboard keys count as gameplay input, so stray presses on other keys can't register as hits.

## Where to find it

Open the Quartz menu in-game and go to the **Gameplay** tab. The **Menu** section sits at the top, with the **Key Limiter** section below it.

## Menu

- **Block game inputs while menu is open** — on by default. While the Quartz menu is up, the game underneath ignores the keyboard entirely, so you can't accidentally restart, pause, or land hits on the level behind the panel. Autoplay is exempt, so a run left playing behind the menu keeps going.

## Highlights

- **Allowed Keys** — the list of keys that count while a level is playing. Use **Add / Remove Key** and press any key to toggle it in the list, or **Clear All** to start over. Mouse buttons always count and can't be restricted; menus and the editor are unaffected either way.
- **Profiles** — keep more than one key set (e.g. a 4-key and an 8-key layout) and switch between them with the profile dropdown, without rebuilding the list each time. **Add Profile** / **Remove Profile** manage the list; **Profile Name** renames the current one.

!!! note "Synced from Key Viewer"
    If [Key Viewer](key-viewer.md)'s **Sync Keys to Key Limiter** is on, the allowed-key list here is managed automatically from the keys shown in the viewer, and editing it directly is disabled until you turn that off.
