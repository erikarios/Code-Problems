/* Recursion #1 - Factorial 

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120. The value of 0! is 1.

You have to create the function factorial that receives n and returns n!. You have to use recursion. 
*/

// The parameter is an integer
// We need to return the factorial of the integer provided
// So with recursion the function will call itself until the condition is met
// The first condition will be to check if the integer is bigger than 2. If the integer is smaller than 2, then the function will return 1 and stop. It is the base of recursion
// If the integer is larger than 2 than the second conditional will run 

function factorial(n) {
    if (n < 2) {
      return 1;
    }
    else {
      return n * factorial(n - 1);
    }
};

/* function factorial(n) {
  return (n > 1) ? n * factorial(n-1) : 1;
};

/*Test Cases   
factorial(0) => 1
factorial(1) => 1
factorial(2) => 2
factorial(3) => 6
*/