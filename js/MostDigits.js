/* Most digits 

Find the number with the most digits. If two numbers in the argument array have the same number of digits, return the first one in the array. */

function findLongest(array){
    return Number(array.map(el => String(el)).sort((a,b) => b.length - a.length)[0]);
}

/*Test Cases   
findLongest([1, 10, 100]) => 100
findLongest([9000, 8, 800]) => 9000
findLongest([8, 900, 500])  => 900
*/