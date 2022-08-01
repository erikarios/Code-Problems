/* Code Challenge

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned */

// The parameters are two strings. One will be a word (str) and the other will be a single letter (letter)
// We want to return the total number of times that the parameter of letter appears in the word
// We want to go over the individual letters in the given word
// We need to split the string into individual letters. We can do that by using split to turn the string into an array
// To go over the individual letters in the string we can use filter to see if any of the letters equal the parameter of the individual letter we are looking for
// We use length to return the number of characters in array match the individual letter we are looking for

// A breakdown: return str.split('') // ["H","e","l","l","o"] .filter(c => c === letter) // ["H"] .length; // 1 }

function strCount(str, letter){  
    return str.split('').filter((c) => c === letter).length;
};

/*Test Cases   
strCount('Hello', 'o') => Output: 1
strCount('Hello', 'l') => Output: 2
strCount('', 'z') => Output: 0
*/