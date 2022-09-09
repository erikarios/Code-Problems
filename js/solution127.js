/* Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1                      = 1
          3     5                   = 8   = 2^3
       7     9    11                = 27  = 3^3
   13    15    17    19             = 64  = 4^3
21    23    25    27    29          = 125 = 5^3

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

// The parameters is an integer that corresponds to a given row of a triangle of consecutive odd numbers with n rows that starts at 1
// We want to return the sum of nth row
// The pattern is each row is n^3. For example in the second row, 3 + 5 = 8, which is 2^3 

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
};

/*Test Cases   
rowSumOddNumbers(1) => 1
rowSumOddNumbers(42) => 74088
*/