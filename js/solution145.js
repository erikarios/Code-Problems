/* Maximum Product

Given an array of integers, Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Notes: Array/list size is at least 2. Array/list numbers could be a mixture of positives, negatives also zeroes */

// The parameter is an array that can contain both positive and negative integers 
// We need to return the maximum product of multiplying two adjacent numbers
// We need to iterate through the array, which we can do using a for loop. We can set up the for loop to give us the vaules of multiplying each adjacent element in the array
// We can put those values into a new array using the push method
// We need to use the spread syntax which will allow the Math.max() method to be used on the all the elements of the array and return the largest value

// For example adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])
// 9*5        = 45
// 5*10       = 50
// 10*2       = 20
// 2*24       = 48
// -1 * -48   = 48
// newArr = [45, 50, 20, 48, 48] 
// Using the Math.max, the largest value is 50

function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
};

/*Test Cases   
adjacentElementsProduct([1, 2, 3]) => 6
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]) => 50
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) => -14
*/