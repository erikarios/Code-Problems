/* Remove duplicate words

Your task is to remove all duplicate words from a string, leaving only single (first) words entries */

// The parameter is a string that contains duplicate words
// We need to return the same string but remove the duplicate words
// Convert the string into an array using the .split() method 
// Set objects are collections of values. A value in the Set may only occur once
// Create an array from the set objects which removes the duplicates
// Last convert the array back to a string using the .join() method

function removeDuplicateWords (s) {
    const set = new Set(s.split(' '))
    return Array.from(set).join(' ')
};

/*Test Cases   
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') => 'alpha beta gamma delta'
*/