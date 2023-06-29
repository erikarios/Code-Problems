/* Product of consecutive Fib numbers - Codewars

The Fibonacci numbers are the numbers in the following integer sequence (Fn):0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. Given a number, say prod (for product), we search two Fibonacci numbers F(n) and 
F(n+1) verifying F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:
[F(n), F(n+1), true] if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return
[F(n), F(n+1), false]

F(n) being the smallest one such as F(n) * F(n+1) > prod.
*/

// The parameter is a number
// We need to find two consecutive Fibonacci numbers whose product matches the given input prod. We can do this by iterating through the Fibonacci sequence until we find a match
// Initialize prev to 0, representing the Fibonacci number F(n-2).
// Initialize current to 1, representing the Fibonacci number F(n-1).
// Enter a loop that continues until the product of prev and current is either equal to or greater than prod
// Calculate the next Fibonacci number, next, by adding prev and current
// Update prev to current and current to next to move forward in the Fibonacci sequence
// Once the loop ends, check if the product of the final prev and current is equal to prod
// Return an array containing prev, current, and a boolean indicating whether the product matches prod

function productFib(prod) {
  let prev = 0; // F(n-2)
  let current = 1; // F(n-1)

  while (prev * current < prod) {
    const next = prev + current; // F(n)
    prev = current;
    current = next;
  }

  return [prev, current, prev * current === prod];
};

/*Test Cases   
productFib(714) => (21, 34, true)
  Explanation: since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) => (34, 55, false)
  Explanation: since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
*/