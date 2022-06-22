/*Calculate average

Write a function which calculates the average of the numbers in a given list. Empty arrays should return 0.*/

//The goal is to return the average of the numbers if the array isn't empty.
//Used a condtional that states if there are zero elements in the array then return 0
//.length is used to grab the total number of elements in the array
//Else we need to return the average. To figure out the average, you need to figure out the vaule of the combined numbers and divide it by the total number of elements.
// .reduce() method will take in each integer in the array
//acc is accumulator, the total value
//curr is the vaule of the current element being processed in the array

function find_average(array) {
    if (array.length === 0) {
       return 0;
    }else {
    return array.reduce((acc, curr) => acc+curr, 0) / array.length;
    }
}

/*Test Cases   
find_average([1,2,3]) => Output: 2
find_average([1,2,3,4]) => Output: 2.5
*/