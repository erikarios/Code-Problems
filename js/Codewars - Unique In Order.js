/* Codewars - Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements
*/

// The parameter is a string of letters or an array of numbers that contain duplicates
// We need to return the same order of characters/numbers, making sure that there is no repetition of the same character in a row
// Create a new array
// Use a for loop to compare each character to see if they're are the same
// If they are not the same, push the character into the new array
// Return the new array

var uniqueInOrder = function(iterable) {
  const unique = []

  for (let i=0; iterable.length; i++){
    if (iterable[i] != iterable[i+1]){
        unique.push(iterable[i])
    }
  }
  return unique
};

/*Test Cases   
uniqueInOrder('AAAABBBCCDAABBB') => ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') => ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]) => [1,2,3]
*/