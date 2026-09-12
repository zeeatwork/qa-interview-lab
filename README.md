# QA Interview Lab

An adaptive, interview-focused JavaScript practice lab for QA Engineer and SDET roles.

## How each session works

1. Sync the laptop and confirm the branch using the commands below.
2. Read the session `README.md`.
3. Write brief PEDAC notes before coding.
4. Work in `solution.js` from memory first.
5. Run the session tests.
6. Debug before consulting documentation.
7. Commit and push your attempt, even if it is incomplete.
8. Ask ChatGPT to review the session and name the branch if it is not `main`.

## Two-laptop sync workflow

GitHub is the source of truth. Run these commands before beginning work on either laptop:

```bash
git status
git branch --show-current
git pull --ff-only origin main
```

Before switching laptops or requesting a review, save the work to GitHub:

```bash
git status
git add .
git commit -m "Complete Session 1 attempt"
git push origin main
```

If `git status` shows uncommitted work before a pull, stop and commit or stash it first. Do not work on the same unpushed changes on both laptops.

By default, exercises use the `main` branch. If you intentionally use another branch, include its name when asking for a review.

## ChatGPT review workflow

When you request a session review, ChatGPT will:

1. Check the requested branch, defaulting to `main`.
2. Inspect its latest commits and changed files.
3. Confirm that the pushed version is newer than the last reviewed attempt.
4. Review the solution, PEDAC notes, test behavior, and debugging evidence.
5. Update the mastery map and spaced-repetition plan.

ChatGPT cannot see changes that exist only on a laptop. Push the attempt before requesting review.

## Commands

```bash
npm test
npm run test:session1
```

No package installation is required. The lab uses Node's built-in test runner.

## Assessment scale

- **Strong:** Applies and explains the skill independently.
- **Functional:** Uses the skill with minor hesitation or syntax lookup.
- **Developing:** Understands parts but cannot yet apply them reliably.
- **Gap discovered:** Missing knowledge or a misconception needs direct instruction.
- **Not assessed:** There is not enough evidence yet.

The purpose is to identify what needs practice. A failing test is useful evidence, not a grade.
