/* String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string) */

// The parameters are two strings
// We want to determine if the first argument (str) ends with the characters of the second argument (ending)
// We can use the .endsWith method which determines whether a string ends the characters of the specified and returns true or false

function solution(str, ending){
    return str.endsWith(ending);
};

/*Test Cases   
solution('abcde', 'cde') => Output: true
solution('abcde', 'abc') => Output: false
*/