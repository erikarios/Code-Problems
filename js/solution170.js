/* Digits explosion

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. */

// The parameter is a string made of up of digits
// We need to return a string will that repeats each digit the number of times equal to the value. For example if the digit 5 appears in the argument it needs to appear '55555' in the string that we return
// .split() method that will turn the string into an array
// Use the .map() method calls a callback function for each element in the array
// s.repeat() will repeat the string n times
// Join the array and return the string 

// function explode(s) {
//     return s.split('').map(el => el.repeat(el)).join('')
// };

const explode = s => s.split('').map(el => el.repeat(el)).join('');

/*Test Cases   
explode("312") => "333122"
explode("102269") => "12222666666999999999"
*/