/* Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

// The parameter is a string that contains x and o. The string may contain other characters as well
// We need to return a true if there is the same amount of x and o in the string or if there isn't any x and o in the string. We need to return false when there isn't an equal number of x and o
// Make all the characters lowercase, break up the string to count the x and o, then compare them
// Create two variables to count the o and x
// Use a for loop to iterate through the string and when there is an o or x, it will go to the variable
// Use conditons to check if the character is 'x' or 'o' and add that to the respective variable count
// Last we compare the count of x to the count of o. If equal, true will be returned

function XO(str) {
    let x = 0
    let o = 0

    for (let i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === "x") {
            x++;
        } else if (str[i].toLowerCase() === "o") {
            o++;
        }
    }
    return x === o;
};

// Another way to do this problem is to make the str lowercase and then use the split method to convert the string into an array
// Then we can use array method of filter with the condition to check for the of character 'x' and compare the length of that string to that of the filtered string that has the character of 'o'

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
};

/*Test Cases   
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
*/