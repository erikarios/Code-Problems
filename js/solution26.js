/*Century From Year

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.*/


//The parameter is the year
//Dividing the year 100, will give us the number of the century 
//Math.ceil() will round up the number up to the next largest integer, which will give us the correct century

const century = year => Math.ceil(year/100)

/*Test Cases    
century(1705) => Output: 18
century(1900) => Output: 19
century(89) => Output: 1
*/