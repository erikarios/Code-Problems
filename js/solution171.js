/* Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other:
*/

// The parameters are two array consisting of positive integers 
// We need to return an array in the same order excluding the same values from parameter b
// Set will remove the duplicate values in the array. Set objects are collections of values. A value in the Set may only occur once
// The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not
// .filter() - filters down to just the elements from the given array that pass the test implemented by the provided function

function arrayDiff(a, b) {
  let newSet = new Set(b)
  return a.filter(n => !newSet.has(n))
};


/*Test Cases   
arrayDiff([1,2,2], [1]) => [2,2]
arrayDiff([1,2,2], []) => [1,2,2]
arrayDiff([1,2,3], [1,2]) => [3]
arrayDiff([], [1,2]) => []
arrayDiff([1,2,2,2,3],[2]) ==> [1,3]
*/