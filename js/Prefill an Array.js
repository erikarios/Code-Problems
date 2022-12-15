/* Prefill an Array

Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:
  v can be anything (primitive or otherwise)
  if v is ommited, fill the array with undefined
  if n is 0, return an empty array
  if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
  When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function
*/

// There are two parameters, which is supposed to be an integer and a string
// We need to return an array with the value of v, n number of times
// We need to make sure the n is a n is a number. If not we need to return a TypeError stating that n is invalid
// To make sure n is a number, I used isNaN. Using parseInt to change any strings to numbers as well (parseInt(n))
// Use the modulus operator to ensure that n is not a float (n % 1 !== 0), or a negative number
// The other condition that we need to account for is making sure that if n is a boolean it is seen as invalid
// The last condition is to that if n == 0 than return an empty array. Use the two equal signs to make sure that string 0 is included
// Use the Array() constructor is used to create a new Array ans use .fill to fill the array with the value of v


function prefill(n, v) {
  
  if (isNaN(parseInt(n)) || n < 0 || n % 1 !== 0 || (typeof n === 'boolean')) {
  throw new TypeError(`${n} is invalid`);
  }

  if (n == 0) return [];

  return new Array(n).fill(v)
};

/*Test Cases  
prefill(3,1) => [1,1,1]
prefill(2,"abc") => ['abc','abc']
prefill("1", 1) => [1]
prefill(3, prefill(2,'2d')) => [['2d','2d'],['2d','2d'],['2d','2d']]
prefill("xyz", 1) => throws TypeError with message "xyz is invalid"
*/