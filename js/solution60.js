/* Grade Book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade. Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100 */

// The parameters are the three numbers 
// First step is to create a new variable called average that will hold the calculated average score
// Use the average variable in a condtional and the conditional expression is used to determined what output will be returned


function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3

    if (average >= 90) {
      return 'A'
    }else if (average >= 80) {
      return 'B'
    }else if (average >= 70) {
      return 'C'
    }if (average >= 60) {
      return 'D'
    }else {
      return 'F'
    }
};

/*Test Cases   
getGrade(95,90,93) => Output: "A"
getGrade(65,70,59) => Output: "D"
*/