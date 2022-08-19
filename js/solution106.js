/* Remove duplicates from list

Define a function that removes duplicates from an array of numbers and returns it as a result. The order of the sequence has to stay the same */

// The parameter will be an array of integer
// We need to return an array that has removed any duplicates of the same integers within the array. The array has to be returned in the same order
// We can use the filter method to get a subset of the original array based on specific criteria
// indexOf finds the first appearance of an item, so if its index doesn't match the current one, the item is filtered out. It parses the repetition based on the position of the item in array
//If the array contains some "NaN" values, "indexOf" will be ignore all of them

const distinct = a => a.filter((item, index) => a.indexOf(item) === index);

/*Test Cases   
distinct([1,2]) => Output: [1,2]
distinct([1,1,2]) => Output: [1,2]
*/