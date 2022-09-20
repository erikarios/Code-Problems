/* Fizz Buzz

Return an array containing the numbers from 1 to N, where N is the parametered value.
Replace certain values however if any of the following conditions are met:
If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1 */

// The parameter is an integer
// We want to return an array containing all the numbers up to the given integer, with certain contitions being met. Multiples of the number 3 needs to be replaced with the string "Fizz", multiples of the number 5 needs to be replaced with the string "Buzz", and multiples of the number 3 and 5 needs to be replaced with the string "FizzBuzz"
// We need to create an array of ascending numbers going up to the given parameter. We can do so using a for loop and pushing the elements in an empty array using the .push() method. Am empty array can be set up using literal notation
// We must take into account that N will never be less than one so the for loop starts at one
// We can use if else statements to make sure the condtions are met
// Last we return the array 

function fizzbuzz(n){ 
    let arr = []
    for(let i=1; i <=n; i++){
        if(i % 3 === 0 && i % 5 ===0){
            arr.push("FizzBuzz")
        }else if(i % 3 === 0){
            arr.push("Fizz")
        }else if(i % 5 ===0){
            arr.push("Buzz")
        }else{
            arr.push(i)
        }
    }
    return arr
};

/*Test Cases   
fizzbuzz(3) => [1, 2, "Fizz"]
fizzbuzz(15) => [1, 2,"Fizz", 4, "Buzz","Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
*/