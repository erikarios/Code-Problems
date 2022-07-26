/* Sum The Strings

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string) */

// The parameter is two strings, which have a vaule
// We want to the sum of the two strings as a string
// To add the sum you need to turn the string to numbers, otherwise the string will concatenate
// The sum then needs to be turned back into a string

function sumStr(a,b) {
    let sum = Number(a) + Number(b)
    return sum.toString()
};

/*Test Cases   
sumStr("4","5") => Output: "9"
sumStr("34","5") => Output: "39"
*/