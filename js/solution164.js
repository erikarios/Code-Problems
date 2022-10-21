/* Sum of array singles

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once. */

// The parameter is an array of integers 
// We need to figure out what integers aren't repeated and then calculate the sum of the non repeated integers
// We need to go through the array
// We can use the .filter() method to only get the integers occuring once
// We can check if indexOf values = lastIndexOf value
// Last we can use the .reduce() method to get the sum integers

function repeats(arr){
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a, c) => a + c, 0);
};

/*Test Cases   
repeats([4,5,7,5,4,8]) => 15
repeats([9, 10, 19, 13, 19, 13]) => 19
repeats([16, 0, 11, 4, 8, 16, 0, 11]) => 12
repeats([5, 17, 18, 11, 13, 18, 11, 13]) => 22
repeats([5, 10, 19, 13, 10, 13]) => 24
*/