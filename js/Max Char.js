/* Max Char

Given a string of characters, return the character that appears the most often.

  describe("Max Character", () => {
  it("Should return max character", () => {
    assert.equal(max("Hello World!"), "l");
  });
  });

No String or Array Methods! 
*/

// The parameter is a string of characters  
// We need to return the character that appears most in the string
// We need to loop through the string and count the characters 
// Using an object literal, the characters are the keys and the count are the values 
// The first loop iterates through the given string. If the same character appears in the string then one is added to the count variable
// Then, we can iterate through the object (character map) to find the character that has the largest count
// Return the character 
// Time complexity is linear. Space complexity is constant

function maxCharacter(str){
  let charMap = {},
      count = 0,
      maxChar = null

  for(const char of str){
    charMap[char] = charMap[char] + 1 || 1
  }

  for(const char in charMap){
    if(charMap[char] > count){
      count = charMap[char]  
      maxChar = char
    }
  }
  return maxChar
};

/*Test Cases   
maxCharacter("Hello World!") => 'l'
*/