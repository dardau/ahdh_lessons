# Lock in · English studio

Personal seven-day General English revision app. Buildless vanilla JavaScript, no accounts, no API keys.

## Run

Open `index.html` directly in a browser — the committed classic-script bundle supports `file://` without a local server. After editing source modules, run `npm run build` to regenerate `app.bundle.js`. Browser storage for local files depends on the browser; use JSON export to back up progress. Local-file progress and hosted-site progress are separate.

Requires Node 20+.

```sh
npm run dev
# http://127.0.0.1:4173
npm test
npm run build
```

Deploy `dist/` on any static host. Relative asset paths support GitHub Pages project URLs.

## Features

- 14 grammar chapters across seven open days: meaning, sentence forms, contrasts, worked examples and pitfalls.
- 168 checked exercises: 56 multiple-choice and 112 constrained typed answers, split into four-question rounds. Case, final punctuation and curly apostrophes are normalized; listed alternative forms are accepted.
- Baseline (14 items), final check (28 items), error review, practice and day completion.
- 10/25/45-minute timer with pause, reload recovery and focus view.
- Seven listening prompts using browser English text-to-speech, optional transcripts and explicit self-check.
- Personal writing prompts with local autosave. No fake AI grading: free writing and listening are self-assessed.
- Reading room with seven original learning texts, glossary, reflections, private paste-in notebook.
- Official publisher sample of Zero to One linked externally. No copyrighted book chapters bundled.
- Browser-local storage and validated JSON backup/import. No server-side collection of answers.
- Seven-day countdown starts on user action, never locks the learner out.

## Scope

A structured revision sprint, not an accredited course, CEFR evaluation or guarantee of IELTS 7.
The expanded bank preserves existing question IDs and answers. Full-day completion now includes the extra exercises; previously completed days may show remaining work. Typed practice checks a finite answer bank, not arbitrary semantic equivalence. Edit curriculum.js for teaching notes and productive drills, then regenerate the bundle.
Baseline and final checks use different items from the practice bank; scores are not psychometrically comparable.
Learning examples use ordinary interests only; personal chats and health information are not shipped.
Font loading uses Google Fonts with local fallbacks; book preview is external.
English voice availability depends on the browser and OS. The local dev server is loopback-only.

## GitHub Pages

The workflow checks and builds the application. To enable hosting in this repository, select
Settings → Pages → Source: GitHub Actions, then run the Pages workflow. GitHub account/plan
restrictions may apply. No account permissions or repository visibility are changed by this app.
