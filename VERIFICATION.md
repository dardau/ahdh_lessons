# Curriculum expansion verification

- `npm test`: nine passing tests. VM interaction coverage opens all 14 chapters, submits typed rounds, verifies feedback and error review, checks a 28-item final, and exercises storage-denied startup.
- `npm run build`: passing; classic-script entry still opens without module fetches on file URLs.
- `git diff --check`: passing.
- `designmd lint DESIGN.md`: zero errors/warnings.
- Premium static audit: two reports of the same delegated button in source/bundle. The auditor only recognizes inline onclick and cannot resolve document-level data-study delegation. The chapter navigation action is exercised for all 14 chapters in local-launch.test.js. No no-op inline handler was added to silence the scanner.
- Browser visual/keyboard/mobile verification unavailable: local browser use disabled in Work settings. VM checks do not substitute for visual or accessibility verification.
- Existing stored answers remain intact. New exercises extend day-completion requirements; old completion percentages can therefore decrease without losing answers.
- The hosted project returned NOT_FOUND on get_site and credential lookup. No replacement project or audience changes were made.

Design reconciliation: retained existing palette and layout. Added documentation of existing runtime token ownership; shared chapter renderer and four-question rounds follow existing card and timer styles. Reset/import now use an app-owned dialog instead of blocking native confirmations; real-browser focus behavior still requires verification.
