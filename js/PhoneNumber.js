/* Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/

// The parameter is an array of numbers
// We need to return the numbers in a phone number format
// We can create a variable displaying the format that we want the numbers to appear in
// Using a for loop we can iterate through the numbers and use the replace method to replace the x in the format variable
// Return the format

function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++){
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  };

/*Test Cases   
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) => "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => "(123) 456-7890"
*/