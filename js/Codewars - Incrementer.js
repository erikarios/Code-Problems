/* Codewars - Incrementer

Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 (and not 0). Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
    return an empty array if your array is empty
    arrays will only contain numbers so don't worry about checking that
*/

// The parameter is an array of numbers 
// We need return the array which each number incremented by it's position in the array. The first position will be 1 in this case. The array can only have single digits so if there is a double digit we must return the last digit
// Use the .map() method to create a new array. So we would be taking each number and index. Sum the index + number + 1, since we have to start counting from 1. Every index needs to be summed one,
// We can use the % operator so it returns only the remainder of the division which would be the second digit

function incrementer(nums) { 
    return nums.map((n,i)=> (i + n + 1) % 10)
};

/*Test Cases  
Example 1:
    Input: [1, 2, 3]
    Output: [2, 4, 6]   ([1+1, 2+2, 3+3])

Example 2:
    Input: [4, 6, 9, 1, 3]
    Output: [5, 8, 2, 5, 8]    ([4+1, 6+2, 9+3, 1+4, 3+5]
                                (9+3 = 12  -->  2)
*/
