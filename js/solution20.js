/*Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

//parameter is an array of numbers
//.reduce() method will take in uses a callback function that runs on each element in the array.
//variable acc represent our accumulator to show how the value should accumulate after going through the elements in the array
//num represents the each element in the array
//As our reduce function works through the arr array, the acc value will increase until the function has completed.

function squareSum(numbers){
    return numbers.reduce( (acc,num) => (acc + num**2), 0)
}

/*Test Cases    
squareSum([15,-16,1]) => Output: 482
squareSum([2,-2,2]) => Output: 12
*/