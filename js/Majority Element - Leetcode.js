/* Majority Element - Leetcode

Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Constraints:
    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
*/

// The parameter is an array of integers
// We need to return the integer that appears more than [n/2] times. There will always be an interger that appears than half the times
// We need to loop through the array and count the number of times each integer appears
// Create an object
// The count will represent how often an integer appears
// The first loop iterates through the given array. If the integer is not in the elem object, then it will be added. If the integer is already in the object then the value will increment by one
// Then, we can iterate through the object (elem) to find the character that has the largest count.
// We compare each n (property) in elem (object) to the count. If the current element is bigger than the count, then that becomes the count. This will continue until we iterate completely through the object.
// Return the majority integer
// Time complexity is linear. Space complexity is constant

function majorityElement(arr){
  // arr.sort()
  // return arr[Math.floor(arr.length/2)]
  
  let elem = {},
      count = 0,
      majElem = arr[0]
  
  for(const num of arr){
    elem[num] = elem[num] + 1 || 1
    //elem[num] > arr.length / 2
  }
  
  for(const n in elem){
    if(elem[n] > count){ 
      count = elem[n]
      majElem = n
    }
  } 
  
  return majElem
};

/*Test Cases   
majorityElement([3,2,3]) => 3
majorityElement([2,2,1,1,1,2,2]) => 2
*/