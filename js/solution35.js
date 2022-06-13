/*Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order*/

//The parameter is the array of numbers
//.reduce() method will take in a callback function and initial vaule 
//a will take in each element of the array, unit it goes through all the elements. a will accumlate the total each time, multiplying the accumlated total to the vaule of the element (b)

const grow = x => x.reduce((a, b) => a * b);

/*Test Cases   
grow([1, 2, 3]) => Output: 6
grow([2, 2, 5]) => Output: 20
*/