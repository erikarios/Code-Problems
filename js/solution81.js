/* Is the string uppercase?

Create a method to see whether the string is ALL CAPS. In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS */

// The parameter a string
// We need to return true or false indicating if the string is uppercase.

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
};

/*Test Cases   
'c'.isUpperCase() => Output: false
'C'.isUpperCase() => Output: true
*/