/* Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!
*/

// The parameter is two interger which can be positive or negative
// We need to return the sum of the integers between and including them. If the integers are the same then we return that number
// We can use Math.min to figure out the smallest number and use Math.max to figure out the largest number
// Using Gauss summation we can add linear numbers in a list without having to iterate over every element
// For example GetSum(1, 2)
      // return (2 - 1 + 1) * (1 + 2) / 2;
      // return (2 * 3) / 2
      // return 6 / 2 = 3
// The algorithm is a constant time algorithm O(1).

const GetSum = (a, b) => {
  let min = Math.min(a, b)
  let max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
};

/*Test Cases   
GetSum(1, 0) => 1 (1 + 0 = 1)
GetSum(1, 2) => 3 (1 + 2 = 3)
GetSum(0, 1) => 1 (0 + 1 = 1)
GetSum(1, 1) => 1 (1 since both are same)
GetSum(-1, 0) => -1 (-1 + 0 = -1)
GetSum(-1, 2) => 2 (-1 + 0 + 1 + 2 = 2)
*/