/* Jewels and Stones - Leetcode

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels. Letters are case sensitive, so "a" is considered a different type of stone from "A".

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

// The parameters are two strings
// We need to return an integer representing the number of stones that are also jewels. So how many characters in jewels is found in stones
// We have to compare each character of jewels to each character of stones
// Create a map object
// Create an output variale and set that to 0
// If the character of jewels is found in stones, we increase the output count by 1
// Loop through the jewels string. Put each character of jewels inside of map and set the value equal to true
// Loop through the stones string. If the character of stones matches the characters of jewel, increment output variable by one
// Return the count variable
// Time complexity: O(jewels + stones)
// Space complexity: O(jewels)

var numJewelsInStones = function (jewels,stones){
  const js = {}
  let count = 0

  for(const jewel of jewels){
    js[jewel] = true // {a: true, A: true}
  }

  for(const stone of stones){
    if( stone in js ){
      count++
    }
  }
  return count
};

/*Test Cases  
numJewelsInStones("aA", "aAAbbbb") => 3
numJewelsInStones("z", "ZZ") => 0
*/