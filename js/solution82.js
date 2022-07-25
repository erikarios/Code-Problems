/* What is between?

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them */

// The parameter is two integers
// We want to return an array with all the integers between are parameters
// Set up an empty array. Then use a for loop to iterate through integers 
// Our starting point is parameter a and our ending point is b

function between(a, b) {
    let arr = []
    for(let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
  };

/*Test Cases   
between(1, 4) => Output: [1, 2, 3, 4]
between(-2, 2) => Output: [-2, -1, 0, 1, 2]
*/