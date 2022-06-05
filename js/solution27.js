/*Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.*/

//Since the operator is input as a string, it cannot be applied directly to value1, value2. Therefore, an if conditional statement was used.

function basicOp(operation, value1, value2){
    if (operation=="+"){
      return value1 + value2;
    }
    if (operation=="-"){
      return value1 - value2;
    }
    if (operation=="*"){
      return value1 * value2;
    }
    if (operation=="/"){
      return value1 / value2;
    }
}

/*Test Cases    
basicOp('+', 4, 7) => Output: 11
basicOp('-', 15, 18) => Output: -3
*/