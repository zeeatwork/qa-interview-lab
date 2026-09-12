/**
 * Return the failed critical and high-severity tests that can block a release.
 *
 * @param {Array<object>} results raw automated-test results
 * @returns {Array<{testId: string, area: string, severity: string}>}
 */
export function getReleaseBlockers(results) {
  let filteredResults = [];
  results.forEach((result) => {

    if ((result.status == "failed") && (result.severity == "high" || result.severity == "critical")){
    filteredResults.push({
    testId: result.testId,
    area: result.area || "unassigned",
    severity: result.severity,
  });
    }

  })
    
  filteredResults.sort((a, b) => {
  const severityComparison = a.severity.localeCompare(b.severity);

  if (severityComparison !== 0) {
    return severityComparison;
  }
  return a.testId.localeCompare(b.testId);
  });
return filteredResults
}

