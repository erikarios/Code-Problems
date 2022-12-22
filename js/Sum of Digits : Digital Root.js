/* Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// The parameters are an integer
// If that value has more than one digit, we need to continue reducing until a single-digit number is produced
// If n is less than 10 (if n becomes a single digit number), The return n
// If our given integer is greater than 9, we need to change the integer into a string and use the split method to turn the string into an array of single digits
// Use reduce to add the digits together, making sure to turn it back into an integer (+d)
// If it is not a single digit the process repeats until it is
// Return the value

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce((acc, d) =>  acc + +d, 0));
};

/*Test Cases  
digitalRoot(16) => 7
digitalRoot(456) => 6
*/