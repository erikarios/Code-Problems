/* Methods of String object--toUpperCase() toLowerCase() and replace()

Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.
We translate the sentence into an alien language according to the following rules:
Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language */

// There is one parameters which is a string. The string is a sentence
// We want to return the same string with each word in the sentence being uppercase except the last character of each word
// We can use the .split() method to turn the string into an array and separates each given word in the string
// For example "My name is John" would be split into ["My", "name", "is", "John"]
// We can then use the .map() method to create a new array
// word.slice(0,-1) takes the first element through the second to last element
// That would look like ["M","nam","i","Jho"]
// We can thenk use .toUpperCase() to make those elements uppercase. So we have ["M","NAM","I","JHO"]
// word.slice(-1) takes the last element and we use .toLowerCase() to make sure that it's lowercase
// We can concatenate the string array element using ‘+’ sign
// We then use the .join() method again to put the words together into one string, making sure there is a space between the joined words
// Resulting in this: "My NAMe Is JOHn"


function alienLanguage(str){
    return str.split(' ').map(word => word.slice(0,-1).toUpperCase() + word.slice(-1).toLowerCase()).join(' ');
};

/*Test Cases   
alienLanguage("My name is John") => Output: "My NAMe Is JOHn"
alienLanguage("this is an example")  => Output: "THIs Is An EXAMPLe"
alienLanguage("Hello World") => Output: "HELLo WORLd"
*/