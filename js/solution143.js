/* Sum of Minimums!

Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row. Note: You will always be given a non-empty list containing positive values */

// The parameter is a two-dimensional array which contains integers
// We want to return the sum of the minimum vaule from each array

//For Example:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26

// We need to iterate through the array, which we can do using a for loop
// We need to use the spread syntax which will allow the .Math.min() method to be used on the all the elements of the array and allow us to flatten the array
// Last we return the total of the minimums

function sumOfMinimums(arr) {
    let total = 0;
    
    for (let i = 0; i < arr.length; i++){
     total += Math.min(...arr[i])
    }
    
    return total;
};

/*Test Cases   
sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) => 9
sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]) => 76
*/