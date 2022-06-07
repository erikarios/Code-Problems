/*Lost Without a Map

Given an array of integers, return a new array with each value doubled*/

//The parameter is the array of integers
//.map() will create a new array, and we can return the new array under the condtion of doubling each integer (n) in the array


function maps(x){
    return x.map(n => n * 2);
}

/*Test Cases   
maps([1, 2, 3]) => Output: [2, 4, 6]
maps([4, 1, 1, 1, 4]) => Output: [8, 2, 2, 2, 8]
*/