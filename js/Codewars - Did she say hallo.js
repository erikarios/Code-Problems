/* Codewars - Did she say hallo?

You received a whatsup message from an unknown number. Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish

Notes
    - you can assume the input is a string.
    - function should be case insensitive to pass the tests
*/

// The parameter is a string 
// We need true or false depending if the string is from one of the languages stated in the problem
// Use i to account for case sensitivity 

function validateHello(greeting) {
     res = /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i.test(greeting)
     return res
};

/*Test Cases  
Example 1:
    Input: 'ahoj'
    Output: true

Example 2:
    Input: 'meh'
    Output: false
*/