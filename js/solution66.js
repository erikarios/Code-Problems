/* Parse nice int from char problem

You ask a small girl, "How old are you?" She always says, "x years old", where x is a random number between 0 and 9. Write a program that returns the girl's age (0-9) as an integer. Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number. */

// The parameter is a string
// We want the function to return an integer
// parseInt() receives a string and returns an integer number if a number is present inside the string. If no number is present, it returns NaN

function getAge(inputString){
    return parseInt(inputString);
};

/*Test Cases   
getAge("4 years old") => Output: 4
*/