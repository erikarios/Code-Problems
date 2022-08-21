/* Find the Remainder

Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value. Division by zero should return NaN.
*/

// The parameters are two integers
// We want to return the remainder of the of dividing the larger vaule by the smaller vaule. If a number is divided by 0, then we need to return NaN
// So we can write an if statement that checks if the number is being divided by 0. If so we need to make sure to return NaN
// We can use a ternary operator that states if n is larger n is larger than m return the remainder of that division. Otherwise if n is NOT larger than m return the remainder of the division of m % n.

function remainder(n, m){
    if(n > m && m === 0){
        return NaN
    }else if (m > n && n === 0){
        return NaN
    }   
    else {
        return (n > m) ? n % m : m % n;
    }
}; 
  
/*Test Cases   
remainder(17,5) => Output: 2
remainder(13, 72) => Output: 7
remainder(0, 1) => Output: NaN
remainder(0, -1) => Output: 0
*/