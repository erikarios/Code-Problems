/* Remove Smallest

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left. */

// The parameter is an array containing integers
// We want to return the array in the same order but remove the smallest number in the array. The original array is not to be mutated
// We have to find a method that will allow us to make a copy of the original array without mutation. We can do that using slice starting with the first element, index 0
// We need to find the smallest value in the array. We can use indexOf() on Math.Min() to figure out where the element is located. We need to use the spread operator since Math.min() only accepts numbers as parameters. The spread operator will allow the array to be accepted
// We need to remove the smallest element in the array which we can do using splice. Splice() allows us to indicate what we want to have removed (smallestValue) and we can have the deleteCount indicate the number of elements in the array to remove
// Then we need to return the array without the smallest element

function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestValue, 1);
    return copy
};

/*Test Cases   
removeSmallest([1,2,3,4,5]) => [2,3,4,5]
removeSmallest([5,3,2,1,4]) => [5,3,2,4]
*/