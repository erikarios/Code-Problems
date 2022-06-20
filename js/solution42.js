/*Find Maximum and Minimum Values of a List

Your task is to make two functions that receive a list of integers as input and return, respectively, the largest and lowest number in that list*/


//The Math.min() function returns the smallest of the numbers.
//The Math.max() function returns the largest of the numbers.
//We need to use (...list) so we can extract data from the arrays into distinct variables. If we only put (list) then we will get back Nan
//This is the destructuring assignment syntax 

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list); 

/*Test Cases   
min([-52, 56, 30, 29, -54, 0, -110]) => Output: -110
max([4,6,2,1,9,63,-134,566]) => Output: 556
*/