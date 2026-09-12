# Session 2: Run health checks sequentially

**Timebox:** 30 minutes  
**Assessment focus:** promises, `async`, `await`, execution order, sequential work, and result collection

## Jira-style issue

A deployment monitor receives a list of health-check functions. Each function starts an asynchronous check and resolves with its result. Running checks at the same time can overwhelm a shared test environment, so the monitor must finish one check before starting the next.

Implement `runHealthChecks(checks)` in `solution.js`.

## Acceptance criteria

The function must:

1. Be asynchronous and return a Promise.
2. Accept an array of functions.
3. Call the functions in array order.
4. Wait for each function to finish before calling the next one.
5. Return an array containing each resolved result in the original check order.
6. Return an empty array when no checks are supplied.
7. Not mutate the input array.

## Working order

1. Complete the execution-order warm-up with ChatGPT.
2. Write brief PEDAC notes.
3. Implement the function from memory.
4. Run and debug the tests.
5. Complete the guided debrief.

Do not open the `hints` folder unless you choose to reveal a hint. Record any hint or documentation you use.
