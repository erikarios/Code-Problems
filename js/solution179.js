/* Find the odd int

Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
*/

// The parameter is an array of numbers
// We need to return the number that is displayed an odd number of times. There will always be only one number displayed an odd number of times
// The find method returns the first element which meets the condition set in the function. The condition for the find method is set as the filter method
// For each element in the array, the find method will take that element as num and then the filter will return an array of all elements in the array that are equal to num
// We can find the length of the filtered array. The length refers to the number of times the num is in the array
// Using modulus we can check to see that the length is not even

function findOdd(arr) {
    return arr.find((num) => arr.filter(el => el == num).length % 2 !== 0)
};

/*Test Cases   
findOdd([7]) => 7
findOdd([1,1,2]) => 2
findOdd([0,1,0,1,0]) => 0
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]) => 4
*/