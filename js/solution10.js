/*Hello, Name or World!
Define a method hello that returns "Hello, Name!" to a given name, or says "Hello, World!"" if a name is not given (or passed as an empty String). Assuming that name is a String and it checks for user typos to return a name with a first capital letter
*/

//Create a conditional 
//name[0] will grab the first letter of the name 
//.toUpperCase() will capitalize the letter the first letter
//.slice(1).toLowerCase() will make sure the parameter is all lower case starting from the second letter in the name.

function hello(name) {
    if (name == null || name == ""){
      return 'Hello, World!'
    } else{
    return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
    }
  }

/*Test Case
if name(jOHN) expected output is 'Hello John!'
if name not given or if name('') expected output is 'Hello, World!'
*/