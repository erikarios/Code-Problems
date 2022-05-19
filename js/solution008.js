/*Multiplication table for number
Your goal is to return multiplication table for number that is always an integer from 1 to 10.
Note: newlines should be added between rows, but there should be no trailing newline at the end.
*/

//A new array is first created using literal notation 
//A for loop is used to iterate until we equal the number 10
//.push() is used to add each output into the empty array
//Template literals are used to create the multiplication table
//.join() is used to put the multiplication table into a single string and \n is used to create a new line after each element is pushed into the empty array

function multiTable(number) {
    let array = []
    for (let i=1; i <= 10; i++){
      array.push (`${i} * ${number} = ${number * i}`)
      }
    return array.join('\n')
  }

  /* Output 
    1 * 10 = 10
    2 * 10 = 20
    3 * 10 = 30
    4 * 10 = 40
    5 * 10 = 50
    6 * 10 = 60
    7 * 10 = 70
    8 * 10 = 80
    9 * 10 = 90
    10 * 10 = 100
  */