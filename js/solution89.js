/* Moving Zeros To The End

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements */

// The parameters is a single array with multiple types of elements including: numbers, strings, and booleans
// We want to return a single array with the same elements but the zeros are moved to the end of the array. The other elements should remain in the same location in the array
// Need to iterate over the starting array and identify the zeros. We could move the existing zeros and move them to the end of the array. We could count the zeros, remove them, then append the correct number of zeros to the end of the array
// Iterate through the original array and assign each vaule to a new array depending on if the element is zero or not. Join the two arrays together 


function moveZeros(array) {
    let other = []
    let zeros = []
    for (let i = 0; i < array.length; i++ ){
        array[i] === 0 ? zeros.push(array[i]) : other.push(array[i])
    }
    return([...other,...zeros])
};

//Another way I did this solution was 

function moveZeros(arr) {
    let zeros = arr.filter((num) => num === 0)
    let newArr = arr.filter((c) => c !== 0)
    return ([...newArr,...zeros])
};

/*Test Cases   
moveZeros([false,1,0,1,2,0,1,3,"a"]) => Output: [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) => Output: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
*/
