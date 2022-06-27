/*Sum Arrays

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.*/

// The parameter is the array of numbers
// reduce() method will be used to take each number in the array and add together the total
//acc is accumulator, the total value
//curr is the vaule of the current element being processed in the array

const sum = nums => nums.reduce((acc, curr) => acc + curr, 0)

/*Test Cases   
sum([]) => Output: 0
sum([1, 5.2, 4, 0, -1]) => Output: 9.2
*/