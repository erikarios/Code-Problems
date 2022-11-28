/* Switcheroo

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// The parameter is a string
// We need to return the string with the positions of the letters a and b switched but leave letter c in the same position 
// We can create a shallow copy using the spread syntax
// Then using map we can iterate through the string and look at each letter and turn the 'a' into 'b' and vice versa
// Make sure to use join to return a string back

function switcheroo(str){
    return [...str].map(l => l == 'a' ? l = 'b' : l == 'b' ? l = 'a' : l).join('');
};

/*Test Cases   
switcheroo('abc') => 'bac'
switcheroo('aaabcccbaaa') => 'bbbacccabbb'
switcheroo('ccccc') => 'ccccc'
*/