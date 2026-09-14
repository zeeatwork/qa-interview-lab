/**
 * Return only the IDs of failed tests.
 *
 * Example:
 * [{ id: "A", status: "passed" }, { id: "B", status: "failed" }]
 * becomes ["B"]
 */
export function getFailedTestIds(results) {
  let failedTestIds = [];
  results.forEach((result) => {
    if (result.status === "failed"){
      failedTestIds.push(result.id);
    }
  });
  return failedTestIds;
 }
//getFailedTestIds([{ id: "A", status: "passed" }, { id: "B", status: "failed" }]);
/**
 * Return a new array containing the lowercase email from every account.
 *
 * Example:
 * [{ email: "QA@EXAMPLE.COM" }, { email: "TEST@EXAMPLE.COM" }]
 * becomes ["qa@example.com", "test@example.com"]
 */
export function getLowercaseEmails(accounts) {
  let justEmails = [];
  accounts.map((account) => {
    justEmails.push(account["email"].toLowerCase());
  })
  return justEmails;
}
