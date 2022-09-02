/* Limit string length - 1

The function must return the truncated version of the given string up to the given limit followed by "..." if the result is shorter than the original. Return the same string if nothing was truncated */

// There are two parameters: a string and a number
// We want to return the string up to the that is cut off after the number and add '...' at the end of the string. If the length of the string is less than or equal to the given number, just return the string unchanged
// We can use an if else statement with our conditionals
// If the string is bigger than the limit, then we can use the slice method from 0 to the given number
// Remember that the zero index is the first element in the string
// We can concatenated '...'to the end of string and return the string

function solution(string,limit){
  if (string.length <= limit) {
    return string
  } else
  return string.slice(0, limit) + '...'
};

/*Test Cases   
solution('Testing String', 3) => 'Tes...'
solution('Testing String', 8) => 'Testing ...'
solution('Test', 8) => 'Test'
*/