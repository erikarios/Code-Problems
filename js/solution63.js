/* Sum without highest and lowest number

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. Mind the input validation. */

// The parameter is the array of numbers
// A conditional is set that if the the array and the array length (the total number of elements in the array), are greater than one then sum up the numbers if not then return 0
// If the conditions are met then we first need to do is put the vaules in order
//.sort((a,b) => a-b), will sort the elements in the array and return the negative, zero, and positive values in ascending order. 
// The array returned has been sorted in an ascending order, from lowest to highest
// .slice() is then used to remove the highest and lowest vaule in the array
// .reduce() method is then used to add together the vaules and return the total
// acc is accumulator, the total value
// curr is the vaule of the current element being processed in the array


function sumArray(array)  {
    if(array && array.length > 1) {
        const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
        return sortedArray.reduce((acc, cur) => acc + cur, 0)
    }else{
      return 0
    }    
};

/*Test Cases   
sumArray(null)  => Output: 0
sumArray([ 3, 5 ])  => Output: 0
sumArray([ 6, 2, 1, 8, 10 ])  => Output: 16
*/