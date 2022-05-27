/*You only need one

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. */

// includes() is a method that determines whether an array includes a certain value among its entries, returning true or false


const check = (a,x) => a.includes(x);


/*Test Cases
check([12,5,6,10], 10) => Output: true
check(['dog','cat','bird'], 'lizard') => Output: false
*/