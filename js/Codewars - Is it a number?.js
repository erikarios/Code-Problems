/* Codewars - Is it a number?

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.*/

// The parameter is a string of numbers
// We need to return true or false 
// parseFloat() function is used to accept the string and convert it into a floating point number. If the string does not contain a numeral value or if the first character of the string is not a Number then it returns NaN

const isDigit = s => s == parseFloat(s);

/*Test Cases   
isDigit("3") => True
isDigit("  3  ") => True
isDigit("-3.23") => True
isDigit("3-4") => False
isDigit("  3   5") => False
isDigit("3 5") => False
isDigit("zero") => False
*/