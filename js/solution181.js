/* Absent vowel

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
*/

// The parameter is a string
// We need to return the index of the vowel that is missing from the string
// Store the vowels in a variable
// Loop through and see if the vowel exist inside of the string 
// Use indexOf method to grab the index of the vowels and check to see if it's in the string

function absentVowel(str){
    let vowels = 'aeiou'
    for(let i = 0; i < vowels.length; i++){
      if( str.indexOf(vowels[i]) === -1){
        return i
      }
    }
};

function absentVowel(str){
    let vowels = {
        'a': 0,
        'e': 1,
        'i': 2,
        'o': 3,
        'u': 4,
      };

      for(let i in vowels) {
        if(!str.includes(i)) return vowels[i];
      }
};

/*Test Cases   
absentVowel("John Doe hs seven red pples under his bsket") => 0
absentVowel("Bb Smith sent us six neatly arranged range bicycles") => 3
*/