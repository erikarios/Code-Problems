/* Verifying an Alien Dictionary - Leetcode

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters. Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Constraints:
  1 <= words.length <= 100
  1 <= words[i].length <= 20
  order.length == 26
  All characters in words[i] and order are English lowercase letters.
*/

// The parameter is words and the order of letters, which is both strings. The words parameter is an array 
// We need to return true or false depending if the words that we are given are sorted lexicographically from the alien language we were given. All the letters are lowercase
// Need to create a map object to hold all the letters of the alien language and assign the position of each of the characters
// First we need to compare each word in the given array, which is why we use length-1
// We then need to compare each individual character of the words 
// words[i] is taking a look at individual words
// words[j] is looking at the individual letters

var isAlienSorted = function(words, order) {
  let map = {}

  for(let i = 0; i < order.length; i++){
    map[order[i]] = i
  }

  for (let i = 0; i < words.length - 1; i++){ 
    for (let j = 0; j < words[i].length; j++) {
        if (j >= words[i+1].length) return false  //checking if there is an empty charcter. An example is comparing apple to app
        if (words[i][j] == words[i+1][j]) continue // if the individual letters are the same continue. Ex: word and world are the same until the letter 'l'. 
        let pos1 = map[words[i][j]]
        let pos2 = map[words[i+1][j]]
        if (pos1 < pos2) break
        else return false
    }
  }
  return true
};

/*Test Cases  

Example 1:
  Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
  Output: true
  Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
  Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
  Output: false
  Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:
  Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
  Output: false
  Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character.
*/