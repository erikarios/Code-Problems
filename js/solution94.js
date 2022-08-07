/* altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase */

// The parameter is a string 
// We need to return the string with alternating uppercase or lowercase characters. If there is a character that is lower case we need to make sure that we return it with as uppercase and vice versa
// Since there can be alternate uppercase and lowercase characters in a single string we can split the string into an array and create a new array which can check each character is lowercase or uppercase and change it to the opposite
// We then want to concatenate all of the elements in the new array and return a string which can be done with the join method

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase(): a.toUpperCase()).join('')
};

/*Test Cases   
"hello world".toAlternatingCase() => Output: "HELLO WORLD"
"hello WORLD".toAlternatingCase() => Output: "HELLO world"
"HeLLo WoRLD".toAlternatingCase() => Output: "hEllO wOrld"
*/