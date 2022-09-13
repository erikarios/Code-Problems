/* The highest profit wins!

Write a function that returns both the minimum and maximum number of the given list/array.All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar
 */

// The parameter is an array containing integers
// We want to return an array with two integers: the max and min
// We need to iterate through the array to figure out the highest and lowest integers in the array. We can do that using Math.min and Math.max
// The spread syntax allows an iterable, such as an array, to be passed in place of zero or more arguments. In other word, since the functions Math.min and Math.max are expecting multiple numbers to be passed as arguments, ...arr says "hey use the numbers in this array to fill in those arguments

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
};

/*Test Cases   
minMax ([1, 2, 3, 4, 5]) => [1, 5]
minMax ([2334454, 5]) => [5, 2334454]
minMax ([5]) => [5, 5]
*/