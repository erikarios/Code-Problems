/* Remove consecutive duplicate words

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.
*/

// The parameter is a string containing duplicate words some of which are consecutive
// We need to return the same string however, the duplicate consecutive words must be removed
// Using split we can turn the string into an array of words
// We need to compare the words to see if they are consecutive duplicates
// Using filter we can look at the element (each word), the index, and the array
// We check to see if the word is not equal to the the word before
// Using join we can turn the array back into a string

const removeConsecutiveDuplicates = str => str.split(' ').filter((w,i,a) => w != a[i-1]).join(' ')

/*Test Cases   
removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') => 2, 'alpha beta gamma delta alpha beta gamma delta'
*/