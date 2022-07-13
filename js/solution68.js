/* Find the first non-consecutive number

Your task is to find the first element of an array that is not consecutive. E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number. If the whole array is consecutive then return null. The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too */

// The parameter is an array
// We want to return the integer that is not a consecutive number
// We use a for loop to go through the elements in the array. The array would loop starting at index 0 and so on
// We need to stop once we reach the end of the array which is determined by arr.length - 1
//  a[i] + 1 takes the element at index i and adds 1
//  a[i + 1] takes the element at index i+1. To be consecutive, these two values have to be equal
// If not, return the integer
// If the arugment is an array of numbers that is consecutive, empty, or has only one number then we need to return null

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
};

/*Test Cases   
firstNonConsecutive([1,2,3,4,6,7,8]) => Output: 6
firstNonConsecutive([-3,-2,0,1,2]) => Output: 0
firstNonConsecutive([1,2,3,4]) => Output: null
*/