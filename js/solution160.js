/* Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even. */

// The parameter is a string 
// We need to return an array that contains the same string one however, one string needs to have the even indexes capitalize and the other string needs to have the odd indexes capitalize
// Convert the string into an array using the .split() method 
// Using the .map() method will create a new array, under the condtion of checking if the index is even or odd
// Use the .toUpperCase() method to capitalize the letter
// Convert the array back to a string using the .join() method
// Return the even and odd in an array

function capitalize(str) {
    const even = str.split('').map((i, index) => index % 2 === 0 ? i.toUpperCase() : i).join('');
    const odd = str.split('').map((i, index) => index % 2 !== 0 ? i.toUpperCase() : i).join('');
    return [even, odd];
};

/*Test Cases   
capitalize("abcdef") => ['AbCdEf', 'aBcDeF']
capitalize("codewars") => ['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra") => ['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize("codewarriors") => ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
*/