/* Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once */

// The parameter is a string
// Use .split() is a method that will turn the string into an array
//.map() will create a new array and repeat the character 
//.join() will concatenate all of the characters together

const doubleChar = (str) => str.split("").map(c => c + c).join("");

/*Test Cases   
doubleChar("abcd") => Output: "aabbccdd"
doubleChar("Adidas") => Output: "AAddiiddaass"
*/