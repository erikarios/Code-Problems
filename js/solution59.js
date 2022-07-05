/* Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

// The parameter is the array of numbers, some of will be a string 
// .split() - method that will turn a string into array and remove the all the exclamation marks 
// .join() - will concatenate all of the elements in an array and give

function removeExclamationMarks(s) {
    return s.split('!').join('');
};

/*Test Cases   
removeExclamationMarks("Hello World!") => Output: "Hello World"
*/