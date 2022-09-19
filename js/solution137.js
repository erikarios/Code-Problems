/* Two Oldest Ages

The two oldest ages function needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age]. The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format */

// The parameter is an array of numbers in random order
// We want to return an array containing the two largest numbers from the given parameter. The second highest number has to be first in the array followed by the highest.
// We can put the array in order from largest to smallest. We can do so using the .sort() method, in descending order, b - a
// We can take out two largest numbers by the index and put them in an array. We can do so using literal notation.

function twoOldestAges(ages){
    let oldest = ages.sort((a,b) => b-a )
    return([oldest[1], oldest[0]])
};

/*Test Cases   
twoOldestAges([1,5,87,45,8,8]) => [45, 87]
twoOldestAges([6,5,83,5,3,18]) => [18, 83]
*/