/* Even numbers in an array

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers. */

// There are two parameters: an array of integers and a single number
// We need to return a new array containing only the even numbers from the array that we are given. The even numbers need to appear in the same order. The length of the array depends on the argument (number) that we are given. 
// We can use the .filter() method to iterate through the array and determine if the numbers are even or odd
// We can use the slice method to make sure that the new array is at the length of the argument given
// A negative index can be used, indicating an offset from the end of the sequence. slice(-number) extracts the argument that is given 

function evenNumbers(array, number) {
    return array.filter(el => el % 2 === 0).slice(-number)
};

/*Test Cases   
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/