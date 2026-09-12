import test from "node:test";
import assert from "node:assert/strict";
import { runHealthChecks } from "./solution.js";

const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

test("returns a Promise", () => {
  const result = runHealthChecks([]);

  assert.ok(result instanceof Promise);
});

test("runs each check only after the previous check finishes", async () => {
  const events = [];

  const checks = [
    async () => {
      events.push("authentication started");
      await wait(15);
      events.push("authentication finished");
      return "authentication passed";
    },
    async () => {
      events.push("payments started");
      await wait(1);
      events.push("payments finished");
      return "payments passed";
    },
  ];

  await runHealthChecks(checks);

  assert.deepEqual(events, [
    "authentication started",
    "authentication finished",
    "payments started",
    "payments finished",
  ]);
});

test("returns resolved results in check order", async () => {
  const checks = [
    async () => {
      await wait(10);
      return { name: "slow check", status: "passed" };
    },
    async () => {
      await wait(1);
      return { name: "fast check", status: "passed" };
    },
  ];

  assert.deepEqual(await runHealthChecks(checks), [
    { name: "slow check", status: "passed" },
    { name: "fast check", status: "passed" },
  ]);
});

test("returns an empty array when no checks are supplied", async () => {
  assert.deepEqual(await runHealthChecks([]), []);
});

test("does not mutate the input array", async () => {
  const firstCheck = async () => "first passed";
  const secondCheck = async () => "second passed";
  const checks = [firstCheck, secondCheck];
  const snapshot = [...checks];

  await runHealthChecks(checks);

  assert.deepEqual(checks, snapshot);
});
