/*A Needle in the Haystack

Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle*/

//The parameter is the array 
//.indexOf() will search the array for an element and returns its position.


function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}

/*Test Cases   
let haystack = ['3', '123', undefined, 'needle', 2, '3', true, false];
findNeedle(haystack) => Output: 'found the needle at position 3'
*/