/* Two Sum - Algorithm

 Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
*/

// The parameter is an array of numbers and a sum
// We need to return pairs of numbers that equal the sum. The numbers can be used more than once
// Create an empty array for storing nested arrays containing the successful combinations of pairs that equal the target sum
// Create an object named nums to keep track of the numbers that have been checked
// For of loop iterates through each number in the array and put the value in the object
// num2 figures out the remainder of sum minus each element (the number that, when added to the current number, would equal the target sum). Then, checks if that remainder exists in the object. If it does, we’ll push both the remainder and the element into the nums array
// Finally, the function adds the current number to the nums object as a key and the value of 1, so that it can be checked in future iterations.
// Time complexity is linear. Table lookup in map objects occurs in constant time

function twoSum(arr,sum){
  const pairs = []
  const nums = {}

  for(const num1 of arr){
    const num2 = sum - num1
    if(nums[num2]){
      pairs.push([num1,num2])
    }else{
      nums[num1] = 1
    }
  }
  return pairs
};



const twoSum = (array, sum) => {
  const pairs = [];
  const store = [];

  for (let part1 of array) {
    const part2 = sum - part1;
    // if the part2 is already stored, you have a pair
    if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
    // push the current num to the stored values as you go
    store.push(part1);
  }

  return pairs;
};


// Iterate through each number in the input array and check if there is another number in the array that would add up to the target sum when added to the current number
// For example, if the target sum is 4 and the input array is [1, 2, 2, 3, 4]. The function would start by checking the first number in the array, which is 1. It would then calculate the remainder of 1 from the target sum, which is 3 (because 1 + 3 = 4). The function would then check if 3 is already in the store array. Since it's not, the function would add 1 to the store array and move on to the next number. The next number is 2, and the remainder of 2 is 2 (because 2 + 2 = 4). The number 2 would go to the store array. The loop continues to the next number, which 2. This time, the function would see that 2 is already in the store array, so it would know that 2 and 2 add up to 4. The function would then add [2, 2] to the pairs array

/*Test Cases   
twoSum([1, 2, 2, 3, 4],4)) => [[2, 2], [3, 1]]
*/