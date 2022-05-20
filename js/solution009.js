/*Capitalization and Mutability
Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/

//.charAt(0) is used to grab the first letter of the word which is index 0
//.toUpperCase() will 
//The .replace(letter, Uppercase letter) method will first take in the first letter and replace it with a uppercase letter.

const capitalizeWord = word => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

/*Test Case
const capitalizeWord = word => puppy.replace(word.charAt(0), puppy.charAt(0).toUpperCase());
    capitalizeWord('puppy') expected output is 'Puppy'
*/