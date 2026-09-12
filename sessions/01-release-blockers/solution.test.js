import test from "node:test";
import assert from "node:assert/strict";
import { getReleaseBlockers } from "./solution.js";

test("returns only failed critical and high-severity tests", () => {
  const results = [
    { testId: "PAY-204", status: "failed", severity: "high", area: "payments" },
    { testId: "AUTH-101", status: "failed", severity: "critical", area: "authentication" },
    { testId: "SEARCH-310", status: "passed", severity: "critical", area: "search" },
    { testId: "PROFILE-115", status: "failed", severity: "medium", area: "profile" },
  ];

  assert.deepEqual(getReleaseBlockers(results), [
    { testId: "AUTH-101", area: "authentication", severity: "critical" },
    { testId: "PAY-204", area: "payments", severity: "high" },
  ]);
});

test("sorts test IDs alphabetically within the same severity", () => {
  const results = [
    { testId: "CART-300", status: "failed", severity: "high", area: "cart" },
    { testId: "AUTH-200", status: "failed", severity: "high", area: "authentication" },
    { testId: "PAY-100", status: "failed", severity: "critical", area: "payments" },
    { testId: "AUTH-100", status: "failed", severity: "critical", area: "authentication" },
  ];

  assert.deepEqual(
    getReleaseBlockers(results).map((result) => result.testId),
    ["AUTH-100", "PAY-100", "AUTH-200", "CART-300"],
  );
});

test("uses unassigned when the area is missing, null, or empty", () => {
  const results = [
    { testId: "A-1", status: "failed", severity: "critical" },
    { testId: "A-2", status: "failed", severity: "high", area: null },
    { testId: "A-3", status: "failed", severity: "high", area: "" },
  ];
  const snapshot = structuredClone(results);

  assert.deepEqual(
    getReleaseBlockers(results).map((result) => result.area),
    ["unassigned", "unassigned", "unassigned"],
  );
  assert.deepEqual(results, snapshot);
});

test("returns an empty array when no release blockers exist", () => {
  const results = [
    { testId: "A-1", status: "passed", severity: "critical", area: "authentication" },
    { testId: "A-2", status: "failed", severity: "low", area: "accessibility" },
  ];

  assert.deepEqual(getReleaseBlockers(results), []);
});

test("does not mutate the input array or its objects", () => {
  const results = [
    { testId: "Z-2", status: "failed", severity: "high", area: "checkout" },
    { testId: "A-1", status: "failed", severity: "critical", area: "authentication" },
  ];
  const snapshot = structuredClone(results);

  getReleaseBlockers(results);

  assert.deepEqual(results, snapshot);
});
