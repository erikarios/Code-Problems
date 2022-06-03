/*Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.*/


//Turn numbers into strings
//Split into strings into an array
//.map() will create a new array
//.reverse() will reverse the elements in the array

function digitize(n) {
    return String(n).split('').map(Number).reverse()
} 

/*Test Cases    
digitize (348597) => Output: [7,9,5,8,4,3]
*/