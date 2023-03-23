/* Codewars - Find the divisors!

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' */

// The parameter is a number
// We need to return an array with number(s) that are the divisors of the given parameter. The numbers must be in order from smallest to largest
// If the number is prime, we must return the string '(integer) is prime'
// Create a variable that contains an empty array
// For loop to iterate through the integer and check what numbers are a divisor of the given parameter. To be the divisor of a number, the factor number should exactly divide the number with 0 remainder
// We start at 2 because we are told the integer is bigger than 1
// The modulus operator % is used to check if num is exactly divisible. 
// In each iteration, a condition is checked if num is exactly divisible by i. If it is, push the numbers into the empty array.
// Return the array, if it's not empty. If it is we return the string stating that the integer is prime

// function divisors(integer) {
//     let arr = []
//     for (let i = 2; i < integer; i++){
//         if (integer % i === 0){
//             arr.push(i)
//         }
//     }
//     if (arr.length == 0){
//         return `${integer} is prime`
//         } else {
//             return arr
//         }
// };

function divisors(integer) {
    let arr = []
    for (let i = 2; i < integer; i++){
        if (integer % i === 0){
            arr.push(i)
        }
    }
    return arr.length > 0 ? arr : `${integer} is prime`;
};

/*Test Cases   
    divisors(12) => [2,3,4,6]
    divisors(25) => [5]
    divisors(13) => "13 is prime"
*/