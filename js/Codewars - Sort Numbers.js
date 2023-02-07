/* Codewars - Sort Numbers

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array
*/

// The parameter is an array of numbers 
// We need return the array with sorted numbers. If the array is null we need to an empty array
// Using a conditional, check to see if the nums array isn't null. If it isn't then then the nums array using a sort comparison function.  
// a - b will sort negative, zero, and positive values in ascending order. When the .sort(a,b) method compares two values, it sends the values to our compare function and sorts the values according to the returned value. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a
// If the nums array is null, an empty array will be returned

function solution(nums){
    return nums !== null ? nums.sort((a,b)=> a-b) : [] 
};

/*Test Cases  
Example 1:
    Input: [1, 2, 10, 50, 5]
    Output: [1,2,5,10,50]

Example 2:
    Input: (null)
    Output: []
*/
