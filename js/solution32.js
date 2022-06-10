/*Multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. 0*/

//The parameter is one number, which is n
//Use modulus to determine if the number given is even or odd

//A conditional ternary operator was used in this solution
const simpleMultiplication = n => (n % 2 === 0) ? n * 8 : n * 9

//Another way to solve the problem
function simpleMultiplication(n) {
    if (n % 2 === 0){
    return n * 8
  }else {
    return n * 9
  }
}

/*Test Cases   
simpleMultiplication(2) => Output: 16
simpleMultiplication(1) => Output: 9
*/