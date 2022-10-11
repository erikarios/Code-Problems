/* Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word Note: anagrams are case insensitive. Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. */

// We are given two string parameters
// We need to figure out if the the parameters are anagrams. 
// If the strings are anagrams then the strings will contain all the same letters. We need to figure out if the strings contain the same letters.
// We can use the .split() method to turn the string into an array
// The .sort() method to sort the letters in alphabetical order
// We then use the .join() method to concatenating all of the elements and return a string
// Last we can compare the two strings to see if the letters in the strings are the same

var isAnagram = function(test, original) {
    let t = test.toLowerCase().split('').sort().join('');
    let o = original.toLowerCase().split('').sort().join('');
    return (t==o)
};

/*Test Cases   
isAnagram("foefet", "toffee") => true, 'The word foefet is an anagram of toffee'
isAnagram("Buckethead", "DeathCubeK") => true, 'The word Buckethead is an anagram of DeathCubeK'
isAnagram("dumble", "bumble") => false, 'Characters do not match for test case dumble, bumble'
*/