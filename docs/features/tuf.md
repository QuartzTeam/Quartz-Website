# TUF

Browse [The Universal Forums](https://tuforums.com/) community level database without leaving A Dance of Fire and Ice: search levels and level packs, download a level in one click, and play it straight away in the editor.

## Where to find it

Open the Quartz menu in-game and select **TUF** from the sidebar. It has two pages: **Levels** and **Packs**.

## Levels

A searchable, endlessly scrolling list of TUF levels. Each card shows the level's ID, difficulty, song, artist, creator, clears, and likes.

- **Search** — filter by song, artist, or creator. Results update as you type.
- **Sorting** — **Recent**, **Difficulty**, **Clears**, or **Likes**, each ascending or descending via the arrow chip.
- **Difficulty range** — a P→G→U gradient bar; drag the two handles to bound the difficulty range.
- **Quantum** — an opt-in second range bar for quantum difficulties. Turn it off and it folds away entirely.
- **Special** — a flyout with **Unranked**, **Censored**, and **Impossible** checkboxes for including special-difficulty levels.
- Scrolling near the bottom loads the next page automatically.

### Downloading and playing

The button on each card walks through the whole flow: **Download** fetches and unpacks the level, then turns into **Load**, which opens the chart directly in the editor — no manual file handling. If an archive contains several playable charts, a chooser lists them so you can pick.

!!! note
    Downloads come only from TUF's own servers over HTTPS, and archives are checked during extraction — unsafe entries are rejected. Downloaded levels are cached under Quartz's own `TUF/Levels` folder, so loading a level again is instant.

!!! tip
    If the editor has unsaved changes, Quartz refuses to replace them — save or discard first, then load the TUF level again.

## Packs

Community level packs, in their own sub-tab.

- **Pack list** — search packs by name and sort by **Recent**, **Name**, or **Levels**. Each card shows the pack's name, level count, owner, favorites, and a preview of its first songs.
- **Open a pack** — click a card to see its levels. Packs keep their on-site **folder tree**: folders are collapsible rows showing how many levels they hold, with their contents indented beneath.
- **Level sorting** — inside a pack, switch between **Pack Order** (the curator's tree), **Difficulty**, and **Clears**. The non-default sorts flatten the folders into one ordered list.
- Levels in a pack download and play exactly like the Levels page, and share the same download cache.
