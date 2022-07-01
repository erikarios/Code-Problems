/* Can we divide it?

Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b */

// We use the modulo operator, %, to check if the number parameter is divisible by another a and b 
//The modulo operator gives the remainder. If a number is evenly divisible by a and be, the operation will return 0.
//Since we are returning a boolean, we will write a return statement that checks if number is divisible by a and b

function isDivideBy(number, a, b) {
    return (number % a === 0) && (number % b === 0);
}

/*Test Cases   
isDivideBy(-12, 2, -6) => Output: true
isDivideBy(-12, 2, -5) => Output: false
*/