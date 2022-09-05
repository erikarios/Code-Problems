/* Simple string characters

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows */

// The parameter is a string that contains uppercase letters, lowercase letters, numbers, and special characters
// We want to return an array of that represents the number of uppercase letters, lowercase letters, numbers, and special characters in the string
// We need to go through the string and look at each character in the string to figure out what kind of character it is
// We can create variables that represent what we are looking for and set them to zero
// We can split up the individual elements in the string and iterate through them using for each
// A condition can be used to determine what where each element will be counted
// We then return the numbers in an array which we can set up using literal notation


function solve(str) {
    let upper = 0;
    let lower = 0;
    let nums = 0;
    let special = 0;
  
    str.split("").forEach((el) => {
      if (/[a-z]/.test(el)) lower++;
      if (/[A-Z]/.test(el)) upper++;
      if (/[0-9]/.test(el)) nums++;
      if (el.match(/[^0-9A-Za-z]/g)) special++;
    });
  
    return [upper, lower, nums, special];
}

/*Test Cases   
solve("Codewars@codewars123.com") => [1,18,3,2]
solve("bgA5<1d-tOwUZTS8yQ") => [7,6,3,2]
solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H") => [9,9,6,9]
solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD") => [15,8,6,9]
*/