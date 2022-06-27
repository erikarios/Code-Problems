/*Count of positives / sum of negatives

Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.*/

// two variables need to be set to 0, postitiveNums and negativeNums
// If the array is empty or null, we are asked to return an empty array
// If the input is not empty or null, the next step is to figure out which numbers are greater than zero or less than zero. The forEach() method is used for this and it goes through each element in the array 
// A conditional expression is used to count the positive numbers, and add the sum of the negative numbers
// If the number is greater than 0, the increment operator ++ is used to count how many positive numbers
// If the number is negative, the += operator is used to add all of the negative numbers
// Last, we need to return positiveNums and negativeNums as an array 

function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}

/*Test Cases   
input ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) => Output: [10, -65]
*/