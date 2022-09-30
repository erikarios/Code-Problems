/* Even numbers in an array

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers. */

// There are two parameters. The first is an array containing integers and the other is a single number which represents how many integers we return
// We need to return only the even numbers from the end of the array
// We need to iterate through the array and filter out the even numbers
// We can figure out which numbers are even by using the modulus operator
// We can use the slice method to slice from the end of the array to the parameter that we were given

function evenNumbers(array, number) {
    const filteredArray = array.filter(x => x % 2 === 0);
    return filteredArray.slice(filteredArray.length - number)
};

/*Test Cases   
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/