/* Sort by Last Char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. If two words have the same last letter, the returned array should show them in the order they appeared in the given string. All inputs will be valid.
*/

// The parameter is a string of words
// We want to return an array in which we sort each indivdual word in order by the last letter of each word
// We can do so using the .sort() method, in ascending order, a - b

function last(x){
    return x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
};

/*Test Cases   
last('man i need a taxi up to ubud') => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano') => ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak') => ['take', 'me', 'semynak', 'to']
*/