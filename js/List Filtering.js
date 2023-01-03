/* List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

// The parameter is an array that contains 
// We need to return the array with only integers
// We can use the array method of filter and put in the condition to check if the character in the array is not a string
// The typeof operator is used to make sure the integers stay in the array.

function filter_list(l) {
  return l.filter( char => typeof char != 'string');
};

/*Test Cases   
filter_list([1,2,'a','b']) => [1,2]
filter_list([1,'a','b',0,15]) => [1,0,15]
filter_list([1,2,'aasf','1','123',123]) => [1,2,123]
*/