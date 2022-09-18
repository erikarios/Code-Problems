/* No oddities here

Write a function that returns the values of an array that are not odd. All values in the array will be integers. Return the good values in the order they are given.*/

// The parameter is an array of numbers
// We want to return the array with only the even numbers 
// We need to iterate through the elements in the array and filter out the numbers that are even. We can do that using modulus

const noOdds = values => values.filter(num => num % 2 === 0);

/*Test Cases   
noOdds( [0,1] ) => [0]
noOdds( [0,1,2,3] ) => [0,2]
*/