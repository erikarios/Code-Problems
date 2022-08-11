/* Squash the bugs

Output should be the length of the longest word, as a number*/

// The parameter will be a string
// We need to return an integer the represents the length of the longest word in the string
// Math.max returns the largest of number
// We can use spread syntax in function calls. The spread syntax will pass the string as individual words 
// We can then use map to create a new array that will return the length of each element

const findLongest = str => Math.max(...str.split(" ").map(x => x.length));

/*Test Cases   
findLongest("Lets all go on holiday") => Output: 7
findLongest("Take me to tinseltown with you") => Output: 10
*/