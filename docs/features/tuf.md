# TUF

Browse [The Universal Forums](https://tuforums.com/) community level database without leaving A Dance of Fire and Ice: search levels and level packs, download a level in one click, and play it straight away in the editor.

## Where to find it

Open the Quartz menu in-game and select **TUF** from the sidebar. It has three pages: **Levels**, **Packs**, and **Settings**.

## Levels

A searchable, endlessly scrolling list of TUF levels. Each card shows the level's ID, difficulty, song, artist, creator, clears, and likes. With **Level Previews** on, a blurred thumbnail from the level's video sits behind each card.

- **Search** — filter by song, artist, or creator. Results update as you type.
- **Sorting** — **Recent**, **Difficulty**, **Clears**, or **Likes**, each ascending or descending via the arrow chip.
- **Difficulty range** — a P→G→U gradient bar; drag the two handles to bound the difficulty range.
- **Quantum** — an opt-in second range bar for quantum difficulties. Turn it off and it folds away entirely.
- **Special** — a flyout with **Unranked**, **Censored**, and **Impossible** checkboxes for including special-difficulty levels.
- **Installed** — switches the list to your own library; see [Your library](#your-library) below.
- Scrolling near the bottom loads the next page automatically.

### Downloading and playing

The button on each card walks through the whole flow: **Download** fetches and unpacks the level, then turns into **Load**, which opens the chart directly in the editor — no manual file handling. If an archive contains several playable charts, a chooser lists them so you can pick.

Some cards are the game's own built-in levels rather than downloads. These show **Play**, which opens the real in-game level directly, or **Buy DLC** — opening the store page — when the chart belongs to DLC you don't own.

!!! note
    Downloads come only from TUF's own servers over HTTPS, and archives are checked during extraction — unsafe entries are rejected. Downloaded levels are cached, so loading a level again is instant.

!!! tip
    If the editor has unsaved changes, Quartz refuses to replace them — save or discard first, then load the TUF level again.

Levels can be big — a heavily decorated one runs to hundreds of megabytes of backgrounds — so there's no fixed size limit. Quartz checks the free space on whichever drive your library lives on instead, and if a level genuinely won't fit it says how much it needs and how much you have before downloading anything.

## Your library

The **Installed** chip on the Levels page turns the list into everything you've downloaded, newest first. It reads a local index rather than the network, so it works with no connection, and search, sorting, and the difficulty filters all keep working over your own levels.

- **Installed badge** — levels you already have are marked wherever they appear, including in search results and inside packs.
- **Delete** — the trash icon removes a level from disk, so clearing out maps doesn't mean digging through folders. It takes two clicks: the first arms the button and turns it red, the second deletes. Anything you remove can be downloaded again later.
- Levels downloaded before Quartz kept this index still show up. With no stored details they show just their ID (`Level #5350`) until they turn up in a search again, which fills in the song and artist.

## Packs

Community level packs, in their own sub-tab.

- **Pack list** — search packs by name and sort by **Recent**, **Name**, or **Levels**. Each card shows the pack's name, level count, owner, favorites, and a preview of its first songs.
- **Open a pack** — click a card to see its levels. Packs keep their on-site **folder tree**: folders are collapsible rows showing how many levels they hold, with their contents indented beneath.
- **Level sorting** — inside a pack, switch between **Pack Order** (the curator's exact layout), **Difficulty**, and **Clears**. Sorting keeps the folder tree intact: levels reorder within each folder while the folders themselves stay in place.
- Levels in a pack download and play exactly like the Levels page, and share the same download cache.

## Settings

Controls for the browser's appearance and where your downloaded levels live. The page shows the folder currently in use at the top, under **Level Library**.

- **Level Previews** — show the blurred thumbnail behind each level and pack card, taken from the level's YouTube video (a pack falls back to its own icon). On by default; turn it off to skip the thumbnail downloads entirely.
- **Open Levels Folder** — opens the library actually in use in your file browser, which isn't the default one once you've moved it.
- **Change Levels Folder** — pick an empty folder to keep levels in, on a roomier drive for instance. Levels you already downloaded are moved there for you, with progress shown on the page.
- **Use the Default Folder** — moves everything back into Quartz's own folder inside the mod directory.
- **Link to TUFHelperLite Directories** — if you also run the TUFHelperLite mod, save downloaded levels straight into its `Downloads` folder (each named `tuf-<id>`) so both mods share one level library. This setting only appears when TUFHelperLite is actually installed; Quartz looks for it in the game's `UMMMods` folder first, then `Mods`.

!!! note "The folder has to be empty"
    Quartz manages everything inside the levels folder, so it won't take over one that already holds your own files, and it won't accept a whole drive. If a pick is rejected, the page says why.

!!! note
    The TUFHelperLite link wins over a folder you picked: while it's on, levels install into that mod's folder and **Change Levels Folder** is declined. Turn the link off first if you want your own folder back.

Moving a large library takes a moment and runs in the background, so the game keeps responding. Each level is recorded as it lands, so if a move is interrupted every level stays loadable wherever it actually ended up.
