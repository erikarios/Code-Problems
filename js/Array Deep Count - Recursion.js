/* Array Deep Count - Recursion

You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
*/

// The parameter is an array
// We need to return an integer that represents the number of all elements in the array, including nested arrays
// Create a variable to count the elements in the array and set it to 0
// Use a for loop to iterate through the array length and the count will increase by one for each element
// Recursion is used when the element is an array. If the element is an array (nested array), then the function will call itself
// We need to add our variable of count with that of the nested arrays 
// Last the count will be returned 

function deepCount(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count++;
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
};

/*Test Cases   
deepCount([]) => 0
deepCount([1, 2, 3]) => 3
deepCount(["x", "y", ["z"]]) => 4
deepCount([1, 2, [3, 4, [5]]]) => 7
deepCount([[[[[[[[[]]]]]]]]]) => 8
*/