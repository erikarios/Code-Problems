/* Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number */

// The parameter is the array of numbers, some of will be a string 
// reduce() method will be used to add together the vaules and return the total
// acc is accumulator, the total value
// curr is the vaule of the current element being processed in the array
// Number() is put in front of acc and curr to make sure that any strings are taken in as numbers to get the correct total

function sumMix (x) { 
    return x.reduce ((acc , curr) => Number(acc) + Number(curr) , 0 ) ;  
};

/*Test Cases   
sumMix([9, 3, '7', '3']) => Output: 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) => Output: 42
*/