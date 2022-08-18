/* Find Multiples of a Number

Build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base */

// The parameter will be two numbers
// We need to return an array of mulitples where integer indicates the multiple factor, and limit indicates where we stop
// We can set up an empty array using literal notation
// We can use a for loop. So we start with our parameter of integer, we go up to our parameter of limit, then we add the the integer which would create multiples until we reach out limit
// We add then add the numbers from the for loop into the empty array using the push method

function findMultiples(integer,limit){
    let result = []
    
    for (let i = integer; i <= limit ; i += integer)
      result.push(i)
      
    return result
};

/*Test Cases   
findMultiples(5, 25) => Output: [5, 10, 15, 20, 25]
findMultiples(5, 7) => Output: [5]
*/