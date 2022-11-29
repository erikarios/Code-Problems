/* Filter the number

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur
*/

// The parameter is a string with letters and numbers
// We need to return just the numbers from the string 
// ParseInt() function parses a string argument and returns an integer of the specified
// We can use the .replace() method to replacd all non-digit characters with empty strings


function filterString(value) {
    return parseInt(value.replace(/\D/g, ''))
};

/*Test Cases   
filterString("123") => 123
filterString("a1b2c3") => 123
filterString("aa1bb2cc3dd") => 123
*/