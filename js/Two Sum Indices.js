/* Two Sum Indices - Leetcode

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Constraints:
    2 <= nums.length <= 10^4
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9
    Only one valid answer exists.
*/

// The parameter is an array of numbers and a target sum
// We need to return the indices of the numbers that equal the target sum. There is only one solution and the same element cannot be used twice. We need to return the indices as an array
// We need to iterate through the array and figure out what number, if any, would complement that current integer that we are checking
// An example is twoSum([2,7,11,15], 9) => [0,1]
// new Map() – creates the map object as we iterate through the array 
// The loop starts at index 0 which is 2. Then we need to figure out what number plus 2 would equal the target number of 9
// The complement would be 9-2 = 7. So we need to look for the number 7. Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// We check if the indices has the complement. map.has(key) returns true if the key exists, false otherwise.
// If it does have the complement, then map.get(key) is used to return the value by the key, undefined if key doesn’t exist in map. It returns a specified element from the Map object
// Last we use map.set(key, value). The set() method is a map method that adds or updates an entry in a Map object with a specified key and a value

var twoSum = function(nums, target) {
  const indices = new Map();

  for (let index = 0; index < nums.length; index++) {
      const complement = target - nums[index];

      if (indices.has(complement)) {
          return [indices.get(complement), index]
      }

      indices.set(nums[index], index)
  }
};

/*Test Cases   
twoSum([2,7,11,15], 9) => [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
twoSum([3,2,4], 6) => [1,2]
twoSum([3,3], 6) => [0,1]
*/