/* Series #4 

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer. */

// The parameter is an integer
// We want to return the an integer that reflects the speed in centimeters per second
// First we need to figure out the conversions 
// There are 3600 seconds in an hour
// There are 100000 centimeters in a kilometer
// We can use Math.floor to return the largest interger that is less than or equal to a given number. In other words rounded down


function cockroachSpeed(s) {
    return Math.floor(s * 100000 / 3600);
};

/*Test Cases   
cockroachSpeed(1.08) => Output: 30
cockroachSpeed(1.09) => Output: 30
cockroachSpeed(0) => Output: 0
*/