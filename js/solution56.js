/* Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. */

// There are two parameter that we are given is a number between 1-12
// We can divide the parameter that we are given by 3. We we be given a decimal or whole number
// We use the function Math.ceil() to round up the number up to the next largest integer, and give us the quarter of the year
// Note that this solution is not taking into account if the arguments were strings or if the number is over 12 since the problem is stating that we will be given an integer that will correspond to the month


const quarterOf = month => Math.ceil(month / 3);

/*Test Cases   
quarterOf(3) => Output: 1
quarterOf(8) => Output: 3
*/