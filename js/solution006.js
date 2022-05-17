/*Palindrome Strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first..*/

//.toString() - used to turn everything into a string. Need to do this be able to use split, reverse, and join. Need to account if the parameters are numbers
//.split() - method that will turn string into array
//.reverse() - will reverse the array
//.join() - concatenating all of the elements in an array
//if it is a palindrome expected outcome is true. If not expected outcome is false.

const isPalindrome =  line => line.toString() === line.toString().split('').reverse().join('')

/*Test Cases
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/