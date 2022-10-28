/* Nth Smallest Element 

Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications. */

// There are two parameters: an array of integers and a single number
// We need to return a the smallest element that is located at the Nth number. Remember that the the index starts at 0 
// For example if you are looking for the second element, it is at index 1
// We need to sort the array first so the elements are arranged from smallest to largest vaule 

function nthSmallest(arr, n){
    return arr.sort((a,b)=>a-b)[n-1]
};

/*Test Cases   
nthSmallest([3,1,2], 2) => 2
nthSmallest([15,20,7,10,4,3], 3) => 7
nthSmallest([-5,-1,-6,-18], 4) => -1
nthSmallest([-102,-16,-1,-2,-367,-9], 5) => -2
nthSmallest([2,169,13,-5,0,-1], 4) => 2
nthSmallest([2,1,3,3,1,2], 3) => 2
*/