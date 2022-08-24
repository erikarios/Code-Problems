/* Remove an exclamation mark from the end of string

Remove an exclamation mark from the end of a string. You can assume that the input data is always a string, no need to verify it. */

// The parameter is a string
// We want to return the same string and remove the exclamation mark at the end. If there are multiples we only need to remove one 
// We can check if the string ends with an exclamation mark by using the .endsWith method
// We can use a ternary and if there is an exclamation then we can use slice to remove it. We can start with the first element in the string and then use string.length-1 to take remove the exclamation mark
// If there is no exclamation, we can return the string as it is

const remove = string => string.endsWith('!') ? string.slice(0, string.length-1) : string;
  
/*Test Cases   
remove("Hi!") => Output: "Hi"
remove("!Hi") => Output: "!Hi"
remove("Hi!!!") => Output: "Hi!!"
*/