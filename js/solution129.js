/* Odd or Even?

Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

// The parameter is an array containing integers that can be positive or negative
// We want to determine if the sum of the elements in the array are even or odd. We want to return a string of either 'even' or 'odd'
// We need to add all the numbers in the array. We can do so using the .reduce() method to calculate the sum of the elements in the array. Reduce will go through each element in the array
// We can check whether the sum is even or odd using modulus and return the appropriate string


function oddOrEven(arr) {
    return arr.reduce((a,b,) => a + b, 0)  % 2 === 0 ? 'even' : 'odd'
};


/*Test Cases   
oddOrEven([1023, 1, 2]) => 'even'
oddOrEven([0, 1, -4]) => 'odd'
oddOrEven([]) => 'even'
oddOrEven([-1023, -1, 3]) => 'odd'
*/