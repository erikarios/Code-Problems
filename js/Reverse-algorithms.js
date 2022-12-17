/* Reverse - algorithms

Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method
*/

// The parameter is a string
// We need to return the string with the characters in reverse without using the reverse method
// Normally the path would be to use the split method to turn the string into an array. This would allow for the string to be split into an array of individual characters. Then the reverse method would be used to change the order of the characters. Last the join method would combine the character back into a string 
// Set a variable of reverseStr and have it be empty
// Using the for of loop we can iterate through every character of the string. So the for of loop would take the first character and that would be in the variable of reverseString. Then on the second iteration the next character in the string would be added to reverseString. This will continue until we go through the whole string. 
// So if the string is "car", first iteration--> reverseString = c + ""; second iteration --> reverseString = a + c; third iteration --> revereString = r + ac
// Last we return the reverse string 

function reverseString(str){
  //return str.split('').reverse().join('')
  let reverseStr = ""
  for(let char of str){
    reverseStr = char + reverseStr
  }
  return reverseStr
};

/*Test Cases   
reverseString('car') => 'rac'
reverseString('bob') => 'bob'
reverseString('john') => 'nhoj'
reverseString('sarah') => 'haras'
*/