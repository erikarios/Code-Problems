/* Count characters in your string

Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.
*/

// The parameter is a string, no whitespace 
// We need to count each occurrence of each letter in the string and return it in an object
// Create an empty object
// Loop through each character in the string, check if the value exist, if it does the value is 1. If the character appears more than once we increment by 1

function count (str) {  
  let countObj = {}
  for(const c of str){
    if (countObj[c]){
      countObj[c]++
    }else{
      countObj[c] = 1
    }
  }
  return countObj;
};


/*Test Cases   
count("aba") => { a: 2, b: 1 }
count("") => {}
count("abba") => { a: 2, b: 2 }
*/