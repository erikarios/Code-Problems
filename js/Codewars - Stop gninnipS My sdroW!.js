/* Codewars - Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

// The parameter is a string of words
// We need to return the same string of words, however if any word in the parameter is five or more letters long than it needs to be reversed 
// Split the string
// Array.map() method allows you to iterate over an array and modify its elements using a callback function. The argument for the function is each individual word
// Check the length of each word to see if the word is bigger than 4 characters
// Reverse the word if five letters or larger
// Join the words back into a string
// Return the string

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
};


/*Test Cases   
spinWords( "Hey fellow warriors" ) => "Hey wollef sroirraw" 
spinWords( "This is a test") => "This is a test"
spinWords( "This is another test" ) => "This is rehtona test"
*/