/* Javascript Array

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple) */

// The parameter is an array of integers 
// We want to return the array with only positive integers
// We can use the .filter() method to filter out the even numbers and we can use modulus to make sure that it's an even number

const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 === 0);

/*Test Cases   
getEvenNumbers([2,4,5,6]) => [2,4,6]
*/