# Key Limiter

Restricts which keyboard keys count as gameplay input, so stray presses on other keys can't register as hits.

## Where to find it

Open the Quartz menu in-game, go to the **Gameplay** tab, and open the **Key Limiter** section.

## Highlights

- **Allowed Keys** — the list of keys that count while a level is playing. Use **Add / Remove Key** and press any key to toggle it in the list, or **Clear All** to start over. Mouse buttons always count and can't be restricted; menus and the editor are unaffected either way.
- **Profiles** — keep more than one key set (e.g. a 4-key and an 8-key layout) and switch between them with the profile dropdown, without rebuilding the list each time. **Add Profile** / **Remove Profile** manage the list; **Profile Name** renames the current one.

!!! note "Synced from Key Viewer"
    If [Key Viewer](key-viewer.md)'s **Sync Keys to Key Limiter** is on, the allowed-key list here is managed automatically from the keys shown in the viewer, and editing it directly is disabled until you turn that off.

!!! tip "Looking for the menu input block?"
    **Block game inputs while menu is open** stops the game reacting to *any* input while the Quartz panel is up, not just the keys restricted here, so it lives on the [Settings](../index.md#settings) page rather than in this section.
