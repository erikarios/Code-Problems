/* Find the middle element

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple) */

// The parameter is an array of three integers which can contain positive or negative values
// We want to return the index of the middle value in the array. For example in the array of [2, 3, 1], the index would be 0. 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0. We do not want to change the order of the array. 
// We can sort the array in order from smallest to largest. We can do so using the .sort() method, in ascending order, a - b
// Spread syntax allows an iterable such as an array expression to be expanded in places where zero or more arguments (for function calls) or elements (for array literal) are expected
// We can use the .indexOf() method to indicate that we want to get the index of the middle element in the array
// Last we return the index

function gimme (triplet) {
    let middle = triplet.indexOf([...triplet].sort((a,b) => a - b)[1])
    return middle
};

/*Test Cases   
gimme([2, 3, 1]) => 0
gimme([5, 10, 14]) => 1
gimme([-5.2, -10.6, 14]) => 0
*/