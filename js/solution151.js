/* Mumbling

This time no story, no theory. The examples below show you how to write function accum. */

// The parameters is a string containing letters
// We need to return the respective letter repeated n times based on it’s position in the string. The first instance of the letter must also be capitalized
// Spread syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. 
// We can use spread syntax to convert the string to an array and then use the .map() method to create a new array. The map() method creates a new array populated with the results of calling a provided function on every element. We will need also need the index when using map in this case because we want to repeat the letter n times based on it's position
// We can use the repeat() method to return the specified number of copies of the string on which it was called, concatenated together.
// Last we use the join() method and specify how we want the letters to be joined together

function accum(s) {
	return [...s].map((element, index) => (element.toUpperCase() + element.toLowerCase().repeat(index))).join("-")
};

/*Test Cases   
accum("abcd") => "A-Bb-Ccc-Dddd"
accum("RqaEzty") => "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") => "C-Ww-Aaa-Tttt"
*/