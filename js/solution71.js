/* Removing Elements

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. None of the arrays will be empty */

// The parameter will be an array of either integers or strings
// We need to return the a new array with ever second element removed
// .filter() - filters down to just the elements from the given array that pass the test implemented by the provided function
// The test in this case is if the index is equal to zero when using the remainder operator (%)
// Note that the filter() method is set up in which it takes in the element first and then the index. The element isn't needed in this case

function removeEveryOther(arr){
    return arr.filter((elem, index) => index % 2 === 0)
};

/*Test Cases   
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => Output: [1, 3, 5, 7, 9]
removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) => Output: ['Hello', 'Hello Again']
*/