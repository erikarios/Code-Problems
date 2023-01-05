/* Ransom Note - Algorithm

Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});

*/

// The parameter is a string of words
// We need to determine if the parameter matches with the words that are in the magazine. If they do we return true, otherwise we return false
// Create a hashmap containing all the words from the magazine
// Loop through the words in out given parameter and check if they exist in the hashmap
// Split the note into individual words 
// Split the magazine words into individual words
// Create a variable of possible and set to true
// Create an object 
// The first loop iterates through the magazine words. If the word is not in the magazineHash object, then it will be added. If the word is already in the object then the value will increment by one
// Check each ransom word against the magazineHash. If the word exist then we decrease the value inside the hash. We do this until we loop through all the words in our note. 
// If the frequency of the words that appear in the note are below 0 or the word doesn't exist then we return false.
// Otherwise we return true
// Time complexity is linear. Table lookup in map objects occurs in constant time

function ransomNote(note, magazine){
  const noteWords = note.split(" ")
  const magazineWords = magazine.split(" ")
  const magazineHash = {}
  let possible = true

  for(const word of magazineWords){
    magazineHash[word] = magazineHash[word] + 1 || 1
  }

  for(const word of noteWords){
    if(magazineHash[word]){
      magazineHash[word]--
      if(magazineHash[word] < 0) return false
    }else{
      return false
    }
  }
  return possible
};

/*Test Cases   
ransomNote("sit ad est sint") => true
ransomNote("sit ad est love") => false
ransomNote("sit ad est sint in in") => true
ransomNote("sit ad est sint in in in in") => false
*/