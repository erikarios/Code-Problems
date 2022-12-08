/* Codewars - Sum of Multiples

Find the sum of all multiples of n below m
Keep in Mind
    n and m are natural numbers (positive integers)
    m is excluded from the multiples
*/

// The parameter is two numbers
// We need return the sum of all the multiples of n that is below m
// If the n is bigger than m then you already know that it's invalid
// Store the sum result in a separate variable
// Use a for loop to start at n and iterate until reaching the number of m
// Add the sum
// Return the sum

function sumMul(n,m){
    if (n >= m) return "INVALID";
  
  let sum = 0;
    for (let i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
};

/*Test Cases  
Example 1:
    Input: (2, 9)
    Output: 2 + 4 + 6 + 8 = 20

Example 2:
    Input: (3, 13)
    Output: 3 + 6 + 9 + 12 = 30

Example 3:
    Input: (4, -7)
    Output: "INVALID"
*/