# Key Limiter

Restricts which keyboard keys count as gameplay input, so stray presses on other keys can't register as hits.

## Where to find it

Open the Quartz menu in-game and pick **Gameplay → Key Limiter** from the sidebar.

## Highlights

- **Allowed Keys** — the list of keys that count while a level is playing. Use **Add / Remove Key** and press any key to toggle it in the list, or **Clear All** to start over. Mouse buttons always count and can't be restricted; menus and the editor are unaffected either way.
- **Profiles** — keep more than one key set (e.g. a 4-key and an 8-key layout) and switch between them with the profile dropdown, without rebuilding the list each time. **Add Profile** / **Remove Profile** manage the list; **Profile Name** renames the current one.

!!! note "Synced from Key Viewer"
    **Sync Keys to Key Limiter** — on this page as well as in the [Key Viewer](key-viewer.md) — hands the allowed-key list over to the keys shown in the viewer. While it's on the list here is managed automatically and editing it directly is disabled; turn it off from either place to take the keys back.

!!! tip "Looking for the menu input block?"
    **Block game inputs while menu is open** stops the game reacting to *any* input while the Quartz panel is up, not just the keys restricted here, so it lives on the [Settings](../index.md#settings) page rather than in this section.
