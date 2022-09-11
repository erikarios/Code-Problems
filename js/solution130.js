/* Testing 1-2-3

Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

// The parameter is an array containing strings
// We want to return an array that is numbering each element in the parameter that we are given. We want the format to be "n: string". The numbering starts at 1
// We need iterate through each element in the array and add a line number and add a colon and a space between the line number and the element. We can use the .map() method to iterate through each element and create a new array
// We can use template literals to create the format of n: string. Then we can return the array

const number = function(arr){
    return arr.map((element, index) => `${index + 1}: ${element}`)
};


