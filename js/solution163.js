/* Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. You just need to write a script. Return the average of the given array rounded down to its nearest integer. The array will never be empty. */

// The parameter is an array of integers 
// We need to return the average of number ans round up to the nearest integer
// Loop through the array to get the sum

const getAverage = arr => Math.floor( arr.reduce((a,c) => a +c ) / arr.length );

/*Test Cases   
getAverage([2,2,2,2]) => 2
getAverage([1,2,3,4,5,]) => 3
getAverage([1,1,1,1,1,1,1,2]) => 1
*/