/* Don't give me five!

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive! */

// The parameter is two integers which represent a starting point and an ending point
// We want to return one integer that counts the total number of integers from the starting point to the ending point excluding the any number that contains 5
// For example: 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12  
// 15 is excluded in the above example
// We need to iterate through the numbers to figure out which numbers include 5. We can do so by using a for loop. The ending number is inclusive so that needs to be included.
// We convert the number to a string which will allow us to be able to use the .includes() method
// We can use a condtional to state that if the string does not include "5" to add it to the count
// We then return the count

function dontGiveMeFive(start, end) {
    let count = 0;

    for (let i = start; i <= end; ++i)
        if (!i.toString().includes("5"))
            count++;

    return count;
};

/*Test Cases   
dontGiveMeFive(1,9) => 8
dontGiveMeFive(4,17) => 12
*/