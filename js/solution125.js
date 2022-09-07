/* Merge two sorted arrays into one

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays. You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array. Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result */

// There are two parameters: two arrays with integers
// We want to return a single sorted array and remove an duplicates
// We want to return the an empty array if both parameters are empty 
// We can check if the arrays are empty by using the .length method
// We can combine the two arrays which can be done using .concat() method
// Using the .sort() method to sort the elements in the array and return the negative, zero, and positive values in ascending order

function mergeArrays(arr1, arr2) {
    if (arr1.length == 0 && arr2.length == 0) {
      return [];
    } else {
       return Array.from(new Set(arr1.concat(arr2))).sort((a,b) => a - b);   
    }
};

/*Test Cases   
mergeArrays([1,2,3,4], [5,6,7,8]) => [1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]) => [1,2,3,4,5,6,7,8,9,10]
*/