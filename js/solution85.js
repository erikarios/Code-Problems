/* Powers of 2

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). */

// The parameter is one integer
// We want to return an array with all the integers that
// Set up an empty array. Then use a for loop to iterate through numbers starting at 0
// ex: powersOfTwo(4) => 2^0 = 1 , 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16
// Return the array

function powersOfTwo(n){
    let arr = [];
    for(let i=0; i<=n; i++)
      arr[i] = 2**i;
    return arr;
};

/*Test Cases   
powersOfTwo(1) => Output: [1, 2]
powersOfTwo(4) => Output: [1, 2, 4, 8, 16]
*/