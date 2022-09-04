/* Convert an array of strings to array of numbers

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers */

// The paramete is an array that is a string of numbers
// We want to return the same array of numbers as numbers and not strings 
// We can use the map function to iterate over the array
// We can use Number to change the string into numbers

function toNumberArray(stringArray){
    return stringArray.map(Number)
};

/*Test Cases   
toNumberArray(["1.1","2.2","3.3"]) => [1.1,2.2,3.3]
*/