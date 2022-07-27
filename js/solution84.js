/* Simple Pig Latin

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched */

// The parameter is a string with varying number of words in it. Strings may have punctuation marks


// We need to return a string of one or multiple words seperated by spaces with 'ay' appended to the end of each word unless that word is a punctuation mark 
// Split the string into individual words. The split each word into two parts - the first letter and the rest of the string
// Reverse the order of these parts 
// Check if part of the string is a punctuation mark, if not the add 'ay' to the end. Use a ternary
// Concatenate the words into a single string using .join()

function pigIt (string) {
    let marks = ['.', '!', '?', '"', ',']
    result = string.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
    return result
};

/*Test Cases   
pigIt('Pig latin is cool') => Output: igPay atinlay siay oolcay
pigIt('Hello world !') => Output: elloHay orldway !
*/