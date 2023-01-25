/* Shuffle the Array - Leetcode

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Constraints:
  1 <= n <= 500
  nums.length == 2n
  1 <= nums[i] <= 10^3
*/

// The parameter is an array of integers and a n which equals an integer
// We need to return the array but shuffle the order as indicated by n
// Create an output array
// Use a for loop and run it until it reaches n. There's a pattern that n is only half the array
// Push the element into the new array and push i + n
// Return the output array
// Time complexity is O(n) since we are iterating over the nums array
// Space complexity is O(n)

var shuffle = function(nums, n) {
    let arr = []

    for (let i=0; i < n; i++){
      arr.push(nums[i], nums[i+n])
    }
    return arr
};

/*Test Cases  

Example 1:
  Input: nums = [2,5,1,3,4,7], n = 3
  Output: [2,3,5,4,1,7] 
  Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:
  Input: nums = [1,2,3,4,4,3,2,1], n = 4
  Output: [1,4,2,3,3,2,4,1]

Example 3:
  Input: nums = [1,1,2,2], n = 2
  Output: [1,2,1,2]
*/