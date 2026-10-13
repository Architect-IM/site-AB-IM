# Shared website

This directory is the shared source for both ChatGPT/Codex and browser Grok Build.
The repository-root TanStack/Grok scaffold instructions describe the legacy app;
this directory uses the existing Vinext App Router stack. Preserve its package
manager, lockfile, components, assets and `.openai/hosting.json` project identity.

## Start a task

1. Read `../../AGENTS.project.md` and `../../docs/COLLABORATION.md`.
2. Fetch the repository and check the working tree before integrating `origin/main`.
3. Use `irina/<task>` for Irina or `mihail/<task>` for Mikhail; never force-push shared history.
4. Both assistants edit this same directory. Do not create another implementation or edit the legacy root app by mistake.

## Photographs

Any photograph added for either person must pass through `scripts/grade-photos.mjs` before it is placed in `public/` or referenced by a page. This is the same grade for Irina's assistant and Mikhail's assistant. Do not commit the untreated file into `public/`, and do not ask either person to open the preparation page.

```sh
node --experimental-strip-types scripts/grade-photos.mjs original.jpg --out public/assets/name.jpg
```

The script sets warmth, quieter color, softer light and a long edge of at most 2800 pixels. It does not crop, level the horizon or remove unwanted objects. Say so when a picture still needs that. JPEG, PNG and WebP are accepted. A phone HEIC must be saved as JPEG first.

## Verify and review

- Run `pnpm typecheck` and `pnpm build` here.
- For layout changes, inspect the modified pages on desktop and mobile, including interactions.
- Use `sitePath()` for root-relative `href` and `src`; use `siteHtml()` for raw HTML so review copies work in their own subdirectories.
- New dynamic routes need `generateStaticParams()` if they must appear in static review copies.
- Commit and push to the author's branch. Open a PR targeting `main` and include the review-copy link and checks performed.
- Incorporate the other person's feedback. A human collaborator must approve the PR; assistants must not manufacture approvals.

## Publication

GitHub is the shared source of truth. Working branches publish review copies only.
Publish to the existing production Site only from reviewed `main` when the owner
requests publication. Fetch both GitHub and the current Site source first; reconcile
unexpected Sites-only changes before updating it. Preserve Site identity and audience.
Do not store Site repository credentials, GitHub tokens, local tool state or `.env` files.

## Browser Grok Build

Use `../../docs/GROK-START.md`. Check actual repository and branch access first.
For the embedded preview, run this app on `0.0.0.0:8080` using its package script;
do not launch the legacy root app. Keep a working Grok preview alive for its user.
Do not claim the account is connected until fetch and a branch push actually succeed.
