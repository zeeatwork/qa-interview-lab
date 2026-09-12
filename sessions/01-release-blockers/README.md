# Session 1: Build the release-blocker list

**Timebox:** 30 minutes  
**Assessment focus:** arrays, objects, conditionals, sorting, missing data, mutation, and explaining decisions

## Jira-style issue

The regression suite sends raw test results to a release dashboard. The release manager needs a short list containing only failures that can block a deployment. Right now, a reviewer has to scan the entire response manually, and tests without an assigned product area are sometimes overlooked.

Implement `getReleaseBlockers(results)` in `solution.js`.

## Acceptance criteria

The function must:

1. Include only results whose `status` is `"failed"`.
2. Include only `"critical"` and `"high"` severity failures.
3. Return each included result in this shape:

   ```js
   {
     testId: "AUTH-101",
     area: "authentication",
     severity: "critical"
   }
   ```

4. Use `"unassigned"` when `area` is missing, `null`, or an empty string.
5. Sort critical blockers before high blockers.
6. Within the same severity, sort by `testId` alphabetically.
7. Return an empty array when there are no blockers.
8. Do not mutate the input array or its objects.

## Working order

- Spend about 5 minutes completing `pedac.md`.
- Spend about 15 minutes implementing the function.
- Spend about 5 minutes running and debugging tests.
- Use the final 5 minutes for the guided debrief with ChatGPT.

Start without opening the `hints` folder. If you become stuck, reveal one hint at a time and mention which hint you used when submitting your attempt.

