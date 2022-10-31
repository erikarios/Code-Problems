/* Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

// The parameter is a string made of up characters
// We need to return a string that is made up of left and right parentheses
// Left parentheses if the character appears only once in the string or a right parentheses if the character appear more than once 
// .toLowerCase method to make sure that all the character are the same while 
// .split() method that will turn the string into an array
// Use the .map() method calls a callback function for each element in the array
// We can check if indexOf values = lastIndexOf value to check if the element appears more than once in the array
// Join the array and return a string 

function duplicateEncode(word){
    return word.toLowerCase()
    .split('')
    .map((el,i,a) => a.indexOf(el) === a.lastIndexOf(el) ? '(' : ')')
    .join('')
};

/*Test Cases   
duplicateEncode("din") => "((("
duplicateEncode("recede") => "()()()"
duplicateEncode("Success") => ")())())"
duplicateEncode("(( @") => "))(("
*/