/* Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

// The parameters is a string containing a single word
// If the string length is odd, then we need to return a single middle chracter. If the string length is even, then we need to return the two middle characters.
// We need to figure out the length of the string so we can determine how many characters to return. We can do so using .length
// We can use the slice method to get the middle character(s). The slice() method extracts a section of a string and returns it as a new string. slice(indexStart, indexEnd)

function getMiddle(s){
    return s.slice((s.length-1)/2, s.length/2+1)
};

/*Test Cases   
getMiddle("test") => "es"
getMiddle("testing") => "t"
getMiddle("middle") => "dd"
*/
