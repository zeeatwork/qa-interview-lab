import test from "node:test";
import assert from "node:assert/strict";
import { prepareTestAccounts } from "./solution.js";

test("keeps only enabled automation accounts", () => {
  const accounts = [
    { id: "A-1", email: "ONE@EXAMPLE.COM", enabled: true, type: "automation", environment: "qa" },
    { id: "A-2", email: "TWO@EXAMPLE.COM", enabled: false, type: "automation", environment: "qa" },
    { id: "A-3", email: "THREE@EXAMPLE.COM", enabled: true, type: "manual", environment: "qa" },
  ];

  assert.deepEqual(prepareTestAccounts(accounts), [
    { id: "A-1", email: "one@example.com", environment: "qa" },
  ]);
});

test("returns only the required properties", () => {
  const accounts = [
    {
      id: "A-1",
      email: "QA@EXAMPLE.COM",
      enabled: true,
      type: "automation",
      environment: "staging",
      password: "not-returned",
      team: "quality",
    },
  ];

  assert.deepEqual(prepareTestAccounts(accounts), [
    { id: "A-1", email: "qa@example.com", environment: "staging" },
  ]);
});

test("uses staging when environment is missing, null, or empty", () => {
  const accounts = [
    { id: "A-1", email: "ONE@EXAMPLE.COM", enabled: true, type: "automation" },
    { id: "A-2", email: "TWO@EXAMPLE.COM", enabled: true, type: "automation", environment: null },
    { id: "A-3", email: "THREE@EXAMPLE.COM", enabled: true, type: "automation", environment: "" },
  ];

  assert.deepEqual(
    prepareTestAccounts(accounts).map((account) => account.environment),
    ["staging", "staging", "staging"],
  );
});

test("preserves account order and returns an empty array when none qualify", () => {
  const qualifying = [
    { id: "B-2", email: "B@EXAMPLE.COM", enabled: true, type: "automation", environment: "qa" },
    { id: "A-1", email: "A@EXAMPLE.COM", enabled: true, type: "automation", environment: "qa" },
  ];
  const nonqualifying = [
    { id: "A-2", email: "A@EXAMPLE.COM", enabled: false, type: "manual", environment: "qa" },
  ];

  assert.deepEqual(
    prepareTestAccounts(qualifying).map((account) => account.id),
    ["B-2", "A-1"],
  );
  assert.deepEqual(prepareTestAccounts(nonqualifying), []);
});

test("does not mutate the input array or its objects", () => {
  const accounts = [
    { id: "A-1", email: "QA@EXAMPLE.COM", enabled: true, type: "automation", environment: null },
  ];
  const snapshot = structuredClone(accounts);

  prepareTestAccounts(accounts);

  assert.deepEqual(accounts, snapshot);
});
