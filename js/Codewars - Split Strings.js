/* Codewars - Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
*/

// The parameter is a string
// We need return an array breaking the string into pairs. If an odd number then the second character in the pair must be replaced with _


// Use split to turn the string into an array
// Create a variable to hold the array of pairs 
// Use a for loop to iterate through the array, and in every iteration add two to the value of "i", so it iterates every two elements
// Inside of this loop check if there is another element next to the one being iterated. If there is, it's a pair and push it to the results array
// If not, push the current element plus an underscore to the results array
// Return the result array


function solution(str){
    let arr = str.split('')
    let results = []
 
    for(let i = 0; i < arr.length; i += 2){
      if(arr[i+1]) res.push(arr[i] + arr[i+1])
      else res.push(arr[i] + '_')
    }
 
   return results
 };

/*Test Cases  
Example 1:
    Input: 'abc'
    Output: ['ab', 'c_']

Example 2:
    Input: 'abcdef'
    Output: ['ab', 'cd', 'ef']
*/