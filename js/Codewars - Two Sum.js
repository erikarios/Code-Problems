/* Codewars - Two Sum

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2). For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted. The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
*/

// The parameter is an array of numbers and a target sum
// We need return the indices of the numbers that equal the target sum. We need to return the indices as an array
// We need to iterate through the array and figure out what number, if any, would complement that current integer that we are checking
// new Map() – creates the map object as we iterate through the array 
// An example is twoSum([1, 2, 3], 4) => [0, 2]
// The loop starts at index 0 which is 1. Then we need to figure out what number plus 1 would equal the target number of 4
// The complement would be 4-1 = 3. So we need to look for the number 3
// We check if the indices has the complement. map.has(key) returns true if the key exists, false otherwise.
// If it does have the complement, then map.get(key) is used to return the value by the key, undefined if key doesn’t exist in map. It returns a specified element from the Map object
// Last we use map.set(key, value). The set() method is a map method that adds or updates an entry in a Map object with a specified key and a value

function twoSum(nums, target) {
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
Example 1:
    Input: ([1, 2, 3], 4)
    Output: [0, 2]

Example 2:
    Input: [1234,5678,9012], 14690
    Output: [1,2]
*/