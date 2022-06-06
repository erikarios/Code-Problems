/*Sum of positive

You get an array of numbers, return the sum of all of the positives ones.Note: if there is nothing to sum, the sum is default to 0*/

//the parameter is the array of integers 
//.filter() is an array method that creats a new array. It is used to filter out how the positive integers in the array 
//.reduce() method will take in each integer in the array.
//acc is accumulator, is the value that we end with 
//curr is current element being processed in the typed array


function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((acc, curr) => acc+curr, 0);
}

/*Test Cases    
positiveSum([2,-50,-16,66,-30])  => Output: 68
positiveSum([1,2,3,4,5]) => Output: 15
*/