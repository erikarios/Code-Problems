/* Codewars - Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not.
*/

// The parameter is an array of strings
// We need to an array with elements containing only four letters
// Check the length of each element in the array. If there are four letters than we keep that element
// Use filter to check the length

function friend(friends){
  return friends.filter(el => el.length === 4)
};

/*Test Cases  
Example 1:
    Input: ["Ryan", "Kieran", "Mark"]
    Output: ["Ryan", "Mark"]

Example 2:
    Input: nums = ["Ryan", "Jimmy", "123", "4", "Cool Man"]
    Output: ["Ryan"]

Example 3:
    Input: nums = ["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]
    Output: ["Jimm", "Cari", "aret"]
*/