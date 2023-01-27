/* Decompress Run-Length Encoded List - Leetcode

We are given a list nums of integers representing a list compressed with run-length encoding. Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list. Return the decompressed list.

Constraints:
    2 <= nums.length <= 100
    nums.length % 2 == 0
    1 <= nums[i] <= 100
*/

// The parameter is an array of numbers
// We need to return an array that is reflective of the freq and val. For example with the input: nums = [1,1,2,3] the output would be output: [1,3,3]. We look at the first pair which is [1,1] so the the value would be 1 with a frequency of 1. Looking at the second pair [2,3], we would want a value of 3 with a frequency of 2
// Declare an empty array
// We need to look at each adjacent pairs
// Loop over the array and for every pair, we will push the value in the array as many times as the frequency given in the pair
// for(let i=0; i < nums.length; i = i+2) { / So this would be grabbing 1 since that is the first number in the output array. Second number it would grab 2
// for(let j=0; j <nums[i]; i++){ / So the first time this would be 1. The second time this would be 2
// store.push(nums[i + 1]) / So the output would be 1. The second time it would be 3,3.
// Return the array
// We have a nested loop here, so time complexity would be O(n2)
// Space complexity is linear O(n).

var decompressRLElist = function(nums){
  let arr = []

  for(let i=0; i < nums.length; i = i+2) { // we want to grab the frequency
    for(let j=0; j <nums[i]; j++){ 
      arr.push(nums[i + 1]) // we push the value into the arr as many times as the frequeny given
    }
  }
  return arr
};

/*Test Cases  
Example 1:
    Input: nums = [1,2,3,4]
    Output: [2,4,4,4]
    Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
    The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
    At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

Example 2:
    Input: nums = [1,1,2,3]
    Output: [1,3,3]
*/