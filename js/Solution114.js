/* Methods of String object

Implement a function which accepts 2 arguments: string and separator. The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces*/

// There are two parameters: string and separator. The separator will give us an indication on how the string is to be joined back together 
// We want the output to be one string that is separated by the given parameter
// We can use the .split() method to turn the string into an array that separates each given word in the string.
// For example "Hello World!" would be split into ["Hello", "World!"]. That would allow us to ensure that the spaces between the words isn't counted
// We can then use the .map() method to create a new array. So we would be taking each element, which is the individual words in the array and split them into individual characters. Then we can use the .join(separator) method to concatenating all of the elements in an array by our given parameter 
// It would look like this [ 'H.e.l.l.o', 'W.o.r.l.d.!' ]
// We then use the .join(" ") method again to put the words together into one string, making sure there is a space between the joined words
// Resulting in this: "H.e.l.l.o W.o.r.l.d.!"


function splitAndMerge(string, separator) {
   return string.split(" ").map((word) => word.split("").join(separator)).join(" ");
}

/*Test Cases   
splitAndMerge("My name is John", " ") => Output: "M y n a m e i s J o h n"
splitAndMerge("Hello World!", ".") => Output: "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("My name is John", "-") => Output: "M-y n-a-m-e i-s J-o-h-n"
*/