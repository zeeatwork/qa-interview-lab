# PEDAC notes

## Warm-up notes

- What does `filter()` return?
a shallow copy of an array with values that meet a condition
- What does `map()` return?
map returns a new array with the results of a function performed on the values in the original array.
- What did you remember without documentation?
yes- I did need to confirm that filter() returned a copy, not filtering in place of the original array.

## Problem

In your own words, what must `prepareTestAccounts(accounts)` do?
It must create a new array containing only the accounts that are automation type and enabled(true). The filtered results should be formatted to contain key/values id, email(lowercase), and environment(update environment to staging when necessary.).The results should remain in their original order and be obtained without changing the original array. 

## Examples

Write one small input and the exact output you expect.
[{id:'01-202', 
email: 'test1@testing.com', 
environment: null,
enabled: true,
type: 'automation'}] => [{id: '01-102', email: 'test1@testing.com', environment: 'staging'}]
[{id:'01-204', 
email: 'test1@testing.com', 
environment: staging,
enabled: false,
type: 'automation'}] => []

## Data

What enters the function? What should each returned object contain?
An array of objects featuring id, email, environment, enabled, and type is entered and an array of objects with id, email, and enviroment should be returned if filtering conditions are met. Else an empty array.

## Algorithm

List the steps in plain language before writing JavaScript.

1. make a deep copy (likely using spread) to prevent original array from being effected by data manipulation (filtering is a shallow copy so this is a preventative measure)
2. filter array copy for neccessary enable and type values.  
2. if no results meet the filter return empty array
3. if there are resulting entries, check environment variable and update to staging if necessary.
4. create final array of objects with keys id, lowercase email, and environment
5. return final array.


## Code and review notes

- What did you remember without help? I remembered spread, filter, and forEach
- Where did you hesitate?
I hesitated with creating temporary arrays for data manipulations. I know that this isn't performant, but it helped me get something in the IDE that could be revised later. I also wan't sure if I'd be able to chain actions (ex: value checks for environment and toLowerCase() for emails in one step)
- Did you use a hint or documentation? Which one?
Documentation