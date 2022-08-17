/* Filling an array 

We want an array, but not just any old array, an array with contents! Write a function that produces an array with the numbers 0 to N-1 in it */

// The parameter will be an integer
// We need to return an array that iterates to the given parameter
// We can create an empty array using literal notation
// We can use the push method to add each integer into the empty array
// We return the array

const arr = n => {
    const arr = [];
    for(let i = 0; i < n; i+=1) {
      arr.push(i);
    }
    
    return arr;
};

/*Test Cases   
arr(5) => Output: [0,1,2,3,4]
arr(10) => Output: [0,1,2,3,4,5,6,7,8,9]
*/