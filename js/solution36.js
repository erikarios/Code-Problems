/*Array plus array

I want to get the sum of two arrays...actually the sum of all their elements. Each array includes only integer numbers*/

//The parameter is two arrays of integers
//Concat was used to merge the two arrays into one array. Reduce was then used to go through each element in the merged array and add all the numbers to find the sum.
//.reduce() method will be used to calculate the sum of the elements in the array. Reduce will go through each element in the array
// a will be the previous accumlated total 
// b will be current element 

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b);
}
  

/*Test Cases   
const arr1 = [1, 2, 3,];
const arr2 = [4, 5, 6,];

arrayPlusArray(arr1, arr2) => Output: 21
*/