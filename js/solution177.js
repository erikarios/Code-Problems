/* Lost number in number sequence

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:
    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.
    If no number was deleted from the starting array, your function should return the int 0.
Note: N may be 1 or less (in the latter case, the first array will be []).
*/

// The parameter are two arrays of numbers. The first array is an ordered sequence of numbers and the second array is an array of the same numbers however they are not in sequence
// We need to return the integer that is missing from the second array. If no integer was missing then we need to return 0
// We need compare the second array to the first array
// We can compare the length of the arr to the length of the mixArr and if it's equal we return to 0
// Using the reduce method we can figure out the total sum of each array and then subtract the first array from the second. Since there will be one missing integer subtracting the totals will produce the number


function findDeletedNumber(arr, mixArr){
    if(arr.length === mixArr.length){
      return 0
    }else{
      let arrSum = arr.reduce((a,c) => a + c, 0)
      let mixSum = mixArr.reduce((a,c) => a + c, 0)
      return arrSum - mixSum
    }
};

// function findDeletedNumber(arr, mixArr) {
//     return arr.filter(n => mixArr.indexOf(n) === -1 )[0] || 0
// };

/*Test Cases   
findDeletedNumber([1,2,3,4,5], [3,4,1,5]) => 2, 'Deletion'
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) => 5, 'Deletion'
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) => 0, 'No deletion'
*/