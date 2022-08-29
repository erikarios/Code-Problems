/* Sort array by string length

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length */

// There is one parameters which is an array containing strings of varying lengths 
// We want to return the same array in order from shortest length to longest length
// The sort() method will allows us to sort elements of an array and return the sorted array
// We can use the compare function of the sort() method to change the position of the elements in the original array
// We can sort the array by using the length property
// For ascending sort order: a.length - b.length 

const sortByLength = array => array.sort((a,b) => a.length - b.length);

/*Test Cases   
sortByLength(["Beg", "Life", "I", "To"]) => Output: ["I", "To", "Beg", "Life"]
sortByLength(["", "Moderately", "Brains", "Pizza"])  => Output: ["", "Pizza", "Brains", "Moderately"]
*/