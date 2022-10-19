/* Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number. */

// The parameter is an array of integers presented as strings and numbers
// We need to return the sum of integers as a number
// Since the parameter is an array we can use .reduce() method to loop through the array of numbers and sum up the total
// We need to add the zero at the end since we are dealing with a mix of numbers and strings. It will set the type to a number so the accumlation will be treated as a number
// To make sure that we are dealing with numbers we use the built in function of Number, which turns the string into a number

function sumMix(arr) {
    return arr.reduce((a,c) => Number (a) + Number (c) , 0)
};

/*Test Cases   
sumMix([9, 3, '7', '3']) => 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) => 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) => 41
*/