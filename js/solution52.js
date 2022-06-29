/*Count by X

Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array */

// The two parameter are x and n
// x is the number that we want multiples of. It's the first number we start with 
// n represents the number of multiples that we want of x
// The first step is to set an empty array using literal notation since we are being asked to return an array
// A for loop is then used to iterate through n number of times
// i will equal 1 and will be incremented by one each time
// Since we are trying to figure out the multiples of x by n times, (x * i) will be used and after each iteration it will be pushed at the end of the array using the push() method 
// Last you have to return the array

function countBy (x, n) {
    let arr = [];

    for (let i = 1; i <= n; i++){
        arr.push(x * i);
    }
    return arr;
}

/*Test Cases   
countBy(1,10) => Output: [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) => Output: [2,4,6,8,10]
*/