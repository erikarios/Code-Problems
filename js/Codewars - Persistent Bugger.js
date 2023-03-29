/* Codewars - Persistent Bugger

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit 
*/

// The parameter is one number
// We need return a single digit that represents how many times the number needed to be multiplied to get to only one digit
// Create a variable to count the number of times the number had to be multiplied so it gets to only one digit
// Use a while loop to iterate until the length of the digit is 1
// Turn the number into a string and check if the length is bigger than 1
// Use split to turn the string into an array of single digits
// Use the reduce function on the array of digits, multiplying them together to get a single digit. The initial value of the accumulator is set to 1 which does not change the value since we are multiplying. The unary plus operator (+) is used to convert each digit in the array of digits from a string back to a number before being multiplied with the accumulator. 
// It will keep iterating until it becomes a single digit. The count will note how many times it iterates
// When num becomes a single digit the count is returned

function persistence(num) {
    let count = 0;
    while(num.toString().length > 1){
      num = num.toString().split('').reduce((acc, el) => acc *= +el, 1)
      count++
    }
    return count
  };


/*Test Cases  
Example 1:
    Input: 39
    Output: 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)

Example 2:
    Input: 999
    Output: 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)

Example 3:
    Input: 4
    Output: 0 (because 4 is already a one-digit number)

Example 4:
    Input: 25
    Output: 2 (because 2*5 = 10, 1*0 = 0)
*/