/* Expressions Matter

Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, (). In other words, try every combination of a,b,c with [*+()] , and return the Maximum Obtained 

Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
Repetition in numbers may occur.
You cannot swap the operands */

// There are three parameters which will all be integers
// We need to return the highest integer 
// Math.max() function returns the largest of the zero or more numbers given as input parameters

function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a + b * c,
      (a + b) * c,
      a * b * c,
      a * b + c,
      a * (b + c)
    )
};

/*Test Cases   
expressionMatter(2, 1, 2) => Output: 6
expressionMatter(2, 1, 1) => Output: 4
*/