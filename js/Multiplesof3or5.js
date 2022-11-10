/* Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them). Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// The parameter is a number 
// We need to return the sum of the numbers that are multiples of 3 or 5 from the given argument. If the number is negative then we must return 0
// We can create a variable to add the sum of the numbers
// A for loop can be used to iterate through up to the number and we can use modulus to see if there is a remainder when dividing by 3 or 5
// We can return the sum

function solution(number){
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};


/*Test Cases   
solution([10) => 23
solution([20) => 78
solution([200) => 9168
*/