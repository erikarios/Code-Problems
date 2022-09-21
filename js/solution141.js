/* Flatten 

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the ascending order. */

// The parameter is a two-dimensional array which contains integers
// We want to return the a single array in ascending order
// We need to combine the integers into a single array, which we can do using the .concat() method. Concat() will allow us to merge the arrays and create a new array
// We need to use the spread syntax which will allow the .concat() method to be used on the all the elements of the array and allow us to flatten the array
// We can sort the array in order from smallest to largest by using the .sort() method, in ascending order, a - b
// Last we return the array

function flattenAndSort(arr) {
    let flatArray = [].concat(...arr).sort((a,b) => a - b)
    return flatArray;
};

/*Test Cases   
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) => [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), => [1, 2, 3, 4, 5, 6, 100]
*/