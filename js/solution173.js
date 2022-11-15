/* Find the middle element

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements. The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

// The parameter is an array of three integers which can contain positive or negative values
// We want to return the index of the middle value in the array
// We can sort the array in order from smallest to largest. We can do so using the .sort() method, in ascending order, a - b
// Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literal) are expected. It creates a shallow copy of the original array
// We can use the .indexOf() method to indicate that we want to get the index of the middle element in the array, which will always be index 1

// function gimme (arr) {
//     return arr.indexOf([...arr].sort((a,b) => a - b)[1])
// };

const gimme = arr => arr.indexOf([...arr].sort((a,b) => a - b)[1])

/*Test Cases   
gimme([2, 3, 1]) => 0
gimme([5, 10, 14]) => 1
gimme([-5.2, -10.6, 14]) => 0
*/