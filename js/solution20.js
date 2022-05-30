/*Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

//parameter is an array of numbers
//.reduce() method will take in 
//0 represents the inital vaule
//callback function that runs on each element in the array.
//It uses a return statement to show how the value should accumulate after each iteration of the array
// As our reduce function works through the arr array, the acc value will increase until the function has completed.

function squareSum(numbers){
    return numbers.reduce( (acc,val) => (acc + val**2), 0)
}


/*Test Cases
squareSum([15,-16,1]) => Output: 482
squareSum([2,-2,2]) => Output: 12
*/