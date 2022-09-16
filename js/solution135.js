/* Small Enough

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers */

// There are two parameters: an array of numbers and an integer
// We want to return true if all the numbers in the array are smaller than the integer that was given. Otherwise return false.
// We need to iterate through the numbers in the array to see if the numbers are less than the limit given. We can do so by .every() method. It will allow us to go through every element in the array.
// The .every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value

const smallEnough = (a, limit) => a.every(num => num <= limit)

/*Test Cases   
smallEnough([66, 101], 200) => True
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) => False
smallEnough([101, 45, 75, 105, 99, 107], 107) => True
*/

// Initally my solution was using the .find() method which is correct however, an extra step of a condtional is needed
// const smallEnough = (a, limit) => a.find(num => num >= limit) ? false : true

