# Mastery Map

This file is updated after each reviewed session.

| Skill | Status | Evidence | Next review |
|---|---|---|---|
| Array selection | Functional | Sessions 1 and 2B: independently wrote condition-based selection with `forEach`; diagnosed Session 2B as a selection problem; needed help with deletion during forward iteration | Session 4 |
| Object transformation | Functional | Session 2B: independently produced required object shape, lowercase emails, and fallback environment values | Session 4 |
| Method semantics | Developing | Session 2B warm-up: used `map` for side effects with an external accumulator; behavior passed, but method purpose needs reinforcement | Session 3 |
| Sorting with multiple rules | Developing | Session 1: initially used two global sorts; learned one comparator with a primary rule and tie-breaker | Session 5 |
| Missing-data handling | Functional | Session 2B: independently applied the required environment fallback on a protected copy | Session 4 |
| Avoiding mutation | Functional | Session 2B: deliberately protected the source data and passed the mutation requirement; deep copying was more than the task required | Session 4 |
| Array deletion during iteration | Developing | Session 2B: forward `forEach` plus `splice` skipped shifted items; backward traversal fixed the chosen approach | Session 4 |
| PEDAC problem decomposition | Functional | Session 2B: accurately described inputs, outputs, constraints, and a workable multi-stage algorithm | Session 3 |
| Test design and debugging | Functional | Session 2B: isolated the likely selection defect, saved an incomplete commit, requested a minimal correction, and completed the fix | Session 3 |
| Async JavaScript | Paused | Deferred at learner request | Only when learner requests |
| Playwright architecture | Not assessed | Future session | Session 4 |
| API and automation strategy | Not assessed | Future session | Session 5 |

## Session 1 review

- **Result:** All 5 tests passed.
- **Independent recall:** `forEach`, `push`, boolean conditions, `sort`, `localeCompare`, and returning an accumulator array.
- **Support used:** MDN documentation for `sort`, `filter`, and `forEach`; guided ChatGPT feedback.
- **Repository hints used:** None.
- **Primary learning target:** Use one comparator for primary and secondary sorting rules.
- **Secondary learning target:** Distinguish selecting elements from transforming elements.
- **Assessment note:** A correct final solution followed substantial guidance, so passing tests did not yet indicate independent mastery.

## Session 2B review

- **Result:** Warm-up and main implementation satisfy the supplied test expectations.
- **Independent approach:** Used explicit accumulators, `forEach`, a deep copy, backward deletion, value normalization, and a final object projection.
- **Support used:** Documentation plus one targeted correction to preserve the learner's splice-based filtering approach.
- **Strength demonstrated:** Correctly reasoned about protecting the input and built the required output without replacing the whole solution.
- **Primary learning target:** Understand how array indices shift when deleting elements during iteration.
- **Secondary learning target:** Match method choice to intent; use `map` for returned transformed values or `forEach` for side effects.
- **Assessment note:** Completion required a narrow debugging correction rather than a rewritten implementation.
