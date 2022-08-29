/* Fix string case

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
    -make as few changes as possible.
    -if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase. */

// There is one parameters which is a string. The string will contain a mix of uppercase and lowercase letters
// We want to return the same string in either all lowercase or all uppercase
// If there is a majority of lower case letters then, we need to make sure that we return the string as lowercase. If there is a majority of uppercase letters then, we need to return the string as uppercase. If there is an equal number of uppercase and lowercase letters then, we need to return the string as lowercase
// We need to go through the string and look at each letter and figure out if the letter is uppercase or lowercase. We can do that using a for loop
// First we can set up two variables: lowerCaseNum and upperCaseNum and set them to 0
// We can use the for loop to iterate through the string and use a conditional to add by one to either the lowerCaseNum variable or the upperCaseNum variable
// We can use another condition that states if the number of lowercase letters is higher than or equal to the number of uppercase letters than return the string with all lowercase letters, if not then return the string in all uppercase letters
// We use .toLowerCase() and .toUpperCase() method to change the entire string

function solve(s){
    let lowerCaseNum = 0
    let upperCaseNum = 0

    for (let i = 0; i <= s.length-1; i += 1){

        if (s[i] === s[i].toLowerCase()) {
            lowerCaseNum += 1
        }else {
            upperCaseNum += 1
        }
    }
    
    return lowerCaseNum >= upperCaseNum ? s.toLowerCase() : s.toUpperCase()
}

/*Test Cases   
solve("code") => Output: "code"
solve("CODe") => Output: "CODE"
solve("COde") => Output: "code"
solve("Code") => Output: "code"
*/