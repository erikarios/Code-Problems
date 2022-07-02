/* Third Angle of a Triangle

You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested. */

// The parameters are two numbers, which represent interior angles. We need to find out what the third angle
// First we need to understand that the total measures of interior angles of a triangle total to 180°
// I created another variable to hold the sum of a and b. I did this for readability purposes 
// Last we subtract the total of 180 minus the sum 

function otherAngle(a, b) {
    let sum = a + b
    return (180 - sum)
};

/*Test Cases   
otherAngle(30, 60) => Output: 90
otherAngle(60, 60) => Output: 60
*/