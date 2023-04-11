/* Codewars - Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string.
*/

// The parameter is numbers
// We need the sum of those numbers into binary
// Add the the numbers and then use the toString() method which returns a string representing the specified number value. Use the radix option to specify the base of 2 so it will be binary

function addBinary(a,b){
    return (a+b).toString(2)
};

/*Test Cases  
Example 1:
    Input: 1, 1 
    Output: "10" (1 + 1 = 2 in decimal or 10 in binary)

Example 2:
    Input: nums = 5, 9
    Output: "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/