---
version: alpha
name: Lock in English studio
description: A quiet bilingual study notebook with short practice rounds.
colors:
  primary: '#183a2d'
  background: '#f6f7f2'
  surface: '#ffffff'
  text: '#1e3028'
  accent: '#d6ed9b'
typography:
  body:
    fontFamily: 'DM Sans, Manrope, sans-serif'
rounded:
  control: '8px'
spacing:
  lessonGap: '20px'
omitted:
  - section: components
    reason: Component recipes are maintained in style.css.
---

# Lock in

## Overview

A personal study notebook, not a competitive leaderboard. Russian instruction and English practice for a learner who needs concrete, short steps. Product register. Existing forest-green timer and numbered seven-day plan are retained; no rebrand. Avoid giant exercise walls and shame-based streaks.

## Colors

Runtime ownership is Model B: style.css is canonical. primary → --green; background → --bg; surface → --paper; text → --ink; accent → --lime. New theory and practice surfaces consume these variables. Light theme only; preserve native forced-colors behavior.

## Typography

Use existing DM Sans/Manrope with sans-serif Cyrillic fallback. Theory line height 1.9; formulas and examples stay readable, not compressed into badges. No externally loaded font is required for operation.

## Layout

Existing sidebar and responsive 720px/1150px breakpoints. Theory is a naturally scrolling reading column, with timer beside it on wide screens. Each practice round has four questions. Content must wrap on narrow screens.

## Elevation & Depth

White cards, subtle borders; no new shadows on instructional text.

## Shapes

Reuse rounded cards and 8px field corners. Do not add a second component system.

## Components

Canonical owners: app.js frame/navigation, study/theory, quizPage/practice and feedback; logic.js answer checking; style.css global scrollbars and controls. Native labelled text inputs and radio controls; native details for optional pitfalls. Status feedback is textual, not color-only. Quiz forms own validation. Dialogs use HTML dialog with explicit cancel, title, Escape and restored focus. Free writing remains self-assessed, never presented as AI-graded.

## Do's and Don'ts

- Explain before testing; show why after checking.
- Keep previous question IDs and browser storage key stable.
- Count actual checked exercises, not inferred language proficiency.
- Do not ship private conversations, health notes or copyrighted book chapters.
- Seven days is a revision structure, not a promised IELTS score.
