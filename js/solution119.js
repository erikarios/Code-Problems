/* Substituting Variables Into Strings: Padded Numbers

Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number */

// The parameters a number that will have between 1-5 digits
// We want to return a string that stating what the value of is. The number returned has to be 5 digits. If the parameter that is given is less than 5 digits, then we need to put zeros before the parameter 
// We can use slice(-5) to go back five spaces from the end of the number and concatenate with "00000" which will fill up any empty spaces with zeros and turn it into a string

function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
};

/*Test Cases   
solution(5) => "Value is 00005"
solution(1204) => "Value is 01204"
solution(109) => "Value is 00109"
*/

