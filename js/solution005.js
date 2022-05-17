/*Reversing Words in a String
You need to write a function that reverses the words in a given string.*/

//.split() - method that will turn string into array
//.reverse() - will reverse array
//.join() - concatenating all of the elements in an array

function reverse(string){
    return string.split(" ").reverse().join(" ");
  }

//Another solution to the problem
const reverse = string => string.split(" ").reverse().join(" ")


//input: "Hello World" --> expected output: "World Hello"
//input: "Hi There." --> expected output: "There. Hi"