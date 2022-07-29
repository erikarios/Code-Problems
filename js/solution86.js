/* Invert values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives */

// The parameter is an array of integers 
// We want to return an array with each number changed to its additive inverse
// Use .map method to go through each number in the array 
// We can get the inverse of each number by multiplying it by -1. If it is a negative integer, then it will turn positive. If positive, it will turn negative.
// Return new array

const invert = array => array.map(num => (num * -1))

/*Test Cases   
invert([1,2,3,4,5]) => Output: [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) => Output: [-1,2,-3,4,-5]
*/