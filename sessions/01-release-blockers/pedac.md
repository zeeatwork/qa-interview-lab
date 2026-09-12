# PEDAC notes

## Problem

In your own words, what must the function do?
In this problem, it looks like we're taking some test results, filtering out unnecessary information, and then filling in some values when certain properties are missing values. Then we are sorting the results by severity level and then alphabetically, and we're returning what we get.

## Examples

Write one small input and the output you expect.
let testResults = [{
testId: "AUTH-003",
area: "authentication",
severity: "high",
status: "failed"
}, {
testId: "AUTH-003",
area: "authentication",
severity: "critical",
status: "passed"
}, {
testId: "AUTH-101",
area: "authentication",
severity: "low",
status: "failed"
}] //[
{
testId: "AUTH-003",
area: "authentication",
severity: "high",
},
];

## Data

What data structures are involved? Which properties matter?
It receives an array of objects and should also return an array of objects.
status
severity
testId
area =>

## Algorithm

List the steps in plain language before writing JavaScript.

1. Keep only failed results with critical or high severity.
2. Create new objects containing testId, area, and severity.
3. Substitute "unassigned" for a missing, null, or empty area.
4. Sort critical results before high results.
5. Within each severity, sort alphabetically by testId.
6. Return the resulting array.

## Code and review notes

- What did you remember without help?
  I independently identified the filtering conditions and used forEach, push, sort, and localeCompare. I needed help returning only the required object properties and combining primary and secondary sorting rules.
- Where did you hesitate?
  Combining sorting rules was the hardest part. I initially performed two separate sorts, but the second sort rearranged the entire array. I learned to use one comparator with severity as the primary rule and test ID as the tie-breaker.
- Did you use a hint or documentation? Which one?
  I used MDN to review sort(), filter(), and forEach(). I remembered the general purpose of iteration and sorting methods but needed documentation for their behavior and syntax. I also needed guidance distinguishing selection with filter() from object transformation with map().
