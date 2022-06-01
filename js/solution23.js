/*Counting sheep..

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).*/


//The parameter will be an array with either true or false, with true representing present
//Need to figure out how many true statements there are.
//.filter() is an array method that creates a new array and filter out how many true statements there are
//.length will take count of the true statements and return the number


function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

/*Test Cases    
countSheeps([true,  true,  true,  false, true,  true,  true,  true]) => Output: 7
countSheeps([false,  true,  false,  false, true,  true,  false,  false]) => Output: 3
*/