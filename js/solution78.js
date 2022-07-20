/* Is it even?

In this Kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not). The function needs to return either a true or false. Numbers may be positive or negative, integers or floats. Floats with decimal part non equal to zero are considered UNeven for this kata */

// The parameter is an integers
// We need to return the difference true or false depending if the integer is even
// This is tested by using the remainder operator (%) 


function testEven(n) {
    return n % 2 === 0
};

/*Test Cases   
testEven(-4) => Output: true
testEven(0.5) => Output: false
*/