/* Codewars - Count the divisors of a number

Count the number of divisors of a positive integer n. Random tests go up to n = 500000 */

// The parameter is a number
// We need to return a number that represents the number of how many divisors there are
// For loop to iterate through the number and check if the number is a factor of the number.To be the factors of a number, the factor number should exactly divide the number with 0 remainder
// The modulus operator % is used to check if num is exactly divisible
// In each iteration, a condition is checked if num is exactly divisible by i. If it is, push the numbers into the empty array.
// Return the array length, which will give you the number of elements in the array

function getDivisorsCnt(n){
    let arr = []
    for(let i = 1; i <= n; i++) {
        if(n % i == 0) {
            arr.push(n[i]);
        }
    }
    return arr.length
};

/*Test Cases   
The numbers between parentheses are shown only for you to see which numbers are counted in each case
    getDivisorsCnt(4) => 3 (1, 2, 4)
    getDivisorsCnt(5) => 2 (1, 5)
    getDivisorsCnt(12) => 6 (1, 2, 3, 4, 6, 12)
    getDivisorsCnt(30) => 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/