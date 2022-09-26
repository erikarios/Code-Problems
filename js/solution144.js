/* Sorted? yes? no? how?

Complete the method which accepts an array of integers, and returns one of the following:
"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer */

// The parameter is an array which contains integers
// Depending on the order of the integers in the array we want to return the one of three strings: 'yes, ascending', 'yes, descending' or 'no'
// We need to iterate through each element in the array, which we can do with .every() method
// .every() takes a function as its argument and returns true if and only if that argument function returns true on every array element
// every() calls this function on each array element x, pairing the element with its index i. The condition on the right is the check to see if the elements are increasing. The condition on the left is an edge case to avoid an error when using arr[i-1]

function isSortedAndHow(arr) {
    return arr.every((x,i) => i==0 || arr[i] >= arr[i-1]) ? 'yes, ascending':
           arr.every((x,i) => i==0 || arr[i] <= arr[i-1]) ? 'yes, descending':'no'
};

/*Test Cases   
isSortedAndHow([1, 2]) => 'yes, ascending'
isSortedAndHow([15, 7, 3, -8]) => 'yes, descending'
isSortedAndHow([4, 2, 30]) => 'no'
*/