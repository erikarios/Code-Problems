/*Grasshopper - Personalized Message

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case	            return
name equals owner	'Hello boss'
otherwise	'Hello guest' */

//The parameter would produce either a true or false vaule, which is the condition 
//The conditional (ternary) operator is represented by the question mark (?)
//If the parameter of name is equal to the parameter of owner then the condition is true and an output of 'Hello boss', however if it is false it will give an output of 'Hello guest'



const greet = (name, owner) => (name === owner) ? "Hello boss" : "Hello guest"

/*Test Cases   
greet('Daniel', 'Daniel') => Output: "Hello boss"
greet('Greg', 'Daniel') => Output: "Hello guest"
*/