/* Combine strings

Create a function named combineNames that accepts two parameters (first and last name. The function should return the full name */

// The parameter is two strings
// We want to combine the two strings and return a single string
// We can use template literals to do so

const combineNames = (first, last) => `${first} ${last}`
  
/*Test Cases   
combineNames('James', 'Stevens') => Output: 'James Stevens'
*/