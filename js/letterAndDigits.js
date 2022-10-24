/* Help Bob count letters and digits

Bob needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string. */

// The parameter is a string made of up letters, digits, and special characters
// We need to return a number that represents how many letters and digits there are in the given argument. Must take into accout lower and uppercase letters
// Need to iterate through the string to count the number of letters and digits
// The match() method retrieves the result of matching a string against a regular expression. The i at the end makes the regex case insensitive meaning that it doesn't matter if the letter it finds is upper- or lower-case.
// When .match() finds no matches, it returns null
// Using .length() when the array is null produces an error
// Since null is falsey, when matches is null it will return 0 here. .length() will only run if matches is truthy (so an array in this case)

function countLettersAndDigits(input) {
    const regex = /[a-z0-9]/gi
    const count = input.match(regex)
    return count ? count.length : 0
};

/*Test Cases   
countLettersAndDigits("hel2!lo") => 6
countLettersAndDigits("n!!_ice!!123") => 7
countLettersAndDigits("1") => 1
countLettersAndDigits("?") => 0
countLettersAndDigits("12345f%%%t5t&/6") => 10
countLettersAndDigits("aBcDeFg090") => 10
countLettersAndDigits("u_n_d_e_r__S_C_O_R_E") => 10
*/