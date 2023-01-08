/* Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

// The parameter is an integer
// We need to return the integer in descending order, to return the highest number
// We need to turn the input into a string so we can use the split method
// Use the split method to convert the string into an array
// Use the sort method to put the numbers from lowest to highest 
// The reverse method will change the numbers so it's highest to lowest
// Use join to turn the array back into a string 
// parseInt will convert the string into a number

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
};

/*Test Cases   
descendingOrder(42145) => 54421
descendingOrder(145263) => 654321
descendingOrder(123456789) => 987654321
*/