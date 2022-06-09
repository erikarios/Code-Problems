/*School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0*/

//The parameter is two numbers 
//a conditional is used with a logical OR (||) operator was used to fit the condtion that if the n 0R m is less than zero, then the output would be zero

function paperwork(n,m){ 
    if (n<0 || m<0) {
      return 0;
    }
    else{
      return n*m;
    }
}

/*Test Cases   
paperwork(5,5) => Output: 25
paperwork(5,-5) => Output: 0
*/