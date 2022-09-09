/* Ones and Zeros

Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4 */

// The parameter is an array containing ones and zeros of varaying length 
// We want to return an integer that is equivalent of the binary vaule represented in the array
// First we need to convert the array to a string to preserve all the elements in the array. We can use the join() method to get the binary form as a string
// We can use the parseInt() method to convert the string of the binary form to an integer. The parseInt() method can take in two arguments, the string we want to convert and the base (the base for binary is 2)

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};

/*Test Cases   
binaryArrayToNumber([0,0,0,1]) => 1
binaryArrayToNumber([0,0,1,0]) => 2
binaryArrayToNumber([1,1,1,1]) => 15
*/