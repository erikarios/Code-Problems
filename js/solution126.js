/* Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed */

// The parameters is an array of positive integers. The array has a minimum of four integers
// We want to return the sum of the two lowest integers in the array
// We need to sort the array from smallest to largest, add the two smallest integers, and return sum
// We can use the .sort() method to sort the elements in the array in ascending order
// We can add the first two indexes

function sumTwoSmallestNumbers(numbers) {  
    let sum = numbers.sort((a,b)=> a-b)
    return (sum[0] + sum[1])
};

/*Test Cases   
sumTwoSmallestNumbers([5, 8, 12, 19, 22]) => 13
sumTwoSmallestNumbers([15, 28, 4, 2, 43]) => 6
sumTwoSmallestNumbers([3, 87, 45, 12, 7]) => 10
*/