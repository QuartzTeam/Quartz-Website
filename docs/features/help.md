# Help

A FAQ inside the mod, so the answer to "what does this setting do" is one tab away instead of one search away. The questions ship with Quartz, and the whole list is a file you can rewrite.

## Where to find it

Open the Quartz menu in-game and pick **Help → FAQ** from the sidebar.

Questions are grouped under headings, and each one is a collapsible row — click a question to read its answer, click again to fold it away.

## Making it yours

The list is read from `FAQ.json` in your Quartz folder. Three buttons sit above it:

- **Open File** — opens `FAQ.json` in whatever your system uses for `.json` files, writing the default file first if it isn't there yet.
- **Open Folder** — opens the Quartz data folder that holds `FAQ.json` and your settings.
- **Reload** — re-reads the file from disk and rebuilds the list, so you can keep the game running while you edit.

Each entry takes a `question`, an `answer`, and an optional `category` that groups it under a heading. Any of the three can be plain text, a list of lines, or an object keyed by language:

```json
{
  "entries": [
    {
      "category": { "en-US": "Getting started", "ko-KR": "시작하기" },
      "question": { "en-US": "What is Quartz?", "ko-KR": "Quartz가 뭔가요?" },
      "answer": "An all-in-one mod for A Dance of Fire and Ice."
    }
  ]
}
```

An entry written for your language is used when Quartz is in that language, falling back to English and then to whatever the entry does have — so a half-translated file still reads sensibly. Answers accept rich text: `<b>bold</b>`, `<i>italic</i>`, `<color=#FF9999>color</color>`, and `<size=20>size</size>`.

!!! note
    `FAQ.json` is only written when it's missing, so updating Quartz never overwrites your edits. Delete the file and press **Reload** to bring the shipped questions back.

!!! tip
    If the file has a typo in it, the page says what went wrong and shows the built-in questions instead of going blank — fix the file and press **Reload**.
