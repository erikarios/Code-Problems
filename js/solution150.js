/* Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. */

// The parameters is a string containing a single word
// We need to return true or false depending if the string has repeating letters. If there are no repeating letters then we return true. If not, we return false.
// We can turn the string into an array and use the .split() method and we can use the .sort() method to put the the individual letters in order
// Then a for loop can be used to iterate through the array and we can check if the index that is the same as the index + 1. Since the letters are in order it would be easy to see if there are any repeated letters
// Last we return false if there are repeated letters and true if there is not any repeated letters

function isIsogram(str) {
    const arr = str.toLowerCase().split('').sort();

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        return false;
      }
    }
    return true;
};

/*Test Cases   
isIsogram("Dermatoglyphics") => true
isIsogram("isogram") => true
isIsogram("aba") => false
*/