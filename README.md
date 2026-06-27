# neuron-public

Public digital garden — a curated, **opt-in** subset of a private Obsidian vault,
rendered with [Quartz v4](https://quartz.jzhao.xyz/) and deployed to GitHub Pages.

This repository contains **only** content that has been explicitly reviewed and
greenlit for publication. No private notes, no PII, no source vault history ever
reaches here — the private vault lives in a separate, private repository.

## Published clusters

- **The Firsts** — Dr. Omar Suleiman (seerah / Islamic history) — 187 notes
- **Anatoly** — gym program & training notes — 14 notes

## How it works

`content/` holds the published markdown. On push to `main`, GitHub Actions runs
`npx quartz build` and deploys the static site to GitHub Pages.

To add a new cluster: vet it in the private vault, then copy the reviewed notes
into `content/` here and push.
