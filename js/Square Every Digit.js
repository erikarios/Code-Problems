/* Square Every Digit

In this kata, you are asked to square every digit of a number and concatenate them.For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer
*/

// The parameter is a number 
// We need to square each individual number and return one number
// We need to separate each number, square it, and then join them back together
// To use the join method we first need to turn the number into a string 
// Split then can be used to separate the individual numbers into an array
// Using map we can put the condtion to square each element and then join back the array
// Last we wrap it all up in Number() to ensure that a number is returned

function squareDigits(num){
    return Number(String(num).split('').map((x) => x*x).join(''))
};

/*Test Cases   
squareDigits(3212) => 9414
squareDigits(2112) => 4114
squareDigits(0) => 0
*/