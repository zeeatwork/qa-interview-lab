# Mastery Map

This file is updated after each reviewed session.

| Skill | Status | Evidence | Next review |
|---|---|---|---|
| Array filtering | Functional | Session 1: independently identified the conditions and implemented selection with `forEach`; used MDN; needs clearer `filter` vs. `map` distinction | Session 3 |
| Object transformation | Developing | Session 1: initially returned whole objects and tried deleting `status`; completed new-object projection with direct guidance | Session 3 |
| Sorting with multiple rules | Developing | Session 1: initially used two global sorts; learned one comparator with a primary rule and tie-breaker | Session 5 |
| Missing-data handling | Developing | Session 1: recognized missing values but initially mutated source objects; completed fallback in new objects with guidance | Session 3 |
| Avoiding mutation | Developing | Session 1: original approach changed `result.area`; final solution constructs new objects | Session 3 |
| PEDAC problem decomposition | Functional | Session 1: identified the overall pipeline and produced an accurate six-step algorithm after targeted clarification | Session 2 |
| Async JavaScript | Not assessed | Session 2 scheduled | Session 2 |
| Test design and debugging | Not assessed | Early evidence: ran tests, read diffs, and corrected a stale unsaved file; dedicated assessment still scheduled | Session 3 |
| Playwright architecture | Not assessed | Session 4 scheduled | Session 4 |
| API and automation strategy | Not assessed | Session 5 scheduled | Session 5 |

## Session 1 review

- **Result:** All 5 tests passed.
- **Independent recall:** `forEach`, `push`, boolean conditions, `sort`, `localeCompare`, and returning an accumulator array.
- **Support used:** MDN documentation for `sort`, `filter`, and `forEach`; guided ChatGPT feedback.
- **Repository hints used:** None.
- **Primary learning target:** Use one comparator for primary and secondary sorting rules.
- **Secondary learning target:** Distinguish selecting elements with `filter` from transforming elements with `map`.
- **Assessment note:** A correct final solution followed substantial guidance, so passing tests do not yet indicate independent mastery.
