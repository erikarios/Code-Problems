/*Count the Monkeys

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero*/

//The parameter is an integer (n)
//An array literal notation is used to create an empty
//A for loop is used and will start with the number 1 and go up to whatever interger n is
//.push () method is then used to push each integer at the end of the empty array

function monkeyCount(n) {
    let monkey = [];
    for (i = 1; i <= n; i++) {
      monkey.push(i);
    }
    return monkey;
}
  
/*Test Cases   
monkeyCount(5) => Output: [1, 2, 3, 4, 5]
monkeyCount(3) => Output: [1, 2, 3]
*/