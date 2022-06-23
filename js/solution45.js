/*Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0. Example : n=5 --> [5,4,3,2,1]*/

//The parameter is a number (n)
//The first step is to create an empty array using literal notation 
//A for loop is used and will start with the number 1. i will go up to whatever number (n) is given as the parameter 
// .unshift will add each element (i) to the beginning of the array

const reverseSeq = n => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
    arr.unshift(i);
    }return arr;
};

/*Test Cases   
reverseSeq(6) => Output: [6, 5, 4, 3, 2, 1]
reverseSeq(3) => Output: [3, 2, 1]
*/