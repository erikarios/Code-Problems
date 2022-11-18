/* The average length

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array. If the average length is not an integer, use Math.round(). The input array's length > 1
*/

// The parameter is an array of strings
// Need to figure out how the average of the argument. Using the join method we can turn the array into a string and we can take the length of it. Then we need to divide that by the array length to get the average
// We need to use Math.round() to make sure that the average gets rounded up to a whole integer
// Use map to create a new array and repeat the average length

function averageLength(arr) { 
    const avgLength = Math.round(arr.join('').length / arr.length)
    return arr.map(str => str[0].repeat(avgLength))
};

/*Test Cases   
averageLength(['u', 'y']) => ['u', 'y'] // average length is 1
averageLength(['aa', 'bbb', 'cccc']) => ['aaa', 'bbb', 'ccc'] // average length is 3
averageLength(['aa', 'bb', 'ddd', 'eee']) => ['aaa', 'bbb', 'ddd', 'eee'] average length is 2.5 round up to 3
*/