async function checkAuthentication() {
  console.log("authentication started");

  await Promise.resolve();

  console.log("authentication finished");
}

console.log("deployment started");

const pendingCheck = checkAuthentication();

console.log("dashboard updated");

await pendingCheck;

console.log("deployment check complete");
