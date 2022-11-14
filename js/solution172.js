/* String transformer

Given a string, return a new string that has transformed based on the input:
  Change case of every character, ie. lower case to upper case, upper case to lower case.
  Reverse the order of words from the input.
  Note: You will have to handle multiple spaces, and leading/trailing spaces.
  You may assume the input only contain English alphabet and spaces.
*/

// The parameter is a string of multiple words that contains both lowercase and uppercase letters
// We need to change the uppercase letters to lowercase letters and vice versa. We also need to reverse the order of the words
// Using the split method we can turn the string into an array of words
// Reverse the postion of words
// Use the join method to turn the array back into a string 
// Split the words into an array of separate elements (letters) 
// Using the map method to create a new array and use toUppercase and toLowerCase methods to change the letters
// Join the letters together and return the string


const stringTransformer = str => str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('');

/*Test Cases   
stringTransformer('Example string') => 'STRING eXAMPLE'
stringTransformer("Example Input") => "iNPUT eXAMPLE"
*/