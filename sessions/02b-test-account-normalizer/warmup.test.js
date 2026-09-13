import test from "node:test";
import assert from "node:assert/strict";
import {
  getFailedTestIds,
  getLowercaseEmails,
} from "./warmup.js";

test("keeps only failed tests and returns their IDs", () => {
  const results = [
    { id: "AUTH-1", status: "passed" },
    { id: "PAY-2", status: "failed" },
    { id: "CART-3", status: "failed" },
  ];

  assert.deepEqual(getFailedTestIds(results), ["PAY-2", "CART-3"]);
});

test("returns every account email in lowercase", () => {
  const accounts = [
    { email: "QA.ONE@EXAMPLE.COM" },
    { email: "Qa.Two@Example.com" },
  ];

  assert.deepEqual(getLowercaseEmails(accounts), [
    "qa.one@example.com",
    "qa.two@example.com",
  ]);
});
