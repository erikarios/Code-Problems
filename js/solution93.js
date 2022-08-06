/* Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome. */

// The parameter is a string 
// We want to determine if the string is a palindrome, meaning if the word reads the same backward as forward. An example of this is racecar
// We need to take into account that the string can be lowercase or uppercase. We need to make sure to make the the string lower case to account for that
// We also need to split the string into seperate characters so we can reverse them. We can do that by using the split will turn the string into an array. Reverse will reverse the characters in the array. Last we want to concatenate all of the elements in an array and return a string which we can do with join 

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

/*Test Cases   
isPalindrome("Abba") => Output: true
isPalindrome("hello") => Output: false
*/