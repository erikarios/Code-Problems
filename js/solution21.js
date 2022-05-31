/*Convert boolean values to strings 'Yes' or 'No'

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

//The parameter would produce either a true or false vaule, which is the condition 
//The conditional (ternary) operator is represented by the question mark (?)
//If the condition is true it will give an output of 'Yes', however if it is false it will give an output of 'No'
// (100 > 50) is shown as true because 100 is greater than 50
// ('3' !== 3 ) is true because the (!==) is evaluating that the vaules are not equal in type and in vaule
// ('5' === 5 ) is false because string '5' is not equal in type and vaule to number 5


let boolToWord = bool => bool === true ? "Yes" : "No"

/*Test Cases    
boolToWord(100 > 50) => Output: 'Yes'
boolToWord('3' !== 3) => Output: 'Yes'
boolToWord('5' === 5) => Output: 'No'
*/