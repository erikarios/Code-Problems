/* Contamination #1 -String

An AI has infected a text with a character!! This text is now fully mutated to this character. If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!! */

// The parameter is two strings
// We want the output to be the parameter of char but with the same character length of the parameter of text
// We need to figure out how many characters there are in the string of text. We can do that by using .length
// We can use .repeat method to repeat the parameter of string by the length of the parameter of text

function contamination(text, char){
    return char.repeat(text.length)
} 

/*Test Cases   
contamination("abc","z") => Output: "zzz"
contamination("_3ebzgh4","&", => Output: "&&&&&&&&"
*/