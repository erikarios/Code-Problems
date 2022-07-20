/* Difference of Volumes of Cuboids

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger. For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8 */

// The parameter is two arrays, each have three integers
// We need to first calculate the volume of each cuboid and then return the difference
//.reduce() method will take in each integer in each array and multiply them, which will give us the volume
//acc is accumulator, is the value that we end with 
//curr is current element being processed in the typed array
// The Math.abs() function will return the absolute value of a number 


function findDifference (a, b) {
    return Math.abs(a.reduce((acc, curr) => acc * curr) - b.reduce((acc, curr) => acc * curr))
};

/*Test Cases   
findDifference([3, 2, 5], [1, 4, 4]) => Output: 14
findDifference([9, 7, 2], [5, 2, 2]) => Output: 106
*/