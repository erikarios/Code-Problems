/*Remove String Spaces
Simple, remove the spaces from the string, then return the resultant string.
*/

//.split() is a method that will turn a string into array
//The space character inside split (' ') is specified in this parameter to separate the string whenever a space occurs
//.join() is a method that concatenates the elements in an array and returns a string 
//There is no separator when join('') is used. This will remove all the spaces in the original string


const noSpace = x => x.split(' ').join('')


/*Test Cases
noSpace('b o b') => Output: 'bob'
*/