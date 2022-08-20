/* The 'if' function

Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2. When bool is truth-ish, func1 should be called, otherwise call the func2. */

// We need to make a function called _if, with its arguments as a logical test and two functions where the first function is executed if the boolean is true, and the second if it's false. 

function _if(bool, func1, func2) {
    return bool ? func1() : func2();
};

/*Test Cases   
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
*/