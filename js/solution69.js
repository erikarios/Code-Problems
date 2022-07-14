/* Will there be enough space?

Bob is working as a bus driver. However, he has become popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he wants you to write a simple program telling him if he will be able to fit all the passengers You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take */

// There are three parameters which will all be integers
// Need to return 0 if there is enough space. If not we need to return the number of passengers that don't fit on the bus
// Use a conditional operator 
// If the total number of people who wanted to get on the bus (on + wait) is more than total amount of people the bus can hold, then return the vaule of the subtracting the two totals. Otherwise return 0 to indicate there is enough space


function enough(cap, on, wait) {
    return (on+ wait > cap) ? (on + wait) - cap : 0;
};

/*Test Cases   
enough(10, 5, 5) => Output: 0
enough(100, 60, 50) => Output: 10
*/