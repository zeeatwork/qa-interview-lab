# Session 2B: Prepare automation test accounts

**Timebox:** 30 minutes  
**Focus:** selecting array items with `filter()` and reshaping objects with `map()`

## Jira-style issue

The authentication test suite receives account records from a shared test-data service. The response contains manual accounts, disabled accounts, inconsistent email capitalization, and missing environment values.

Create `prepareTestAccounts(accounts)` in `solution.js` so the automation suite receives only usable account data in a consistent shape.

## Acceptance criteria

The function must:

1. Keep only accounts whose `enabled` value is `true`.
2. Keep only accounts whose `type` is `"automation"`.
3. Return each retained account with only `id`, `email`, and `environment`.
4. Convert each retained email to lowercase.
5. Use `"staging"` when `environment` is missing, `null`, or empty.
6. Preserve the retained accounts' original order.
7. Return an empty array when no accounts qualify.
8. Not mutate the input array or its objects.

## Working order

1. Complete the two small warm-up functions.
2. Run the warm-up tests and review the result with ChatGPT.
3. Complete PEDAC one question at a time.
4. Implement the main function.
5. Run the main tests and complete the debrief.

Do not open the `hints` folder unless you choose to reveal a hint. Record all documentation or hints used.
