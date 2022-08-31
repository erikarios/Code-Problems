/* Building Strings From a Hash

Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs. The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair. */

// The parameters is an object. An object has a {key:value} pair
// We want to return the same objects as string in the format of 'key = value'
// Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
// We than can use map() method to create strings of the key value pair and use template literals to have return the string in the exact way that we were asked
// We can use join() method to connect the pairs together with a comma

function solution(pairs){
    return Object.entries(pairs).map(([key, value]) => `${key} = ${value}`).join(',');
};

/*Test Cases   
solution({a: 1, b: '2'}) => "a = 1,b = 2"
*/