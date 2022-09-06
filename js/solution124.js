/* Unique string characters

You will be given two strings a and b and your task will be to return the characters that are not common in the two strings */

// The parameter is two strings with letters
// We want to return a single that contains letters that were not common in both strings
// We need to go through the string and look at each character in the string to figure out what kind of character it is
// Using the split method, we can split the string into individual letter
// We can use the filter method to filter out which characters are not included in parameter a or parameter b
// We can then join together the letters and return them as a single string

function solve(a,b){
    return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
};

/*Test Cases   
solve("xyab","xzca") => "ybzc"
-The first string has 'yb' which is not in the second string. 
-The second string has 'zc' which is not in the first string. 

solve("xyabb","xzca") => "ybbzc"]
solve("xxx","xzca") => "zca"
*/