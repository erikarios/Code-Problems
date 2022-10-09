/* Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */

// The parameter is a single string containing one or many words and may contain spaces
// We need to replace the same string with each word reversed and include the spaces as well
// We need to split the words so we can reverse each word. We can use the .split() method to turn the string into array. 
// For example: 'The quick brown fox jumps over the lazy dog.' would be split into:
//   [
//     'The',   'quick',
//     'brown', 'fox',
//     'jumps', 'over',
//     'the',   'lazy',
//     'dog.'
//     ]
// We can use the .map() method to create a new array, and we can return the new array. So each word would be a new array. We can then use the .split() method to separate the words into individual letters in each array. 
//  [
//     [ 'T', 'h', 'e' ],
//     [ 'q', 'u', 'i', 'c', 'k' ],
//     [ 'b', 'r', 'o', 'w', 'n' ],
//     [ 'f', 'o', 'x' ],
//     [ 'j', 'u', 'm', 'p', 's' ],
//     [ 'o', 'v', 'e', 'r' ],
//     [ 't', 'h', 'e' ],
//     [ 'l', 'a', 'z', 'y' ],
//     [ 'd', 'o', 'g', '.' ]
//  ]
// Then we can use .reverse() which will reverse the elements in the array
//  [
//     [ 'e', 'h', 'T' ],
//     [ 'k', 'c', 'i', 'u', 'q' ],
//     [ 'n', 'w', 'o', 'r', 'b' ],
//     [ 'x', 'o', 'f' ],
//     [ 's', 'p', 'm', 'u', 'j' ],
//     [ 'r', 'e', 'v', 'o' ],
//     [ 'e', 'h', 't' ],
//     [ 'y', 'z', 'a', 'l' ],
//     [ '.', 'g', 'o', 'd' ]
//   ]
// The .join() method needs to be again to concatenate the reversed elements
//  [
//     'ehT',   'kciuq',
//     'nworb', 'xof',
//     'spmuj', 'revo',
//     'eht',   'yzal',
//     '.god'
//   ]
//Last we want to concatenate all of the elements and return a string which we can do with the join method which would output: 
//ehT kciuq nworb xof spmuj revo eht yzal .god

 function reverseWords(str) {
     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};

/*Test Cases   
reverseWords('The quick brown fox jumps over the lazy dog.') => 'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords('apple') => 'elppa'
reverseWords('a b c d') => 'a b c d'
*/