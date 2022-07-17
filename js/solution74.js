/* N-th Power

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.*/

// The parameter is an array of integers and a number
// We need to find the Nth power of the element with index N.
// The conditional (ternary) operator is represented by the question mark (?)
// If n is bigger than the arr.length (the number of elements), then -1 would be returned
// If not then Math.pow(arr[n], n) would find the Nth power of the element with index N

const index = (arr, n) => (arr.length <= n) ? -1 : Math.pow(arr[n], n) 

/*Test Cases   
index([1, 2, 3, 4],2) => Output: 9  
index([1, 3, 10, 100],3) => Output: 1000000
index([1, 2],3) => Output: -1
*/