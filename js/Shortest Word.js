/* Shortest Word

Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types
*/

// The parameter is a string containing multiple words 
// We need to return an integer that represents the length of the shortest word
// We use the split method to convert the string into an array
// Using the sort method to sort the words according to length from smallest to largest
// We can grab the index of the first word and use length property to determine the length

function findShort(s){
  let arr = s.split(' ').sort((a, b) => a.length - b.length);
  return arr[0].length
};

/*Test Cases   
findShort("bitcoin take over the world maybe who knows perhaps") => 3
findShort("turns out random test cases are easier than writing out basic ones") => 3
findShort("Let's travel abroad shall we") => 2
*/