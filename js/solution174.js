/* Sort the odd

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

// The parameter is an array of integers which contain odd and even values
// We want to return the the array with the odd numbers in ascending order but keep the even numbers in the original index
// We can create a new array containing only the odd numbers
// We can use the .filter() method to iterate through the array and determine if the numbers are odd
// We can sort the array in in ascending order, using the .sort() method, a - b
// Use the map method to create a new array with the condition that if the number is even, if so we keep the same number if not then we want to grab the odd number from the sorted array
// We can grab the odd sorted numbers using the shift method
// Return the new array

function sortArray(arr) {
    const oddNums = arr.filter(x => x % 2 !== 0).sort((a,b) => a-b)
    return arr.map(n => n % 2 === 0 ? n : oddNums.shift())
};

/*Test Cases   
sortArray([5, 3, 2, 8, 1, 4]) => [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]) => [1, 3, 5, 8, 0]
sortArray([]) => []
*/