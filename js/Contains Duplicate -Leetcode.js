/* Contains Duplicate - Leetcode

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/

// The parameter is an array of integers
// We need to return true if any integer in the array appears at least twice and false if there are no repeated integers
// Create an object 
// Use a for loop to iterate through the array and grab each integer 
// Using a condition, check to see if that number exist inside of the numsMap object
// If the number exist inside the numMap object, return true and exit the loop. A duplicate has been found
// If the number is not in the numMap object, then it will add the number to the object and continue to loop through the array
// If no duplicates are found once the for loop as been completed, return false

function containsDupes(arr){
  let numsMap = {}
  for(let i = 0; i < arr.length; i++){
    let num = arr[i]
    if(numsMap[num]){
      return true // {1: true, 2: true, 3: true,}
    }else{
      numsMap[num] = true
    }
  }
  return false
};

// Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references
// has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not
// add() method inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set
// The complexity is O(N) 
// The space requirement is O(N)

  function containsDupes(nums) {
    let data = new Set();
    for (let x of nums) {
        if (data.has(x)) {
            return true;
        }
        data.add(x);
    }
    return false;
};


/*Test Cases   
containsDuplicate([1,2,3,1]) => true
containsDuplicate([1,2,3,4]) => false
containsDuplicate([1,1,1,3,3,4,3,2,4,2]) => true
*/