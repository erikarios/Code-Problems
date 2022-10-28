/* Array combinations

In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6]. Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates */

// The parameter is an array that contains array
// We need to return a number that represents the unique number of combinations we can make with each unique number in each array. Diplicates are not to be counted 
// Figure out the total unique number in each of the sub arrays
// Use the .map() method to grab each element in the array
// Use reduce to multiply each unique number from the arrays. Reduce will take the current value and multiply it by the accumulator
// Set will remove the duplicate values in the array and we

// function solve(arr) {
//     return arr.map(sA => new Set(sA).size).reduce((a,c)=> a*c)
// };

const solve = arr => arr.reduce((a,c)=> a * new Set(c).size,1)

/*Test Cases   
solve([[1,2],[3,4],[5,6]]) => 8
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]) => 72
*/



console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]))